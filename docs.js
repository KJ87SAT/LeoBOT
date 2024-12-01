document.addEventListener('DOMContentLoaded', () => {
    // コマンドデータ
    const commands = [
        { category: '1', title: 'AFK設定', description: 'ユーザーをAFK状態にします。', usage: '/afk [reason]' },
        { category: '1', title: 'AFK設定解除', description: 'ユーザーのAFK状態を解除します。', usage: '/back' },
        { category: '1', title: 'ロールパネル作成', description: 'ロールパネルを作成します。', usage: '/create_role_panel [role]' },
        { category: '1', title: '一日チャット', description: '一日限定のチャットを初期化します。', usage: '/daychat' },
        { category: '1', title: '認証メッセージ削除', description: '認証メッセージを削除します。', usage: '/delete_verifier' },
        { category: '1', title: '一日チャット終了', description: '1Dayチャットを手動で終了します。', usage: '/enddaychat' },
        { category: '1', title: 'グローバルチャット', description: '指定したチャンネルにグローバルチャットを作成します。他サーバーと交流ができます。' , usage: '/glowbal' },
        { category: '2', title: 'じゃんけん', description: 'じゃんけんを楽しむことができます。' , usage: '/janken' },
        { category: '3', title: '地震情報確認', description: '最新の地震情報を確認できます。' , usage: '/latest' },
        { category: '2', title: 'おみくじ', description: 'おみくじを引くことができます。一日の運勢を確かめましょう！' , usage: '/omikuji' },
        { category: '1', title: 'ウェルカムメッセージ設定解除' , description: 'ウェルカムメッセージの設定を解除します。' , usage: '/remove_welcome' },
        { category: '2', title: 'ルーレット', description: 'ランダムルーレットを回します。最大10項目まで設定できます。' , usage: '/roulette [item1] [item2] 最大10まで ' },
        { category: '3', title: 'Google検索', description: '指定したメッセージをGoogle経由で検索し、その結果を表示します。' , usage: '/search [検索内容]' },
        { category: '1', title: 'アナウンスチャンネル設定、解除', description: 'アナウンスチャンネルを設定、解除をします。' , usage: '/set_announcement' },
        { category: '1', title: 'ウェルカムメッセージチャンネル設定', description: 'ユーザが参加したときのウェルカムメッセージ送信チャンネルを設定します。' , usage: '/set_channel' },
        { category: '1', title: 'ウェルカムメッセージの内容設定' , description: 'ユーザーが参加したときのウェルカムメッセージの内容を設定します。' , usage: '/set_message' },  
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
                const adminIcon = command.admin 
                    ? `<i class="fa fa-user-shield" title="管理者専用"></i>` 
                    : '';
                const commandElement = document.createElement('div');
                commandElement.classList.add('command');
                commandElement.innerHTML = `
                    <h3 class="command-title">${adminIcon} ${command.title}</h3>
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
