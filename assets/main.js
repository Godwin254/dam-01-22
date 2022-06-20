(function(){
    window.addEventListener("DOMContentLoaded", () => {
        //variable
        let input = document.querySelector("input");
        let display = document.querySelector("p");
        let btn = document.querySelector("button");

        //add click listener to button
        btn.addEventListener('click', () => {
            //check if input has value
            if (input.value !== ""){
                display.innerHTML = `Hello ${input.value}, welcome to the bootcamp`;
                input.value = ""; //clear input value
            }else{
                console.log("Input requires some value");
            }
        });

        
    });
})(); //end of self invoking function