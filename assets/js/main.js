document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tab').forEach(tabContainer => {
        const tabs = tabContainer.querySelectorAll('.tab__header input[type="radio"]');
        const contents = tabContainer.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('change', function () {
                const target = this.id.replace('tab-btn-', 'content-');

                contents.forEach(content => {
                    content.classList.remove('active');
                });

                tabContainer.querySelector(`#${target}`).classList.add('active');
            });
        });

        tabContainer.querySelector('.tab__header input[type="radio"]:checked').dispatchEvent(new Event('change'));
    });

    const modalBtns = document.querySelectorAll('.questionnaire__form');
    const modal = document.getElementById('myModal');
    const closeBtn = modal.querySelector('.close');
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const hiddenInput = document.getElementById('selected-job');
    const fileInput = document.getElementById('resume');
    const fileNameDisplay = document.getElementById('file-name');
    const form = document.querySelector('.questionnaire__form form');
    const formBlock = document.querySelector('.questionnaire__form');
    const successMessage = document.querySelector('.success-message');

    modalBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    dropdownButton.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdownContent.classList.toggle('show');
        dropdownButton.classList.toggle('active');
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            dropdownButton.textContent = this.textContent;
            hiddenInput.value = this.getAttribute('data-value');
            dropdownContent.classList.remove('show');
            dropdownButton.classList.remove('active');
        });
    });

    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-button')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
                dropdownButton.classList.remove('active');
            }
        }
    });

    fileInput.addEventListener('change', function () {
        const fileName = this.files[0].name;
        fileNameDisplay.textContent = `Файл выбран: ${fileName}`;
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.parentElement.style.display = 'none';
        successMessage.style.display = 'block';
    });
});