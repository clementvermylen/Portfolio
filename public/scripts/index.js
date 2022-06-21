//smooth scroll

function scrollDown() {
  window.scroll({
    top: 658,
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
