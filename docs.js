// 検索機能
document.getElementById('search-btn').addEventListener('click', function () {
    const query = document.getElementById('search').value.toLowerCase();
    const commands = document.querySelectorAll('.command');
    commands.forEach(command => {
        const title = command.querySelector('.command-title').textContent.toLowerCase();
        const description = command.querySelector('.command-description').textContent.toLowerCase();
        if (title.includes(query) || description.includes(query)) {
            command.style.display = 'block'; // 一致するコマンドを表示
        } else {
            command.style.display = 'none'; // 一致しないコマンドは非表示
        }
    });
});

// デフォルトでコマンドリストを50個作成する関数
document.addEventListener('DOMContentLoaded', function () {
    const commandList = document.querySelector('.command-list');

    for (let i = 1; i <= 50; i++) {
        const command = document.createElement('div');
        command.classList.add('command');
        command.innerHTML = `
            <div class="command-title">!command${i}</div>
            <div class="command-description">コマンド${i}の説明。</div>
            <div class="command-usage">使い方: !command${i}</div>
        `;
        commandList.appendChild(command);
    }
});
