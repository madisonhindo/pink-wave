var mymap = L.map('winMap').setView([37.172, -95.494], 4.48);

L.tileLayer('https://api.mapbox.com/styles/v1/madisonhindo/cjp9wng9444ah2ssga0mkkq04/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFkaXNvbmhpbmRvIiwiYSI6ImNqcDFnMGNhOTNmMDAzcWt3ZzE1N25sNWoifQ.y96dGGE5ySq9C-maEeI9tg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

for ( let i = 0; i < places.length; i++) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' +
      places[i].descrip + '</p>')
  .addTo(mymap);
}

$(document).ready(() => {
    function hideAll() {
    $('#ocasioText').hide();
    $('#omarText').hide();
    $('#pressleyText').hide();
    $('#sinemaText').hide();

}
  hideAll();

    $('#ocasiocortez').on('click', () => {
      $('#ocasioText').toggle();
    });
    $('#omar').on('click', () => {
      $('#omarText').toggle();
    });
    $('#pressley').on('click', () => {
      $('#pressleyText').toggle();
    });
    $('#sinema').on('click', () => {
      $('#sinemaText').toggle();
    });
});

$(document).ready(() => {
    function hideAll() {
    $('#ocasioTextMobile').hide();
    $('#omarTextMobile').hide();
    $('#pressleyTextMobile').hide();
    $('#sinemaTextMobile').hide();

}
  hideAll();

    $('#mobileOcasioCortez').on('click', () => {
      $('#ocasioTextMobile').toggle();
    });
    $('#mobileOmar').on('click', () => {
      $('#omarTextMobile').toggle();
    });
    $('#mobilePressley').on('click', () => {
      $('#pressleyTextMobile').toggle();
    });
    $('#mobileSinema').on('click', () => {
      $('#sinemaTextMobile').toggle();
    });
});

const buttonElement = document.getElementById('submitButton');
const firstCorrect = document.getElementById('firstCorrect');
const secondCorrect = document.getElementById('secondCorrect');
const thirdCorrect = document.getElementById('thirdCorrect');
const fourthCorrect = document.getElementById('fourthCorrect');

const m1 = "<p>Question 1: Correct!</p>";
const m2 = "<p>Question 1: Incorrect</p>";
const m3 = "<p>Question 2: Correct!</p>";
const m4 = "<p>Question 2: Incorrect</p>";
const m5 = "<p>Question 3: Correct!</p>";
const m6 = "<p>Question 3: Incorrect</p>";
const m7 = "<p>Question 4: Correct!</p>";
const m8 = "<p>Question 4: Incorrect</p>";

function showResults() {
  message = "";
  if (firstCorrect.checked === true) {
    message += m1;
  }
  else {
    message += m2;
  }
  if (secondCorrect.checked === true) {
    message += m3;
  }
  else {
    message += m4;
  }
  if (thirdCorrect.checked === true) {
    message += m5;
  }
  else {
    message += m6;
  }
  if (fourthCorrect.checked === true) {
    message += m7;
  }
  else {
    message += m8;
  }
      document.querySelector("#results").innerHTML = message;
  }

//    document.querySelector("#results").textContent = message;
buttonElement.addEventListener("click", showResults);




// const buttonElement = document.getElementById('submitButton');

/*
 $(document).ready(() => {
  function hideAll() {
  $('#results').hide();
}
hideAll();

function showResults() {
    $('#results').show();
  }

buttonElement.addEventListener("click", showResults);
  });

*/

/*
<div id="results">
<p>Correct answers: Jeannette Rankin, True, 125, 1917</p>
</div>
  const m1 = "Question 1: Correct!"
  const m2 = "Question 1: Incorrect"
  const m3 = "Question 2: Correct!"
  const m4 = "Question 2: Incorrect"
  const m5 = "Question 3: Correct!"
  const m6 = "Question 3: Incorrect"
  const m7 = "Question 4: Correct!"
  const m8 = "Question 4: Incorrect"

  function showResults() {
    if (firstCorrect.checked === true) {
      message = m1;
    }
    else {
      message = m2;
    }
    if (secondCorrect.checked === true) {
      message = m3;
    }
    else {
      message = m4;
    }
    if (thirdCorrect.checked === true) {
      message = m5;
    }
    else {
      message = m6;
    }
    if (fourthCorrect.checked === true) {
      message = m7;
    }
    else {
      message = m8;
    }
    }
    writeResults();
*/
