
// var elms = document.getElementsByClassName( 'splide' );

// for ( var i = 0; i < elms.length; i++ ) {
//   new Splide( elms[ i ], {
//     type: 'loop',
//     arrow: false,
//     padding: {left:"15rem", right:"15rem"},
//     gap:'-12rem'
//   } ).mount();
// }

//smooth scroll

function scrollDown() {
  window.scroll({
    top: 655,
    left: 0,
    behavior:'smooth',
    fixedHeight: '20vh',
    fixedWidth: '25vw'
  })
}
  var portfolioBtn = document.querySelector('.portfolio')
  portfolioBtn.addEventListener('click', () => {
    scrollDown()
  })







    