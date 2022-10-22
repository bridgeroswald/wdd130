

const grade = () => {
    
    let filterlist = document.querySelector("#grade").value;
    switch (filterlist) { 
        case "2-grade":
            money_wallet2 = 200
                    document.getElementById("money-wallet2").innerHTML = money_wallet2
    

    break;

    case "3-grade":
        money_wallet2 = 220
        document.getElementById("money-wallet2").innerHTML = money_wallet2

        break;

        case "4-grade":
            money_wallet2 = 240
            document.getElementById("money-wallet2").innerHTML = money_wallet2
    
            break;   
            case "5-grade":
                money_wallet2 = 260
                document.getElementById("money-wallet2").innerHTML = money_wallet2
        
                break;     

                case "6-grade":
        money_wallet2 = 280
        document.getElementById("money-wallet2").innerHTML = money_wallet2

        break;

        case "7-grade":
        money_wallet2 = 300
        document.getElementById("money-wallet2").innerHTML = money_wallet2

        break;

        case "8-grade":
        money_wallet2 = 320
        document.getElementById("money-wallet2").innerHTML = money_wallet2

        break;

        case "9-grade":
        money_wallet2 = 340
        document.getElementById("money-wallet2").innerHTML = money_wallet2

        break;
        case "10-grade":
        money_wallet2 = 360
        document.getElementById("money-wallet2").innerHTML = money_wallet2

        break;

        case "11-grade":
        money_wallet2 = 380
        document.getElementById("money-wallet2").innerHTML = money_wallet2

        break;

        case "12-grade":
        money_wallet2 = 400
      
        document.getElementById("money-wallet2").innerHTML = money_wallet2

        break;
}
return money_wallet2
}

document.querySelector("#grade").addEventListener("change", grade);

money_wallet =0


function payday_add (){
    let b = child_check()

    money_wallet = money_wallet2 +money_wallet 
    document.getElementById("money-wallet").innerHTML = money_wallet
}
document.querySelector("#passpayday").addEventListener("click", payday_add);

function payday_add_land (){
    let c = child_check()
    money_wallet = money_wallet2 +money_wallet +20
    document.getElementById("money-wallet").innerHTML = money_wallet
}
document.querySelector("#landpayday").addEventListener("click", payday_add_land);

function purchase (){
    const subpurchase = parseInt(document.querySelector("#subpurchase").value);
    money_wallet = money_wallet - subpurchase
    document.getElementById("money-wallet").innerHTML = money_wallet
}
document.querySelector("#subtractpurchase").addEventListener("click", purchase);

function gain_money (){
    const addpurchase = parseInt(document.querySelector("#addpurchase").value);
    money_wallet = money_wallet + addpurchase
    document.getElementById("money-wallet").innerHTML = money_wallet

}
document.querySelector("#addmoney").addEventListener("click", gain_money);

function child_check (){
        mw= grade()

    let number_of_children = data.length *10

    money_wallet2 = money_wallet2 - number_of_children
    document.getElementById("money-wallet2").innerHTML = money_wallet2
   return money_wallet2

}





const home_insurance = () => {
    
    let filterlist = document.querySelector("#home-insur").value;
    switch (filterlist) { 
        case "home-insur-yes":
            money_wallet -= 100
                    document.getElementById("money-wallet").innerHTML = money_wallet
    break;
}
return money_wallet
}
document.querySelector("#home-insur").addEventListener("change", home_insurance);

const health_insurance = () => {
    
    let filterlist = document.querySelector("#health-insur").value;
    switch (filterlist) { 
        case "health-insur-yes":
            money_wallet -= 100
                    document.getElementById("money-wallet").innerHTML = money_wallet
    break;
}
return money_wallet
}
document.querySelector("#health-insur").addEventListener("change", health_insurance);

const vehicle_insurance = () => {
    
    let filterlist = document.querySelector("#vehicle-insur").value;
    switch (filterlist) { 
        case "vehicle-insur-yes":
            money_wallet -= 100
                    document.getElementById("money-wallet").innerHTML = money_wallet
    break;
}
return money_wallet
}
document.querySelector("#vehicle-insur").addEventListener("change", vehicle_insurance);