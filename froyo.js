const froyoInputMessage = alert("What flavor(s) of frozen yogurt would you like? We offer vanilla, strawberry and coffee. Please list all choices separated by a comma.");

document.getElementById('order').addEventListener('submit', retrieveOrder);
// when the submit button is pressed by the user, it will run the retrieveOrder function

function retrieveOrder(){
    const inputOrder = []; //empty array to store user input
    const userFlavor = document.getElementById('flavorInput').value; //retrieves user input
    inputOrder.push(userFlavor); //adds all user input
    console.log(inputOrder);
}

/*function displayOrder(){
    const customerOrder = ["vanilla","vanilla","vanilla","strawberry","coffee","coffee"];
}
*/