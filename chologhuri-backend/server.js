  const express = require('express');
  const session = require('express-session');
  const mysql = require('mysql2');
  const path = require('path');
  const multer = require('multer');
  const nodemailer = require('nodemailer');

  const app = express();

  // ===== FILE UPLOAD (Profile Picture) =====
  const upload = multer({
    dest: path.join(__dirname, '..', 'uploads')
  });

  // ===== MIDDLEWARE =====
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(session({
    secret: 'any-string-you-like',
    resave: false,
    saveUninitialized: true
  }));
  app.use(express.static(path.join(__dirname, '..')));
  app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

  // ===== database connection pool to connect to mysql =====
  const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root1101',
    database: 'chologhuri'
  });

  // ===== Utility function eta =====
  function splitName(fullName) {
    const [first, ...rest] = fullName.trim().split(/\s+/);
    return { first, last: rest.join(' ') || '' };
  }

  // ===== ROUTES =====
app.get('/api/stats', (req, res) => {
  const stats = {};

  // Query for total users
  const usersQuery = 'SELECT COUNT(*) AS totalUsers FROM users';
  const hotelsQuery = 'SELECT COUNT(*) AS totalHotels FROM hotels';
  const popularHotelQuery = `SELECT h.name, COUNT(th.hotel_id) AS bookings 
                             FROM travel_history th 
                             JOIN hotels h ON th.hotel_id = h.hotel_id 
                             GROUP BY h.name 
                             ORDER BY bookings DESC 
                             LIMIT 1`;

  const popularHotelsQuery = `SELECT h.name, COUNT(th.hotel_id) AS bookings 
                              FROM travel_history th 
                              JOIN hotels h ON th.hotel_id = h.hotel_id 
                              GROUP BY h.name 
                              ORDER BY bookings DESC LIMIT 5`;

  const popularLocationsQuery = `SELECT l.name, COUNT(th.hotel_id) AS bookings 
                                FROM travel_history th 
                                JOIN hotels h ON th.hotel_id = h.hotel_id 
                                JOIN locations l ON h.location_id = l.location_id 
                                GROUP BY l.name 
                                ORDER BY bookings DESC LIMIT 5`;

  // Execute queries in sequence
  db.query(usersQuery, (err, usersResult) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    stats.totalUsers = usersResult[0].totalUsers;

    db.query(hotelsQuery, (err, hotelsResult) => {
      if (err) return res.status(500).json({ error: 'Database error' });

      stats.totalHotels = hotelsResult[0].totalHotels;

      db.query(popularHotelQuery, (err, popularHotelResult) => {
        if (err) return res.status(500).json({ error: 'Database error' });

        stats.mostPopularHotel = popularHotelResult.length ? popularHotelResult[0].name : 'No data';

        db.query(popularHotelsQuery, (err, popularHotelsResult) => {
          if (err) return res.status(500).json({ error: 'Database error' });

          stats.popularHotels = popularHotelsResult;

          db.query(popularLocationsQuery, (err, popularLocationsResult) => {
            if (err) return res.status(500).json({ error: 'Database error' });

            stats.popularLocations = popularLocationsResult;

            res.json(stats); // Send stats response
          });
        });
      });
    });
  });
});

  // Ping Test
  app.get('/api/ping', (req, res) => res.send('pong'));

  // ===== SIGNUP =====
  app.post('/api/signup', upload.single('picture'), (req, res) => {
    const { name, email, phone, password } = req.body;
    const file = req.file;

    if (!file || !name || !email || !phone || !password) {
      return res.status(400).json({ error: 'All fields are required including picture' });
    }

    const { first, last } = splitName(name);
    const picPath = '/uploads/' + file.filename;

    const sql = `
      INSERT INTO users (first_name, last_name, email, password, phone_number, profile_picture)
      VALUES (?, ?, ?, ?, ?, ?)`;

    db.query(sql, [first, last, email, password, phone, picPath], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ error: 'Email already exists' });
        return res.status(500).json({ error: 'Database error' });
      }
      req.session.user_id = result.insertId;
      res.json({ userId: result.insertId });
    });
  });

  // ===== LOGIN =====
  app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email & password required' });

    const sql = `
      SELECT user_id, first_name, last_name, email, profile_picture
      FROM users WHERE email = ? AND password = ?`;

    db.query(sql, [email, password], (err, results) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      if (results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

      req.session.user_id = results[0].user_id;
      res.json(results[0]);
    });
  });

  // ===== LOGOUT =====
  app.post('/api/logout', (req, res) => {
    req.session.destroy(err => {
      if (err) return res.status(500).json({ error: 'Logout failed' });
      res.clearCookie('connect.sid');
      res.sendStatus(200);
    });
  });

  // ===== CURRENT USER =====
  app.get('/api/users/me', (req, res) => {
    const uid = req.session.user_id;
    if (!uid) return res.status(401).json({ error: 'Not logged in' });

    const sql = `
      SELECT user_id, first_name, last_name, email, phone_number, profile_picture, created_at
      FROM users WHERE user_id = ?`;

    db.query(sql, [uid], (err, results) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.json(results[0]);
    });
  });

  // ===== PROFILE + BOOKINGS =====
  app.get('/api/profile', (req, res) => {
    const uid = req.session.user_id;
    if (!uid) return res.status(401).json({ error: 'Not logged in' });

    const userSql = `
      SELECT first_name, last_name, email, phone_number, profile_picture
      FROM users WHERE user_id = ?`;

    const bookingsSql = `
      SELECT h.name AS hotel_name, p.tier AS package_tier, th.check_in_date,
            th.check_out_date, th.adults, th.room_type, th.total_cost, th.status
      FROM travel_history th
      JOIN hotels h ON th.hotel_id = h.hotel_id
      JOIN packages p ON th.package_id = p.package_id
      WHERE th.user_id = ?
      ORDER BY th.check_in_date DESC`;

    db.query(userSql, [uid], (err1, userRes) => {
      if (err1 || !userRes.length) return res.status(500).json({ error: 'User fetch error' });

      db.query(bookingsSql, [uid], (err2, bookingsRes) => {
        if (err2) return res.status(500).json({ error: 'Bookings fetch error' });
        res.json({ user: userRes[0], bookings: bookingsRes });
      });
    });
  });

  // ===== CREATE BOOKING =====
  app.post('/api/bookings', (req, res) => {
    const uid = req.session.user_id;
    const { hotel_id, package_id, check_in_date, check_out_date, adults, room_type, total_cost } = req.body;

    if (!uid) return res.status(401).json({ error: 'Login required' });
    if (!hotel_id || !package_id || !check_in_date || !check_out_date || !adults || !room_type || !total_cost) {
      return res.status(400).json({ error: 'Missing booking data' });
    }

    const sql = `
      INSERT INTO travel_history
      (user_id, hotel_id, package_id, check_in_date, check_out_date, adults, room_type, total_cost, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'booked')`;

    db.query(sql, [uid, hotel_id, package_id, check_in_date, check_out_date, adults, room_type, total_cost], (err, result) => {
      if (err) {
        console.error('[BOOKING FAILED]', err);
        return res.status(500).json({ error: 'Booking failed', details: err.message });
      }
      res.json({ message: 'Booking confirmed', booking_id: result.insertId });
    });
  });

  // ===== HOTEL DETAILS + PACKAGES =====
  app.get('/api/hotels/:id', (req, res) => {
    const hotelId = req.params.id;

    const hotelSql = `
      SELECT h.hotel_id, h.name, h.description, l.name AS location
      FROM hotels h
      JOIN locations l ON h.location_id = l.location_id
      WHERE h.hotel_id = ?`;

    const packageSql = `
      SELECT package_id, tier, price_per_night, duration_days, features
      FROM packages
      WHERE hotel_id = ?`;

    db.query(hotelSql, [hotelId], (err, hotelRes) => {
      if (err || hotelRes.length === 0) {
        return res.status(500).json({ error: 'Hotel not found or DB error' });
      }

      const hotel = hotelRes[0];

      db.query(packageSql, [hotelId], (err2, packages) => {
        if (err2) return res.status(500).json({ error: 'Packages fetch failed' });
        res.json({ hotel, packages });
      });
    });
  });
  

  // ===== SEND CONTACT FORM EMAIL =====


  app.post('/api/contact', async (req, res) => {
    const { myname, email, subject, message } = req.body;

    const mailOptions = {
      from: email,
      to: 'prithvirajchy@gmail.com',  // Your email to receive messages
      subject: `Contact Form: ${subject}`,
      html: `<p><strong>Name:</strong> ${myname}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`
    };

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'prithvirajchy@gmail.com',  //  Gmail address
        pass: 'rdbk ited qzuz qudx'         // Google mail api er jonno password
      }
    });

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (err) {
      console.error('Email sending error:', err);
      res.status(500).json({ error: 'Failed to send email', details: err.message });
    }
  });




  // ===== START SERVER =====
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`✅ Backend running at: http://localhost:${PORT}`);
  });
