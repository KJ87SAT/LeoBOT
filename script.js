document.getElementById("showCommands").addEventListener("click", function() {
    const commandList = document.getElementById("commandList");
    if (commandList.classList.contains("hidden")) {
        commandList.classList.remove("hidden");
    } else {
        commandList.classList.add("hidden");
    }
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ページリロードを防ぐ
    alert("お問い合わせありがとうございます。内容を確認次第、ご連絡いたします！");
});

