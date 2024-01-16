const froyoInput = prompt('What flavors of frozen yogurt would you like?');

const customerArray = froyoInput.split(", "); // separates user input by commas soon to be placed in array

const orderArray = [];
for (i = 0; i < customerArray.length; i++){
    //organize customerArray into an actual array
    const flavor = customerArray[i];
    orderArray.push(flavor);
}

console.log(orderArray);

function displayOrder(orderArray){
    //build object to be updated based on current userinput
    let froyoOrderTable = {};
    for (i = 0; i < orderArray.length; i++){
        let currentOrder = orderArray[i];
        if (froyoOrderTable[currentOrder]){
            froyoOrderTable[currentOrder] ++;
        } else {
            froyoOrderTable[currentOrder] = 1;
        }
    }
    return froyoOrderTable;
}

console.table(displayOrder(customerArray
    ));