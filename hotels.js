const hotels = [
  {
    "name": "Sayeman Beach Resort",
    "location": "Cox's Bazar",
    "stars": 5,
    "price": 5081,
    "people": 2,
    "breakfast": true,
    "pool": false,
    "gym": true,
    "inclusive": false,
    "exclusive": true,
    "image": "files/ho1.jpg",
    "hasTourGuide": true,
    "packageType": "Gold",
    "tags": [
      "Breakfast",
      "Gym",
      "Exclusive",
      "Tour Guide",
      "Gold"
    ],
    "hotel_id": 15
  },
  {
    "name": "World Palace Hotel",
    "location": "Cox's Bazar",
    "stars": 2,
    "price": 12344,
    "people": 2,
    "breakfast": false,
    "pool": true,
    "gym": false,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho2.jpg",
    "hasTourGuide": false,
    "packageType": "Silver",
    "tags": [
      "Pool",
      "Inclusive",
      "Silver"
    ],
    "hotel_id": 16
  },
  {
    "name": "Hotel Sea Crown",
    "location": "Cox's Bazar",
    "stars": 4,
    "price": 3385,
    "people": 5,
    "breakfast": true,
    "pool": true,
    "gym": true,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho3.jpg",
    "hasTourGuide": false,
    "packageType": "Bronze",
    "tags": [
      "Breakfast",
      "Pool",
      "Gym",
      "Inclusive",
      "Bronze"
    ],
    "hotel_id": 17
  },
  {
    "name": "Royal Tulip Sea Pearl Beach Resort & Spa",
    "location": "Cox's Bazar",
    "stars": 4,
    "price": 3242,
    "people": 1,
    "breakfast": false,
    "pool": true,
    "gym": false,
    "inclusive": false,
    "exclusive": true,
    "image": "files/ho4.jpg",
    "hasTourGuide": true,
    "packageType": "Platinum",
    "tags": [
      "Pool",
      "Exclusive",
      "Tour Guide",
      "Platinum"
    ],
    "hotel_id": 18
  },
  {
    "name": "Long Beach Hotel",
    "location": "Cox's Bazar",
    "stars": 3,
    "price": 6142,
    "people": 4,
    "breakfast": false,
    "pool": false,
    "gym": true,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho5.jpg",
    "hasTourGuide": false,
    "packageType": "Gold",
    "tags": [
      "Gym",
      "Inclusive",
      "Gold"
    ],
    "hotel_id": 19
  },
  {
    "name": "D'More Sajek Valley Hotel & Resort",
    "location": "Sajek",
    "stars": 2,
    "price": 5356,
    "people": 3,
    "breakfast": true,
    "pool": false,
    "gym": false,
    "inclusive": false,
    "exclusive": true,
    "image": "files/ho6.jpg",
    "hasTourGuide": true,
    "packageType": "Silver",
    "tags": [
      "Breakfast",
      "Exclusive",
      "Tour Guide",
      "Silver"
    ],
    "hotel_id": 20
  },
  {
    "name": "Abakash Resort Sajek Valley",
    "location": "Sajek",
    "stars": 4,
    "price": 8391,
    "people": 4,
    "breakfast": false,
    "pool": false,
    "gym": false,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho7.jpg",
    "hasTourGuide": false,
    "packageType": "Gold",
    "tags": [
      "Inclusive",
      "Gold"
    ],
    "hotel_id": 21
  },
  {
    "name": "MadVenture Resort",
    "location": "Sajek",
    "stars": 4,
    "price": 3471,
    "people": 1,
    "breakfast": true,
    "pool": true,
    "gym": false,
    "inclusive": false,
    "exclusive": true,
    "image": "files/ho8.jpg",
    "hasTourGuide": true,
    "packageType": "Platinum",
    "tags": [
      "Breakfast",
      "Pool",
      "Exclusive",
      "Tour Guide",
      "Platinum"
    ],
    "hotel_id": 22
  },
  {
    "name": "Meghchut Resort",
    "location": "Sajek",
    "stars": 5,
    "price": 10430,
    "people": 2,
    "breakfast": false,
    "pool": true,
    "gym": false,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho9.jpg",
    "hasTourGuide": false,
    "packageType": "Silver",
    "tags": [
      "Pool",
      "Inclusive",
      "Silver"
    ],
    "hotel_id": 23
  },
  {
    "name": "Rock Paradise Resort",
    "location": "Sajek",
    "stars": 3,
    "price": 7387,
    "people": 2,
    "breakfast": true,
    "pool": false,
    "gym": true,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho10.jpg",
    "hasTourGuide": true,
    "packageType": "Bronze",
    "tags": [
      "Breakfast",
      "Gym",
      "Inclusive",
      "Tour Guide",
      "Bronze"
    ],
    "hotel_id": 24
  },
  {
    "name": "Rose View Hotel",
    "location": "Sylhet",
    "stars": 5,
    "price": 3612,
    "people": 5,
    "breakfast": false,
    "pool": false,
    "gym": true,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho11.jpg",
    "hasTourGuide": false,
    "packageType": "Gold",
    "tags": [
      "Gym",
      "Inclusive",
      "Gold"
    ],
    "hotel_id": 25
  },
  {
    "name": "Laguna La Place",
    "location": "Sylhet",
    "stars": 4,
    "price": 7249,
    "people": 3,
    "breakfast": true,
    "pool": true,
    "gym": false,
    "inclusive": false,
    "exclusive": true,
    "image": "files/ho12.jpg",
    "hasTourGuide": true,
    "packageType": "Platinum",
    "tags": [
      "Breakfast",
      "Pool",
      "Exclusive",
      "Tour Guide",
      "Platinum"
    ],
    "hotel_id": 26
  },
  {
    "name": "Hotel De Rohan Plaza",
    "location": "Sylhet",
    "stars": 2,
    "price": 5261,
    "people": 2,
    "breakfast": true,
    "pool": false,
    "gym": false,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho13.jpg",
    "hasTourGuide": false,
    "packageType": "Silver",
    "tags": [
      "Breakfast",
      "Inclusive",
      "Silver"
    ],
    "hotel_id": 27
  },
  {
    "name": "Ratargul View Resort",
    "location": "Sylhet",
    "stars": 3,
    "price": 9164,
    "people": 6,
    "breakfast": false,
    "pool": true,
    "gym": true,
    "inclusive": false,
    "exclusive": true,
    "image": "files/ho14.jpg",
    "hasTourGuide": true,
    "packageType": "Gold",
    "tags": [
      "Pool",
      "Gym",
      "Exclusive",
      "Tour Guide",
      "Gold"
    ],
    "hotel_id": 28
  },
  {
    "name": "The Grand Paradise Retreat",
    "location": "Sylhet",
    "stars": 2,
    "price": 2806,
    "people": 1,
    "breakfast": false,
    "pool": false,
    "gym": false,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho15.jpg",
    "hasTourGuide": true,
    "packageType": "Bronze",
    "tags": [
      "Inclusive",
      "Tour Guide",
      "Bronze"
    ],
    "hotel_id": 29
  },
  {
    "name": "Hill Crown Hotel & Resort",
    "location": "Bandarban",
    "stars": 2,
    "price": 3241,
    "people": 3,
    "breakfast": false,
    "pool": true,
    "gym": true,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho16.jpg",
    "hasTourGuide": false,
    "packageType": "Silver",
    "tags": [
      "Pool",
      "Gym",
      "Inclusive",
      "Silver"
    ],
    "hotel_id": 30
  },
  {
    "name": "River View Hotel & Resort",
    "location": "Bandarban",
    "stars": 4,
    "price": 6285,
    "people": 4,
    "breakfast": true,
    "pool": false,
    "gym": true,
    "inclusive": false,
    "exclusive": true,
    "image": "files/ho17.jpg",
    "hasTourGuide": true,
    "packageType": "Gold",
    "tags": [
      "Breakfast",
      "Gym",
      "Exclusive",
      "Tour Guide",
      "Gold"
    ],
    "hotel_id": 31
  },
  {
    "name": "SAIRU Hill Resort",
    "location": "Bandarban",
    "stars": 3,
    "price": 2733,
    "people": 6,
    "breakfast": false,
    "pool": false,
    "gym": false,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho18.jpg",
    "hasTourGuide": false,
    "packageType": "Bronze",
    "tags": [
      "Inclusive",
      "Bronze"
    ],
    "hotel_id": 32
  },
  {
    "name": "Hillside Resort Milonchhori",
    "location": "Bandarban",
    "stars": 5,
    "price": 3972,
    "people": 2,
    "breakfast": true,
    "pool": false,
    "gym": false,
    "inclusive": false,
    "exclusive": true,
    "image": "files/ho19.jpg",
    "hasTourGuide": true,
    "packageType": "Platinum",
    "tags": [
      "Breakfast",
      "Exclusive",
      "Tour Guide",
      "Platinum"
    ],
    "hotel_id": 33
  },
  {
    "name": "Fanush Resort",
    "location": "Bandarban",
    "stars": 5,
    "price": 9534,
    "people": 5,
    "breakfast": true,
    "pool": true,
    "gym": true,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho20.jpg",
    "hasTourGuide": true,
    "packageType": "Gold",
    "tags": [
      "Breakfast",
      "Pool",
      "Gym",
      "Inclusive",
      "Tour Guide",
      "Gold"
    ],
    "hotel_id": 34
  },
  {
    "name": "Sundarban Eco Camp",
    "location": "Sundarbans",
    "stars": 4,
    "price": 6207,
    "people": 2,
    "breakfast": false,
    "pool": false,
    "gym": false,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho21.jpg",
    "hasTourGuide": false,
    "packageType": "Silver",
    "tags": [
      "Inclusive",
      "Silver"
    ],
    "hotel_id": 35
  },
  {
    "name": "Tiger Den Camp",
    "location": "Sundarbans",
    "stars": 3,
    "price": 10644,
    "people": 4,
    "breakfast": true,
    "pool": false,
    "gym": true,
    "inclusive": false,
    "exclusive": true,
    "image": "files/ho22.jpg",
    "hasTourGuide": true,
    "packageType": "Bronze",
    "tags": [
      "Breakfast",
      "Gym",
      "Exclusive",
      "Tour Guide",
      "Bronze"
    ],
    "hotel_id": 36
  },
  {
    "name": "Bhadra Tourist Complex",
    "location": "Sundarbans",
    "stars": 2,
    "price": 5265,
    "people": 3,
    "breakfast": true,
    "pool": true,
    "gym": false,
    "inclusive": false,
    "exclusive": true,
    "image": "files/ho23.jpg",
    "hasTourGuide": false,
    "packageType": "Gold",
    "tags": [
      "Breakfast",
      "Pool",
      "Exclusive",
      "Gold"
    ],
    "hotel_id": 37
  },
  {
    "name": "Gazi Tourist Complex",
    "location": "Sundarbans",
    "stars": 5,
    "price": 9149,
    "people": 6,
    "breakfast": false,
    "pool": true,
    "gym": true,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho24.jpg",
    "hasTourGuide": false,
    "packageType": "Platinum",
    "tags": [
      "Pool",
      "Gym",
      "Inclusive",
      "Platinum"
    ],
    "hotel_id": 38
  },
  {
    "name": "Koromjal Rest House",
    "location": "Sundarbans",
    "stars": 2,
    "price": 5583,
    "people": 4,
    "breakfast": false,
    "pool": false,
    "gym": true,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho25.jpg",
    "hasTourGuide": true,
    "packageType": "Silver",
    "tags": [
      "Gym",
      "Inclusive",
      "Tour Guide",
      "Silver"
    ],
    "hotel_id": 39
  },
  {
    "name": "Water Lily Camp",
    "location": "Tanguar Haor",
    "stars": 4,
    "price": 4567,
    "people": 3,
    "breakfast": false,
    "pool": true,
    "gym": true,
    "inclusive": false,
    "exclusive": true,
    "image": "files/ho26.jpg",
    "hasTourGuide": true,
    "packageType": "Bronze",
    "tags": [
      "Pool",
      "Gym",
      "Exclusive",
      "Tour Guide",
      "Bronze"
    ],
    "hotel_id": 40
  },
  {
    "name": "Haor View Resort",
    "location": "Tanguar Haor",
    "stars": 5,
    "price": 7830,
    "people": 5,
    "breakfast": true,
    "pool": false,
    "gym": false,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho27.jpg",
    "hasTourGuide": false,
    "packageType": "Gold",
    "tags": [
      "Breakfast",
      "Inclusive",
      "Gold"
    ],
    "hotel_id": 41
  },
  {
    "name": "Hason Raja Farm Stay",
    "location": "Tanguar Haor",
    "stars": 3,
    "price": 2334,
    "people": 2,
    "breakfast": false,
    "pool": false,
    "gym": false,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho28.jpg",
    "hasTourGuide": false,
    "packageType": "Silver",
    "tags": [
      "Inclusive",
      "Silver"
    ],
    "hotel_id": 42
  },
  {
    "name": "Tanguar Tourist Camp",
    "location": "Tanguar Haor",
    "stars": 2,
    "price": 6791,
    "people": 6,
    "breakfast": true,
    "pool": true,
    "gym": false,
    "inclusive": false,
    "exclusive": true,
    "image": "files/ho29.jpg",
    "hasTourGuide": true,
    "packageType": "Platinum",
    "tags": [
      "Breakfast",
      "Pool",
      "Exclusive",
      "Tour Guide",
      "Platinum"
    ],
    "hotel_id": 43
  },
  {
    "name": "Haor Camp & Cottages",
    "location": "Tanguar Haor",
    "stars": 2,
    "price": 3950,
    "people": 1,
    "breakfast": false,
    "pool": false,
    "gym": true,
    "inclusive": false,
    "exclusive": true,
    "image": "files/ho30.jpg",
    "hasTourGuide": false,
    "packageType": "Gold",
    "tags": [
      "Gym",
      "Exclusive",
      "Gold"
    ],
    "hotel_id": 44
  },
  {
    "name": "Blue Ocean Hotel",
    "location": "Saint Martin",
    "stars": 3,
    "price": 21759,
    "people": 5,
    "breakfast": true,
    "pool": false,
    "gym": true,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho31.jpg",
    "hasTourGuide": false,
    "packageType": "Silver",
    "tags": [
      "Breakfast",
      "Gym",
      "Inclusive",
      "Silver"
    ],
    "hotel_id": 45
  },
  {
    "name": "Sea Shell Hotel",
    "location": "Saint Martin",
    "stars": 4,
    "price": 24728,
    "people": 3,
    "breakfast": false,
    "pool": true,
    "gym": false,
    "inclusive": false,
    "exclusive": true,
    "image": "files/ho32.jpg",
    "hasTourGuide": true,
    "packageType": "Bronze",
    "tags": [
      "Pool",
      "Exclusive",
      "Tour Guide",
      "Bronze"
    ],
    "hotel_id": 46
  },
  {
    "name": "Coral Resort",
    "location": "Saint Martin",
    "stars": 2,
    "price": 16201,
    "people": 4,
    "breakfast": false,
    "pool": true,
    "gym": false,
    "inclusive": false,
    "exclusive": true,
    "image": "files/ho33.jpg",
    "hasTourGuide": true,
    "packageType": "Gold",
    "tags": [
      "Pool",
      "Exclusive",
      "Tour Guide",
      "Gold"
    ],
    "hotel_id": 47
  },
  {
    "name": "Beach Hut",
    "location": "Saint Martin",
    "stars": 5,
    "price": 21632,
    "people": 2,
    "breakfast": true,
    "pool": false,
    "gym": false,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho34.jpg",
    "hasTourGuide": true,
    "packageType": "Platinum",
    "tags": [
      "Breakfast",
      "Inclusive",
      "Tour Guide",
      "Platinum"
    ],
    "hotel_id": 48
  },
  {
    "name": "Saint Martin Beach Resort",
    "location": "Saint Martin",
    "stars": 4,
    "price": 29105,
    "people": 6,
    "breakfast": false,
    "pool": true,
    "gym": true,
    "inclusive": true,
    "exclusive": false,
    "image": "files/ho35.jpg",
    "hasTourGuide": true,
    "packageType": "Gold",
    "tags": [
      "Pool",
      "Gym",
      "Inclusive",
      "Tour Guide",
      "Gold"
    ],
    "hotel_id": 49
  }
];


