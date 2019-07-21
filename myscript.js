var convertButton = document.getElementById("convert");

function convertToRoman(num) {
  if (num.match(/^-{0,1}\d+$/)) {
    var arrYear = num.toString().split("").reverse();
    var romanYear = "";
    var add = "";
   for(var i=arrYear.length-1; i>=0; i--) {
     switch(i) {
       case 3:
        switch(arrYear[i]) {
          case "1": add="M"; break;
          case "2": add="MM"; break;
          case "3": add="MMM"; break;
        };
        break;
       case 2:
        switch(arrYear[i]) {
          case "0": add=""; break;
          case "1": add="C"; break;
          case "2": add="CC"; break;
          case "3": add="CCC"; break;
          case "4": add="CD"; break;
          case "5": add="D"; break;
          case "6": add="DC"; break;
          case "7": add="DCC"; break;
          case "8": add="DCCC"; break;
          case "9": add="CM"; break;
        };
        break;
       case 1:
        switch(arrYear[i]) {
          case "0": add=""; break;
          case "1": add="X"; break;
          case "2": add="XX"; break;
          case "3": add="XXX"; break;
          case "4": add="XL"; break;
          case "5": add="L"; break;
          case "6": add="LX"; break;
          case "7": add="LXX"; break;
          case "8": add="LXXX"; break;
          case "9": add="XC"; break;
        };
        break;
       case 0:
        switch(arrYear[i]) {
          case "0": add=""; break;
          case "1": add="I"; break;
          case "2": add="II"; break;
          case "3": add="III"; break;
          case "4": add="IV"; break;
          case "5": add="V"; break;
          case "6": add="VI"; break;
          case "7": add="VII"; break;
          case "8": add="VIII"; break;
          case "9": add="IX"; break;
        };
        break;
      }
      romanYear+=add;
    }
    return romanYear;
  }
  else 
    return "beklager at du ikke skrev inn et nummer";
}

convertButton.addEventListener("click", function() {
  var number = document.getElementById("text").value;
  document.getElementById('converted-number').innerHTML = convertToRoman(number);
});

