// スムーズスクロールアニメーション付きのリンク処理
document.querySelectorAll('.navbar a, .cta-button').forEach(link => {
    link.addEventListener('click', function (e) {
        // リンク先が外部リンクかページ内リンクかを判断
        const targetHref = this.getAttribute('href');
        
        // ページ内リンクの場合
        if (targetHref.startsWith('#')) {
            // デフォルトのリンク動作を無効化
            e.preventDefault();

            // 対象の要素を取得
            const targetElement = document.querySelector(targetHref);

            // 対象の要素が存在する場合にスクロールアニメーションを実行
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // スムーズにスクロール
                    block: 'start'      // 要素の先頭にスクロール
                });
            }
        } else {
            // 外部リンクや遷移先がある場合は、通常通り遷移を行う
            setTimeout(() => {
                window.location.href = targetHref;
            }, 500);  // スクロールアニメーション後に遷移するために少し待機
        }
    });
});
