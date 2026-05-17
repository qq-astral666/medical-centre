document.addEventListener('DOMContentLoaded', () => {
    // АККОРДЕОН ДЛЯ FAQ
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;

            // Закрываем другие открытые вкладки
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
            });

            // Переключаем класс active для текущей вкладки
            accordionItem.classList.toggle('active');
        });
    });
});