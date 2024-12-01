document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const commands = document.querySelectorAll('.command');

    // 検索機能
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        commands.forEach(command => {
            const keywords = command.getAttribute('data-keywords');
            if (keywords.includes(query)) {
                command.classList.remove('hidden');
            } else {
                command.classList.add('hidden');
            }
        });
    });
});
