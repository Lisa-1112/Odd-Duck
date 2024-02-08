'use strict';

console.log('Winner!!');
const ctx = document.getElementById('myChart');

 // What does localStorage store => JSON

 //localStorage.setItem('Storage', JSON.stringify(ducks)); // method of the localStorage object, 
 //takes 2 arguments a key, and a value, 
 //function Storage() {
 //   return JSON.parse(localStorage.getItem('Storage'));
 // }
  



new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'cthulhu', 
    'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 
    'unicorn', 'water-can', 'wine-glass', 'wireframe'],
    datasets: [{
      label: 'Odd Duck Winner',
      data: [17, 25, 50, 13],
      borderWidth: 1
    }, {
      label: 'Odd Duck Winner',
      data: [1, 2, 3, 4],
      borderWidth: 1
    }],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

let ducks = [];
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let totalRounds = 5;
let currentRound = 0;

// constructor function -> 'this' is the object we are creating.
function Duck(url, name) {
  this.url = url;
  this.name = name;
  this.clicks = 0;
  this.timesShown =0;
}

let odd1 = new Duck('img/bag.jpg', 'bag');
let odd2 = new Duck('img/banana.jpg', 'banana');
let odd3 = new Duck('img/boots.jpg', 'boots');
let odd4 = new Duck('img/breakfast.jpg', 'Breakfast');
let odd5 = new Duck('img/bubblegum.jpg', 'gum');
let odd6 = new Duck('img/cthulhu.jpg', 'green vampire');
let odd7 = new Duck('img/dog-duck.jpg', 'duck-dog');
let odd8 = new Duck('img/dragon.jpg', 'dragon');
let odd9 = new Duck('img/pen.jpg', 'pen');
let odd10 = new Duck('img/pet-sweep.jpg', 'pet');
let odd11 = new Duck('img/scissors.jpg', 'pizza scissors');
let odd12 = new Duck('img/shark.jpg', 'shark');
let odd13 = new Duck('img/sweep.png', 'sweep');
let odd14 = new Duck('img/tauntaun.jpg', 'taun');
let odd15 = new Duck('img/unicorn.jpg', 'uni');
let odd16 = new Duck('img/water-can.jpg', 'watercan');
let odd17 = new Duck('img/wine-glass.jpg', 'wine');

ducks.push(odd1, odd2, odd3, odd4, odd5, odd6, odd7, odd8, odd9, odd10,
     odd11, odd12, odd12, odd13, odd14, odd15, odd16, odd17);

// setting the src attribute for all our image elements
image1.setAttribute('src', odd1.url);
odd1.timesShown++;
image2.setAttribute('src', odd2.url);
odd1.timesShown++;
image3.setAttribute('src', odd3.url);

odd1.timesShown++;
//(image1,odd1)
//(image2,odd2)
//(image3,odd3)

console.log(ducks);


// add an event listener that runs some code when a goat picture is clicked.
let oddImages = document.getElementById('odd');

// when might you remove the event listener from the OddImages HTML element
// oddImages.removeEventListener()

oddImages.addEventListener('click', function(click) {
  click.preventDefault();
  console.log(click.target.alt); 
  function roundCount(total, current) {
    if (current < total) {
      current++;
    } else {
      //oddImages.removeEventListener('0', handleClick);
      // render the voting results.
      console.log('HERE IS THE DATA!!', ducks);
      showResults();  
      alert('Voting Complete!!');
    }
    return current;
  }
  
  
  
  
  // event.target -> whatever element was interacted with.

    // add 1 to number of clicks
    // search our array of ducks for the goat object that matched the alt
  findDucks(click.target.alt);

  // show 3 different images after a picture is clicked.
 renderNewDucks();
 // render the goat onto the page / add the name
 renderNewDucks(image1, Math.random1);
 renderNewDucks(image2, Math.random2);
 renderNewDucks(image3, Math.random3);
})

function findDucks(alt) {
  for (let i =0; i< ducks.length; i++) {
    if (ducks[i].name === alt) {
      ducks[i].clicks++;
    }
  }
  console.log(ducks);
}

function renderNewDucks() {
  // generate a random index betwee 0 and the length of our ducks array
  let index1 = Math.floor(Math.random() * ducks.length);
  let index2 = Math.floor(Math.random() * ducks.length);
  let index3 = Math.floor(Math.random() * ducks.length);

  while(index1 === index2 || index1 === index3 || index2 === index3) {
    index1 = Math.floor(Math.random() * ducks.length);
    index2 = Math.floor(Math.random() * ducks.length);
    index3 = Math.floor(Math.random() * ducks.length);
  } 
  let randomDuck1 = ducks[index1];
  let randomDuck2 = ducks[index2];
  let randomDuck3 = ducks[index3];


  console.log(randomDuck1, randomDuck2);
  // render the goat onto the page / add the name
  image1.setAttribute('src', randomDuck1.url);
  image2.setAttribute('src', randomDuck2.url);
  image1.setAttribute('alt', randomDuck1.name);
  image2.setAttribute('alt', randomDuck2.name);
  image3.setAttribute('alt', randomDuck3.name);
  image3.setAttribute('src', randomDuck3.url);

}

localStorage.setItem('Storage', JSON.stringify(ducks)); // method of the localStorage object, 
 //takes 2 arguments a key, and a value, 
 function Storage() {
    return JSON.parse(localStorage.getItem('Storage'));
  }


