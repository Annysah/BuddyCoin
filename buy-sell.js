var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var currency = btnTarget.dataset.currency;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + currency).classList.add("active");
   
   btnTarget.classList.add("active");
}

//Function to display rates of bitcoin 
function coinPrice() {
   fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=bitcoin%2C%20')
   .then(function (response) {
       if(!response.ok) {
           throw Error("ERROR");
       }
       return response.json();
   })
   .then(function (data) {
       console.log(data);
       if(data.length > 0) {
           let htmlString = "";

           data.forEach((u) => {
               let exchangeRate = 500;
               let setPrice = u.current_price * exchangeRate;
               htmlString += `Rate: 1btc = ${u.current_price} which is ${setPrice}`;          
           })
           document.getElementById("market-rate").textContent = htmlString;
       }
   })
   .catch(function (error) {
       console.log(error);
   })

}

coinPrice();


function coinPrice2() {

   fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=ethereum%2C%20')
   .then(function (response) {
       if(!response.ok) {
           throw Error("ERROR");
       }
       return response.json();
   })
   .then(function (data) {
       console.log(data);
       if(data.length > 0) {
           let htmlString2 = "";

           data.forEach((u) => {
               let exchangeRate = 500;
               let setPrice = u.current_price * exchangeRate;
               htmlString2 += `Rate: 1eth = ${u.current_price} which is ${setPrice}`;          
           })
           document.getElementById("market-rate2").textContent = htmlString2;
       }
   })
   .catch(function (error) {
       console.log(error);
   })

}

coinPrice2();

function coinPrice3() {

   fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=tron%2C%20')
   .then(function (response) {
       if(!response.ok) {
           throw Error("ERROR");
       }
       return response.json();
   })
   .then(function (data) {
       console.log(data);
       if(data.length > 0) {
           let htmlString3 = "";

           data.forEach((u) => {
               let exchangeRate = 500;
               let setPrice = u.current_price * exchangeRate;
               htmlString3 += `Rate: 1trx = ${u.current_price} which is ${setPrice}`;          
           })
           document.getElementById("market-rate3").textContent = htmlString3;
       }
   })
   .catch(function (error) {
       console.log(error);
   })

}

coinPrice3();


function coinPrice4() {

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=tether%2C%20')
    .then(function (response) {
        if(!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        if(data.length > 0) {
            let htmlString3 = "";
 
            data.forEach((u) => {
                let exchangeRate = 500;
                let setPrice = u.current_price * exchangeRate;
                htmlString3 += `Rate: 1usdt = ${u.current_price} which is ${setPrice}`;          
            })
            document.getElementById("market-rate4").textContent = htmlString3;
        }
    })
    .catch(function (error) {
        console.log(error);
    })
 
 }
 
 coinPrice4();
 
 
