var mixer1;

$(document).ready(function () {
  if(document.querySelector('#section--projects')){
    mixer1 = mixitup('#section--projects', {
        selectors: {
            target: '#section--projects .mix',
            control: '#section--projects .filter-control'
        }
    });   
  }
})