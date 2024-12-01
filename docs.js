document.addEventListener('DOMContentLoaded', () => {
    // コマンドデータ
    const commands = [
        { category: '1', title: 'afk', description: 'ユーザーをAFK状態にします。', usage: '/afk [reason]' },
        { category: '1', title: 'back', description: 'ユーザーのAFK状態を解除します。', usage: '/back' },
        { category: '1', title: 'create_role_panel', description: 'ロールパネルを作成します。', usage: '/create_role_panel [role]' },
        { category: '1', title: 'daychat', description: '一日限定のチャットを初期化します。', usage: '/daychat' },
        { category: '1', title: 'delete_verifier', description: '認証メッセージを削除します。', usage: '/delete_verifier' },
        { category: '1', title: 'enddaychat', description: '1Dayチャットを手動で終了します。', usage: '/enddaychat' }
    ];

    const commandList = document.getElementById('command-list');
    const noResultsMessage = document.getElementById('no-results-message');

    // コマンドを表示する関数
    function renderCommands(commandsToRender) {
        commandList.innerHTML = ''; // リストをクリア
        if (commandsToRender.length === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
            commandsToRender.forEach(command => {
                const commandElement = document.createElement('div');
                commandElement.classList.add('command');
                commandElement.innerHTML = `
                    <h3 class="command-title">${command.title}</h3>
                    <p class="command-description">${command.description}</p>
                    <p class="command-usage">使用方法: <code>${command.usage}</code></p>
                `;
                commandList.appendChild(commandElement);
            });
        }
    }

    // 初期表示: すべてのコマンド
    renderCommands(commands);

    // カテゴリーボタンのクリックイベント
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedCategory = button.getAttribute('data-category');
            if (selectedCategory === 'all') {
                renderCommands(commands); // すべてのコマンドを表示
            } else {
                const filteredCommands = commands.filter(command => command.category === selectedCategory);
                renderCommands(filteredCommands); // 選択されたカテゴリーのコマンドを表示
            }
        });
    });

    // 検索機能
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredCommands = commands.filter(command => {
            return command.title.toLowerCase().includes(query) || 
                   command.description.toLowerCase().includes(query);
        });
        renderCommands(filteredCommands); // 検索結果に基づいたコマンドを表示
    });

    // リセットボタン
    const resetButton = document.getElementById('reset-btn');
    resetButton.addEventListener('click', () => {
        searchInput.value = ''; // 検索入力欄をクリア
        renderCommands(commands); // すべてのコマンドを再表示
    });
});
