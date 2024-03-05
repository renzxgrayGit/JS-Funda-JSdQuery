/* ES5 without prototype */
/* Define the dQuery object */
let dQuery = function(selector) {
    /* Select DOM elements based on the provided selector */
    let elements = document.querySelectorAll(selector);

    /* Define methods to manipulate selected elements */
    let methods = {
        /* Method to hide selected elements */
        hide: function() {
            elements.forEach(function(element) {
                element.style.display = 'none';
            });
            return this;
        },
        /* Method to show selected elements */
        show: function() {
            elements.forEach(function(element) {
                element.style.display = '';
            });
            return this;
        },
        /* Method to add event listener to selected elements */
        click: function(callback) {
            elements.forEach(function(element) {
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
