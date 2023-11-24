function CreateBankAccount(accNum,name,type,balance){
    this.keyAccNum = accNum;
    this.keyName = name;
    this.keyType = type;
    this.keyBalance = balance;
    this.deposite = function(amount){
        this.balance += amount;
    }
    this.withDraw = function(amount){
        if(amount <= this.balance){
            this.balance -= amount;
            console.log("successfully Withdrawn", this.amount);
        }
        else{
            console.log("hey you have insufficient balancs", this.balancce);
        }
    }
    this.getTotalBalance = function(){
        console.log("Your total balance is ", this.balance);
    }
}





let ac1 = new CreateBankAccount(1234,'Yash','Savings',500);
let ac2 = new CreateBankAccount(1234,'UV','Savings',1000);
let ac3 = new CreateBankAccount(1234,'Vishal','Savings',200);

// without depositing;
console.log(ac1,"without depositing"); 


// after depositiong;
ac1.deposite(100);
ac1.withDraw(300);

ac2.deposite(100);
ac2.withDraw(300);

ac3.deposite(100);
ac3.withDraw(300);


let accounts = [ac1,ac2,ac3];

function getTB(accounts){
    let total = 0;
    for(let i=0; i<=accounts.length; i++){
        total += accounts[i].balance
    }
    conaole.log(total);
}


