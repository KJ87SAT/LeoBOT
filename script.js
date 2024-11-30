// スクロールアニメーションを追加
document.querySelectorAll('.navbar a, .cta-button').forEach(link => {
    link.addEventListener('click', function (e) {
        // デフォルトのリンク動作を無効化
        e.preventDefault();

        const targetId = this.getAttribute('href');  // リンク先を取得

        // 外部URLかページ内リンクかを判別
        if (targetId.startsWith('http') || targetId.startsWith('https')) {
            // 外部リンクの場合、通常の遷移を行う
            window.location.href = targetId;
        } else {
            // ページ内リンクの場合、スクロールアニメーションを実行
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',  // スムーズにスクロール
                    block: 'start'       // 要素の先頭にスクロール
                });
            }
        }
    });
});
