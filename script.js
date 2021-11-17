function doLoading() {
  alert("Loading the weather report...");
}

function removeCookie() {
  element = document.querySelector(".postion");
  element.remove();
}

function convert(test) {
  var element = document.querySelectorAll(".currentTemp");
  var currentTemp = 0;
  for (i = 0; i <= element.length - 1; i++) {
    currentTemp = parseInt(element[i].innerText);
    if (test.value == "C") {
      currentTemp = Math.round(((currentTemp - 32) * 5) / 9);
      element[i].innerText = currentTemp;
    } else if (test.value == "F") {
      currentTemp = Math.floor((currentTemp * 9) / 5 + 32);
      element[i].innerText = currentTemp;
    }
  }

  console.log(test.value);
}
