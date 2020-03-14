//function for updating balance and deposit 

function updateSpanText(id, amount){
    const current = document.getElementById(id).innerText;
    const currentAmount = parseFloat(current);
    const totalAmount = amount + currentAmount;
    document.getElementById(id).innerText= totalAmount;
}


//login button event handler
const submitBtn = document.getElementById("login");
submitBtn.addEventListener("click",()=>{

    //loginArea 
    const loginArea = document.getElementById("login-area");
    loginArea.style.display="none";

    //transaction area
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display="block";
});

//deposit button event handler
const depositBtn = document.getElementById("add-deposit");
depositBtn.addEventListener("click",()=>{
    // deposit section
    const depositAmount = document.getElementById("deposit-amount").value;
    const depositNumber = parseFloat(depositAmount);

    //deposit section update
    updateSpanText("currentDeposit",depositNumber);
    document.getElementById("deposit-amount").value="";

     // balance section 
    updateSpanText("currentBalance", depositNumber);    
})

//withdraw button event handler
const withdrawBtn = document.getElementById("add-withdraw");
    withdrawBtn.addEventListener("click",()=>{
    // deposit section
    const withdrawAmount = document.getElementById("withdraw-amount").value;
    const withdrawNumber = parseFloat(withdrawAmount);

    //deposit section update
    updateSpanText("currentWithdraw",withdrawNumber);
    document.getElementById("deposit-amount").value="";

    // balance section update

    const current= document.getElementById("currentBalance").innerText;
    const currentBalance = parseFloat(current);
    const updatedBalance = currentBalance - withdrawNumber;
    document.getElementById("currentBalance").innerText= updatedBalance;


    
})




