
// BUDGET CONTROLLER
var budgetController = (function(){

    var Expense = function(id, description, value){ // fumction constructor
        this.id             = id;
        this.description    = description;
        this.value          = value;
    };

    var Income = function(id, description, value){ // fumction constructor
        this.id             = id;
        this.description    = description;
        this.value          = value;
    };

    var data = { // Were data will be stored.
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }    
})();

// UI CONTROLLER
var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',

    }
    
    return {
        getinput: function(){
            // Get values from inputs
            return{
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp.
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    }

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function(){

        var DOM = UICtrl.getDOMstrings();

        // Event Listeners
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        // Event listener for type
        document.addEventListener('keypress', function(e){

            if(e.keyCode === 13 || e.which === 13){
                // e.whitch is for other browsers that simply don't have this keycode property.
            ctrlAddItem();
            }

        });
    }

    var ctrlAddItem = function(){

        // 1. Get the field input data
        var input = UICtrl.getinput();

        // 2. Add the item to the bugdet controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }

    return {
        init: function(){
            setupEventListeners();
        }
    }
    
})(budgetController, UIController);

controller.init();

