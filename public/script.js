// document.addEventListener('DOMContentLoaded', function() {
//   console.log('DOM stopped building');
//
//   var cards = document.querySelectorAll('.car');
//
//   cards.forEach(item => {
//     item.addEventListener('click', shower);
//   })
// });
//
// function shower() {
//   let elem = this;
//   var name = this.querySelector('.name');
//   console.log(name.innerHTML);
// }


document.addEventListener('keydown', function(e) {
  e = e || window.event;
  if(e.metaKey && e.keyCode == 221) {
    document.querySelector('input').focus();
  }
})
