document.querySelectorAll('.navbar a, .cta-button').forEach(link => {
    link.addEventListener('click', function (e) {
        // リンク先のURLを取得
        const targetHref = this.getAttribute('href');
        
        // 外部リンクや通常の遷移先がある場合、新しいタブで開く
        e.preventDefault(); // デフォルトのリンク動作をキャンセル

        // 新しいタブで開く
        window.open(targetHref, '_blank');
    });
});
