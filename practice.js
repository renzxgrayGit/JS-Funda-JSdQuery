const dQuery = (selector) => {
    const elements = document.querySelectorAll(selector);

    const methods = {
        hide() {
            elements.forEach((element) => {
                element.style.display = 'none';
            });
            return this;
        },
        show() {
            elements.forEach((element) => {
                element.style.display = '';
            });
            return this;
        },
        click(callback) {
            elements.forEach((element) => {
                element.addEventListener("click", callback);
            });
            return this;
        }
    };

    return methods;
};

const $query = dQuery;