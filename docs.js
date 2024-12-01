document.addEventListener('DOMContentLoaded', function () {
    const commands = [
        { name: '!help', description: 'Botの使い方やヘルプを表示します。', usage: '!help', category: 'utility' },
        { name: '!ping', description: 'Botの応答時間を測定します。', usage: '!ping', category: 'utility' },
        { name: '!play', description: '音楽を再生します。', usage: '!play [曲名]', category: 'music' },
        { name: '!skip', description: '再生中の音楽をスキップします。', usage: '!skip', category: 'music' },
        { name: '!kick', description: 'ユーザーをサーバーからキックします。', usage: '!kick [ユーザー名]', category: 'admin' },
        { name: '!ban', description: 'ユーザーをサーバーから禁止します。', usage: '!ban [ユーザー名]', category: 'admin' },
        { name: '!mute', description: 'ユーザーをミュートにします。', usage: '!mute [ユーザー名]', category: 'admin' },
        { name: '!unmute', description: 'ユーザーのミュートを解除します。', usage: '!unmute [ユーザー名]', category: 'admin' },
        { name: '!clear', description: 'チャットをクリアします。', usage: '!clear [メッセージ数]', category: 'admin' },
        { name: '!info', description: 'Botの情報を表示します。', usage: '!info', category: 'utility' }
        // ここに50個のコマンドを追加
    ];

    const commandListContainer = document.getElementById('command-list');

    // コマンドリストの表示
    function displayCommands(commandsToDisplay) {
        commandListContainer.innerHTML = '';
        commandsToDisplay.forEach(command => {
            const commandElement = document.createElement('div');
            commandElement.classList.add('command');
            commandElement.innerHTML = `
                <div class="command-title">${command.name}</div>
                <div class="command-description">${command.description}</div>
                <div class="command-usage">${command.usage}</div>
            `;
            commandListContainer.appendChild(commandElement);
        });
    }

    // 検索機能
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        const filteredCommands = commands.filter(command => command.name.toLowerCase().includes(query));
        displayCommands(filteredCommands);
    });

    // リセット機能
    const resetButton = document.getElementById('reset-btn');
    resetButton.addEventListener('click', function () {
        searchInput.value = '';
        displayCommands(commands);
    });

    // カテゴリーフィルター機能
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = button.getAttribute('data-category');
            const filteredCommands = category === 'all' ? commands : commands.filter(command => command.category === category);
            displayCommands(filteredCommands);
        });
    });

    // 初期表示
    displayCommands(commands);
});
