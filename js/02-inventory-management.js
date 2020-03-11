window.console.log("The Product Inventory Management System");
window.console.log(" ");
window.console.log("COMMAND MENU:");
window.console.log("View all products - view");
window.console.log("Update stock - add");
window.console.log("Exit the program - exit");
window.console.log(" ");

let inventory = [   [4824, 'Shirt', 10, 15.99],
                    [2233, 'Hat', 12, 14.99],
                    [3223, 'Socks', 36, 9.99],
                    [9382, 'Jacket', 5, 49.99],
                    [6343, 'Jeans', 22, 39.99]];

let action = '';
let userEntries;
let storage = localStorage.getItem("userEntries");

while (action != 'view' || action != 'update' || action != 'exit') {
    let action = window.prompt("Enter valid command:")
    if (action === 'view') {
        inventory.sort();

        if (storage != null) {
            let tasks = storage.split("|");
            for (let i = 1; i < tasks.length/4; i++) {
                let x = [4];
                x[0] = tasks[4*i - 4];
                x[1] = tasks[4*i - 3];
                x[2] = tasks[4*i - 2];
                x[3] = tasks[4*i - 1];
                inventory[inventory.length] = x;
            }
        }

        for (let i = 0; i < inventory.length; i++) {
            window.console.log('%i %s (%i) $%s', inventory[i][0], inventory[i][1], inventory[i][2], inventory[i][3]);
        }
        window.console.log(" ");
    }
    else if (action === 'add') {
        let newSku = [4];
        let skuNubber;
        if (localStorage.getItem("userEntries") != null) {
            let userEntries = localStorage.getItem("userEntries") + "|";
            skuNubber = window.prompt("Enter SKU number:");
            if (!isNaN(skuNubber) && (skuNubber>0)) {
            newSku[0] = skuNubber;
            userEntries = userEntries + newSku[0];
            }
            else {
                window.console.log("You entered wrong data.");
                break; 
            }
        }
        else {
            skuNubber = window.prompt("Enter SKU number:");
            if (!isNaN(skuNubber) && (skuNubber>0)) {
            newSku[0] = skuNubber;
            userEntries = newSku[0];
            }
            else {
                window.console.log("You entered wrong data.");
                break; 
            }
        }

        let productName = window.prompt("Enter product name:");
        if (isNaN(productName)) {
            newSku[1] = productName;
            userEntries = userEntries + "|" + newSku[1];
        }
        else {
            window.console.log("You entered wrong data.");
            break; 
        }

        let quantity = window.prompt("Enter product quantity:");
        if (isNaN(quantity) && (quantity > 0)) {
            newSku[2] = quantity
            userEntries = userEntries + "|" + newSku[2];
        }
        else {
            window.console.log("You entered wrong data.");
            break; 
        }

        let price = window.prompt("Enter product price:");
        if (isNaN(price) && (price > 0)) {
            newSku[3] = price;
            userEntries = userEntries + "|" + newSku[3];
        }
        else {
            window.console.log("You entered wrong data.");
            break; 
        }
     
        localStorage.setItem("userEntries", userEntries);  
        inventory[inventory.length] = newSku;
    }
    else if (action === 'exit') {
        break;
    }
    else {
        window.console.log("Command you entered is not valid.")
    }
}










