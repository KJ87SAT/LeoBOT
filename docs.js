document.addEventListener('DOMContentLoaded', () => {
    // コマンドデータ
    const commands = [
        { category: '1', title: 'AFK設定', description: 'ユーザーをAFK状態にします。', usage: '/afk [reason]', admin: false, icon: 'fa-user' },
        { category: '1', title: 'AFK設定解除', description: 'ユーザーのAFK状態を解除します。', usage: '/back', admin: false, icon: 'fa-undo' },
        { category: '1', title: 'ロールパネル作成', description: 'ロールパネルを作成します。', usage: '/create_role_panel [role]', admin: true, icon: 'fa-cogs' },
        { category: '1', title: '一日チャット', description: '一日限定のチャットを初期化します。', usage: '/daychat', admin: true, icon: 'fa-comments' },
        { category: '1', title: '認証メッセージ削除', description: '認証メッセージを削除します。', usage: '/delete_verifier', admin: true, icon: 'fa-trash' },
        { category: '1', title: '一日チャット終了', description: '1Dayチャットを手動で終了します。', usage: '/enddaychat', admin: true, icon: 'fa-stop' },
        { category: '1', title: 'グローバルチャット', description: '指定したチャンネルにグローバルチャットを作成します。他サーバーと交流ができます。', usage: '/glowbal', admin: true, icon: 'fa-globe' },
        { category: '2', title: 'じゃんけん', description: 'じゃんけんを楽しむことができます。', usage: '/janken', admin: false, icon: 'fa-hand-rock' },
        { category: '3', title: '地震情報確認', description: '最新の地震情報を確認できます。', usage: '/latest', admin: false, icon: 'fa-earthquake' },
        { category: '2', title: 'おみくじ', description: 'おみくじを引くことができます。一日の運勢を確かめましょう！', usage: '/omikuji', admin: false, icon: 'fa-gift' },
        { category: '1', title: 'ウェルカムメッセージ設定解除', description: 'ウェルカムメッセージの設定を解除します。', usage: '/remove_welcome', admin: true, icon: 'fa-sign-out-alt' },
        { category: '2', title: 'ルーレット', description: 'ランダムルーレットを回します。最大10項目まで設定できます。', usage: '/roulette [item1] [item2] 最大10まで', admin: false, icon: 'fa-dice' },
        { category: '3', title: 'Google検索', description: '指定したメッセージをGoogle経由で検索し、その結果を表示します。', usage: '/search [検索内容]', admin: false, icon: 'fa-search' },
        { category: '1', title: 'アナウンスチャンネル設定、解除', description: 'アナウンスチャンネルを設定、解除をします。', usage: '/set_announcement', admin: true, icon: 'fa-bullhorn' },
        { category: '1', title: 'ウェルカムメッセージチャンネル設定', description: 'ユーザが参加したときのウェルカムメッセージ送信チャンネルを設定します。', usage: '/set_channel', admin: true, icon: 'fa-users' },
        { category: '1', title: 'ウェルカムメッセージの内容設定', description: 'ユーザーが参加したときのウェルカムメッセージの内容を設定します。', usage: '/set_message', admin: true, icon: 'fa-pencil-alt' },
        { category: '1', title: 'VCログチャンネル設定', description: 'ユーザーがVCに参加、退出、移動したときにログを送信するチャンネルを設定します。' , usage: '/set_vc_log_channel', admin: true, icon: 'fa-headphones' },
        { category: '1', title: '地震情報送信Webhook作成', description: 'このコマンドを実行したチャンネルに地震情報を送信するためのWebhookを作成します。' , usage: '/setup_earthquake_webhook' , admin: true, icon: 'fa-plug' },
        { category: '1', title: 'チケットパネル作成', description: 'チケットパネルを作成します。' , usage: '/ticket' , admin: true, icon: 'fa-ticket-alt' },
        { category: '1', title: 'タイマー', description: '指定した時間をタイマーで時間を測り、時間が経ったらお知らせします。' , usage: '/timer [seconds] & [minutes]' , admin: false, icon: 'fa-clock' },
        { category: '1', title: '認証パネル作成' , description: '認証パネルを作成します。' , usage: '/verifier' , admin: true, icon: 'fa-check-circle' },
        { category: '1', title: '埋め込みメッセージデザイナー' , description: '埋め込みメッセージデザイナーを起動します。' , usage: '/embed_designer' , admin: false , icon: 'fa-pen-to-square' },
        { category: '1', title: '会話レベルアップ通知チャンネル設定' , description: '会話でレベルが上がるシステムで、そのレベルUP通知のチャンネルを設定します。' , usage: '/setlevelchannel [channel]' , admin: true , icon: 'fa-bell' },
        { category: '1', title: 'レベルアップ機能設定切り替え' , description: '会話内のレベルUP機能をON、OFFを切り替えます。' , usage: '/togglelevel' , admin: true , icon: 'fa-toggle-on' },
        { category: '1', title: '自分のレベルを確認' , description: '会話内での自分のレベルを確認できます。' , usage: '/mylevel' , admin: false , icon: 'fa-user-shield' },
        { category: '1', title: 'サーバー内のランキングを確認' , description: 'サーバー内のランキングを確認できます。' , usage: '/rankings' , admin: true , icon: 'fa-trophy' }
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
                    <h3 class="command-title">${adminIcon} <i class="fa ${command.icon}"></i> ${command.title}</h3>
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

     // 管理者専用ボタンのクリックイベント
    const adminOnlyButton = document.getElementById('admin-only-btn');
    adminOnlyButton.addEventListener('click', () => {
        const adminCommands = commands.filter(command => command.admin === true); // 管理者専用コマンドを抽出
        renderCommands(adminCommands); // 管理者専用コマンドを表示
    });
});
