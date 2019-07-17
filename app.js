
// BUDGET CONTROLLER
var budgetController = (function(){

})();

// UI CONTROLLER
var UIController = (function(){
    
    // Some controller

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){

        // 1. Get the field input data

        // 2. Add the item to the bugdet controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }
    
    // Event Listeners
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    // Event listener for type
    document.addEventListener('keypress', function(e){

        if(e.keyCode === 13 || e.which === 13){
            // e.whitch is for other browsers that simply don't have this keycode property.
           ctrlAddItem();
        }

    });

})(budgetController, UIController);