function renderhotels(filteredhotels) {
  const hotelList = document.getElementById("hotelList");
  hotelList.innerHTML = "";

  if (filteredhotels.length === 0) {
    hotelList.innerHTML = "<p>No hotels match your filters.</p>";
    return;
  }

  filteredhotels.forEach(hotel => {
    const hotelCard = document.createElement("div");
    hotelCard.classList.add("hotel-card");

    hotelCard.innerHTML = `
      <img src="${hotel.image}" alt="${hotel.name}">
      <div class="card-body">
        <h3>${hotel.name}</h3>
        <p>${hotel.location} | ⭐ ${hotel.stars} | ৳${hotel.price}</p>
        <div class="tags">
          ${hotel.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <a href="bookings.html?hotelId=${hotel.hotel_id}" class="book-btn">Book Now</a>
        <a href="universal-hotel.html" class="book-btn">See Details</a>
        <a href="universal-hotel-2.html" class="book-btn">Find Hotels like this one</a>
        <a href="universal-hotel-3.html" class="book-btn">Learn more about us</a>
      </div>
    `;

    hotelList.appendChild(hotelCard);
  });
}

function applyFilters() {
  const location = document.getElementById("locationFilter").value;
  const stars = document.getElementById("starFilter").value;
  const minBudget = parseInt(document.getElementById("minBudget").value) || 0;
  const maxBudget = parseInt(document.getElementById("maxBudget").value) || Infinity;
  const people = parseInt(document.getElementById("peopleCount").value) || 1;
  const breakfast = document.getElementById("breakfast").checked;
  const pool = document.getElementById("pool").checked;
  const gym = document.getElementById("gym").checked;
  const inclusive = document.getElementById("inclusive").checked;
  const exclusive = document.getElementById("exclusive").checked;
  const tourGuide = document.getElementById("tourGuide").checked;
  const packageType = document.getElementById("packageTypeFilter").value;

  const filtered = hotels.filter(hotel => {
    return (
      (location === "" || hotel.location === location) &&
      (stars === "" || hotel.stars == stars) &&
      (hotel.price >= minBudget && hotel.price <= maxBudget) &&
      (hotel.people >= people) &&
      (!breakfast || hotel.breakfast) &&
      (!pool || hotel.pool) &&
      (!gym || hotel.gym) &&
      (!inclusive || hotel.inclusive) &&
      (!exclusive || hotel.exclusive) &&
      (!tourGuide || hotel.hasTourGuide) &&
      (packageType === "" || hotel.packageType === packageType)
    );
  });

  renderhotels(filtered);
}

document.getElementById("filterBtn").addEventListener("click", applyFilters);
renderhotels(hotels);
