  document.addEventListener("DOMContentLoaded", function () {
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeBtn = document.getElementById("close-btn");
    const sendBtn = document.getElementById("send-btn");
    const chatBotInput = document.getElementById("chatbot-input");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const fileInput = document.getElementById("file-input");
    const backBtn = document.getElementById("back-btn");  // Back button element

    // Attach event listener to Back button
    backBtn.addEventListener("click", goBack);

    closeBtn.addEventListener("click", () => {
      chatbotContainer.classList.add("hidden");
    });

    sendBtn.addEventListener("click", sendMessage);
    fileInput.addEventListener("change", handleFileUpload);

    chatBotInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendMessage();
    });

    // Go back to the previous page or redirect to the dashboard
    function goBack() {
      if (window.history.length > 1) {
        window.history.back();  // Go back in history if available
      } else {
        window.location.href = "login.html";  // Redirect to login if no history
      }
    }

    // Send message and append it to the chat
    function sendMessage() {
      const userMessage = chatBotInput.value.trim();
      if (userMessage) {
        appendMessage("user", userMessage);
        chatBotInput.value = "";
        getBotResponse(userMessage);
      }
    }

    // Function to append messages to the chat
    function appendMessage(sender, message) {
      const messageContainer = chatbotMessages;
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", sender);

      // If message is an image element, append the element directly
      if (message instanceof HTMLElement) {
        messageElement.appendChild(message);
      } else {
        messageElement.textContent = message;
      }

      messageContainer.appendChild(messageElement);
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }

    // Function to get the bot's response (using the Gemini API)
    async function getBotResponse(userMessage) {
      const API_KEY = ""; // Replace with your Gemini API key
      const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: userMessage }],
              },
            ],
          }),
        });

        const data = await response.json();

        if (!data.candidates || !data.candidates.length) {
          throw new Error("No response from Gemini API");
        }

        const botMessage = data.candidates[0].content.parts[0].text;
        appendMessage("bot", botMessage);
      } catch (error) {
        console.error("Error:", error);
        appendMessage("bot", "Sorry, I'm having trouble responding. Please try again.");
      }
    }

    // Function to handle file uploads
    function handleFileUpload(event) {
      const file = event.target.files[0];

      if (file) {
        const fileName = file.name;
        console.log("File uploaded: ", fileName);

        // Show the uploaded file name in the chat
        appendMessage("user", `You uploaded a file: ${fileName}`);

        // Handle image files
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = function (e) {
            const filePreview = e.target.result;
            const filePreviewElement = document.createElement("img");
            filePreviewElement.src = filePreview;
            filePreviewElement.alt = "Image preview";
            filePreviewElement.style.maxWidth = "100%"; // Ensure the image fits within the chat window

            // Instead of appending [object HTMLImageElement], append the image element correctly
            appendMessage("user", filePreviewElement);
          };
          reader.readAsDataURL(file);
        } else {
          // For non-image files, just acknowledge the file name
          appendMessage("bot", `I see you've uploaded a file: ${fileName}. How would you like to proceed with it?`);
        }
      }
    }
  });
