document.addEventListener("DOMContentLoaded", (event) => {
   
  //           Menú hamburguesa               //

    ham = document.querySelector(".ham-menu");
    nav = document.querySelector(".nav");
    const opcsMenu = document.querySelectorAll("nav ul ul a");
    
    ham.addEventListener("click", () => {
      ham.classList.toggle("active");
      nav.classList.toggle("expanded");
    });
    
    opcsMenu.forEach(opc => {
      opc.addEventListener('click', () => {
        ham.classList.remove("active");
        nav.classList.remove("expanded");
      });
    });
    
    //           Flickity carousel           //

    let options = {
      accessibility: true,
      prevNextButtons: true,
      pageDots: true,
      setGallerySize: false,
      arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
      }
    };
    
    let carousel = document.querySelector('[data-carousel]');
    let slides = document.getElementsByClassName('carousel-cell');
    let flkty = new Flickity(carousel, options);
    
    flkty.on('scroll', function () {
      flkty.slides.forEach(function (slide, i) {
        let image = slides[i];
        let x = (slide.target + flkty.x) * -1/3;
        image.style.backgroundPosition = x + 'px';
      });
    });  
    
  
    //           Validación formulario - Bootstrap          //


(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


//           Menú desplegable - Flecha         //

function toggleArrow(icon) {
  if (icon.classList.contains('fa-caret-down')) {
    icon.classList.replace('fa-caret-down', 'fa-caret-up');
  } else {
    icon.classList.replace('fa-caret-up', 'fa-caret-down');
  }
}

const proy = document.querySelector('header nav .projects a')

const flechaProy = document.querySelector('header nav .projects [href="#proyectos"] i')

proy.addEventListener('click', function() {
  toggleArrow(flechaProy); 
});

//          Ilustración GLightBox          //        

// Inicializador
const lightbox = GLightbox({
  selector: '.glightbox'
  
});   
 

//           Blog - Isotope        //


  let grid = document.querySelector("#article-grid");
  if(grid){
  let iso = new Isotope(grid, {
      itemSelector: ".article-item",
      layoutMode: "masonry"
  });

  let filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
          let filterValue = this.getAttribute("data-filter");
          iso.arrange({ filter: filterValue });

          filterButtons.forEach(btn => btn.classList.remove("active"));
          this.classList.add("active");
      });
  });
}

//    Smooth scroll    //

document.querySelectorAll('main.servicios a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const anchor = document.querySelector('main.proyectos a.scroll-up');

if (anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

});



