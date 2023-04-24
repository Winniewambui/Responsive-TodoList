

 // Get Access to the button
 let button = document.querySelector("#button");

 // Get Access to the ul tag (the parent of the li tag)
 let todoWrapper = document.querySelector(".todo-wrapper");

 // OnSubmit Add New Task To The DOM
button.addEventListener("click", () => {
   // Get User Input
   let userInput = document.querySelector("#userInput").value;

   if (userInput.length > 5) {
     // Create a new li tag
     let li = document.createElement("li");

     // Add a class name of todo to the li tag
     li.className = "todo";

     // Create a Text Node from user input
     let node = document.createTextNode(userInput);

     // Append node to li
     li.appendChild(node);

     // Append li to ul
     todoWrapper.appendChild(li);

     // Empty user Input
     document.querySelector("#userInput").value = "";
   } else {
     alert("Todo's can't be less than 5 characters :)");
   }
 });


 todoWrapper.addEventListener("click", (e) => {
   if (e.target.className === "todo") {
     let msg = confirm(
       `Are you sure you want to delete \n ${e.target.innerText}`
     );

     if (msg == true) {
       todoWrapper.removeChild(e.target);
     }
   }
 });



