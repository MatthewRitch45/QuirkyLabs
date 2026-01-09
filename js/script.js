const button = document.getElementById("magicButton");

button.addEventListener("click", () => {
    const messages = [
        "✨ Magic happened!",
        "🧠 You learned something!",
        "🚀 Boom! Website powered up!",
        "👀 Did you expect this?"
    ];

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    alert(randomMessage);
})