
// BUDGET CONTROLLER
var budgetController = (function(){

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

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function(){

        // 1. Get the field input data
        var input = UICtrl.getinput();
        console.log(input);
        // 2. Add the item to the bugdet controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }
    
    // Event Listeners
    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    // Event listener for type
    document.addEventListener('keypress', function(e){

        if(e.keyCode === 13 || e.which === 13){
            // e.whitch is for other browsers that simply don't have this keycode property.
           ctrlAddItem();
        }

    });

})(budgetController, UIController);

