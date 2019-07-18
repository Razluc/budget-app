
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
    };
    
    return{
        addItem: function(type, des, val){
            var newItem, ID;

            // Create new ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else{
                ID = 0;
            }

            // Create new item based on 'inc' or 'exp' type.
            if(type === 'exp'){
                newItem = new Expense(ID,des,val);
            }else if(type === 'inc'){
                newItem = new Income(ID,des,val);
            }
            // Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;

        },

        testing: function(){
            console.log(data);
        }
    };
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
        var input, newItem;
        // 1. Get the field input data
        input = UICtrl.getinput();

        // 2. Add the item to the bugdet controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
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

