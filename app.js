const circles = document.querySelectorAll(".circle");
const colors = [
  "#edecec",
  "#e3e2e2",
  "#afadad",
  "#a9a6a6",
  "#757474",
  "#5f5e5e",
  "#555454",
  "#4c4c4c",

];

const order = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',

];

const delay = 200;  

function filling() {
  circles.forEach((element, index) => {
    setTimeout(() => {
      document.querySelector(`.circle.${order[index]}`).style.backgroundColor =
        colors[index];

      if (index === order.length - 1) {
        // After the last color is set, turn all circles white
        setTimeout(() => {
          circles.forEach(circle => {
            circle.style.backgroundColor = "white";
          });
          // Restart the coloring process
          filling();
        }, delay);
      }
    }, index * delay);
  });
}

filling();

// circles.forEach((element, index) => {
//   setTimeout(() => {
//     document.querySelector(`.circle.${order[index]}`).style.backgroundColor =
//       colors[index];
//   }, index * delay);

//   repeat();
// });

// function filling() {
//   circles.forEach((element, index) => {
//   setTimeout(() => {
//    document.querySelector(`.circle.${order[index]}`).style.backgroundColor = colors[index];
//   }, index * delay);
// });



// }


// function repeat() {
//   if (order[ order.length - 1 ] === 'h' ) {
//     for (let i = 0; i < order.length; i++) {
//       circles[i].classList.add("white");
//     }
//   }

//     filling();
// }

// for (let i = 0; i < order.length; i++) {
//       const element = document.querySelector(`.circle.${order[i]}`);
//       if (element) {
        

//         setTimeout(function() {
//          element.style.backgroundColor = colors[i];
//         }, 1000);
//       }
// }




// give it a color
// color incrementation
// time interval 
// repeat










