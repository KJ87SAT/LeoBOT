// スクロールアニメーションを追加
document.querySelectorAll('.navbar a, .cta-button').forEach(link => {
    link.addEventListener('click', function (e) {
        // デフォルトのリンク動作を無効化
        e.preventDefault();

        // リンク先のID（href属性）を取得
        const targetId = this.getAttribute('href');

        // 対象の要素を取得
        const targetElement = document.querySelector(targetId);

        // 対象の要素が存在する場合にスクロールアニメーションを実行
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',  // スムーズにスクロール
                block: 'start'       // 要素の先頭にスクロール
            });
        } else {
            // リンク先がURLの場合は通常の遷移
            window.location.href = targetId;
        }
    });
});

// URL遷移用の関数（別ページへ遷移）
function navigateTo(url) {
    window.location.href = url;
}
