var mixer1;

$(document).ready(async function () {

  if(document.querySelector('#section--projects')){
    mixer1 = mixitup('#section--projects', {
        selectors: {
            target: '#section--projects .mix',
            control: '#section--projects .filter-control'
        }
    });   
  }

  const projects = await fetch("js/projects.json")
                        .then(res => res.json())
        
  const project = await fetch(projects[0])
                    .then(res => res.text())
                    .then(res => objFromYAML(res))

  console.log(project)

})