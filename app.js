
// BUDGET CONTROLLER
var budgetController = (function(){

})();

// UI CONTROLLER
var UIController = (function(){
    
    // Some controller

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
    
    //Event Listeners
    document.querySelector('.add__btn').addEventListener('click', function(){
        console.log('test');
    });

})(budgetController, UIController);