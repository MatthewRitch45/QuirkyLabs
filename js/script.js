
export function setupButtonAlert() {
    const button = document.getElementById("magicButton");

    if (!button) {
    console.warn("magicButton not found in DOM");
    return;
    }

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
}
