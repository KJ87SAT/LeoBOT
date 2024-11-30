document.querySelectorAll('.navbar a, .cta-button').forEach(link => {
    link.addEventListener('click', function (e) {
        // リンク先が外部リンクかページ内リンクかを判断
        const targetHref = this.getAttribute('href');

        // 外部リンクや通常の遷移先がある場合は、新しいタブで開く
        e.preventDefault(); // デフォルトの動作をキャンセル

        // 新しいタブで開く
        window.open(targetHref, '_blank');
    });
});
