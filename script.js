//event listener for entre button
const submitBtn = document.getElementById("login");
submitBtn.addEventListener("click",()=>{
    
    //loginArea 
    const loginArea = document.getElementById("login-area");
    loginArea.style.display="none";

    //transaction area
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display="block";
});


