/* Define the dQuery object */
const dQuery = (selector) => {
    /* Select DOM elements based on the provided selector */
    const elements = document.querySelectorAll(selector);

    /* Define methods to manipulate selected elements */
    const methods = {
        /* Method to hide selected elements */
        hide() {
            elements.forEach((element) => { 
                element.style.display = 'none';
            });
            return this;
        },
        /* Method to show selected elements */
        show() {
            elements.forEach((element) => {
                element.style.display = '';
            });
            return this;
        },
        /* Method to add event listener to selected elements */
        click(callback) {
            elements.forEach((element) => {
                element.addEventListener('click', callback);
            });
            return this;
        }
    };

    /* Return the methods to manipulate selected elements */
    return methods;
};

/* Define a shorthand alias for dQuery */
const $query = dQuery;
