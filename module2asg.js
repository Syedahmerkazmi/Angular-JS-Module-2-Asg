 
  (function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    // Service to store the lists of items
    function ShoppingListCheckOffService() {
      var service = this;
    
      // List of items to buy
      var toBuyItems = [
        { name: "cookies", quantity: 10 },
        { name: "chips", quantity: 5 },
        { name: "soda", quantity: 3 },
        { name: "apples", quantity: 6 },
        { name: "bananas", quantity: 2 }
      ];
    
      // List of bought items
      var boughtItems = [];
    
      // Method to move an item from toBuyItems to boughtItems
      service.buyItem = function (itemIndex) {
        var item = toBuyItems[itemIndex];
        toBuyItems.splice(itemIndex, 1);
        boughtItems.push(item);
      };
    
      // Method to get the list of items to buy
      service.getToBuyItems = function () {
        return toBuyItems;
      };
    
      // Method to get the list of bought items
      service.getBoughtItems = function () {
        return boughtItems;
      };
    }
    
    // ToBuyController
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuy = this;
    
      // Get the list of items to buy
      toBuy.items = ShoppingListCheckOffService.getToBuyItems();
    
      // Method to buy an item
      toBuy.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
      };
    }
    
    // AlreadyBoughtController
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var alreadyBought = this;
    
      // Get the list of bought items
      alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
    }
  })();
  