// すべてのリンクに対して、通常の遷移を行う
document.querySelectorAll('.navbar a, .cta-button').forEach(link => {
    link.addEventListener('click', function (e) {
        // デフォルトのリンク動作を有効にする（アニメーションを削除）
        window.location.href = this.getAttribute('href');
    });
});
