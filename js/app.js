// Slide home page images
// Select necessary elements
// const slider = document.querySelector('.slider');
// const sliderItems = document.querySelectorAll('.slider__item');

// // Initialize variables
// let currentSlide = 0;
// const totalSlides = sliderItems.length;
// const slideDuration = 3000; // Duration for each slide in milliseconds

// // Function to show the current slide
// function showSlide(index) {
//     sliderItems.forEach((item, i) => {
//         item.style.display = i === index ? 'block' : 'none';
//     });
// }

// // Function to move to the next slide
// function nextSlide() {
//     currentSlide = (currentSlide + 1) % totalSlides;
//     showSlide(currentSlide);
// }

// // Start the slideshow
// function startSlideshow() {
//     showSlide(currentSlide); // Display the initial slide
//     setInterval(nextSlide, slideDuration); // Automatically change slides
// }

// // Start the slideshow when the page loads
// window.addEventListener('load', startSlideshow);

// // Accordion functionality
// document.addEventListener("DOMContentLoaded", function () {
//   // Select all accordion triggers
//   const accordionTriggers = document.querySelectorAll('.accordion-item__trigger');

//   // Loop through each trigger to add the click event listener
//   accordionTriggers.forEach(trigger => {
//       trigger.addEventListener('click', function () {
//           const content = this.nextElementSibling; // The next sibling is the content of the accordion

//           // Toggle the visibility of the content
//           if (content.style.display === 'block') {
//               content.style.display = 'none';  // Hide content
//               this.classList.remove('accordion-active');  // Remove active class from trigger
//           } else {
//               content.style.display = 'block';  // Show content
//               this.classList.add('accordion-active');  // Add active class to trigger
//           }
//       });
//   });
// });


// Slideshow The Hut
document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(".hut-slider");
  const slides = document.querySelectorAll(".hut-slider__item");
  let currentIndex = 0;

  const showSlide = (index) => {
      slides.forEach((slide, i) => {
          slide.style.display = i === index ? "block" : "none";
      });
  };

  const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  };

  const startSlideshow = () => {
      showSlide(currentIndex);
      setInterval(nextSlide, 3000); // Change slide every 3 seconds
  };

  startSlideshow();
});

/************************************************************/

//The Area
document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(".area-slider");
  const slides = document.querySelectorAll(".area-slider__item");
  let currentIndex = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  };

  const startSlideshow = () => {
    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  };

  startSlideshow();
});
/********************************************************/






// Slideshow The Hut
function selectTab(category) {
  const allTabs = document.querySelectorAll('.tab__item-text');
  const allButtons = document.querySelectorAll('.tab-menu__item');

  // Hide all tabs and remove active class from buttons
  allTabs.forEach((tab) => tab.classList.remove('active'));
  allButtons.forEach((btn) => btn.classList.remove('tab1_active'));

  // Show the selected tab and activate the corresponding button
  document.getElementById(`tab1Content${category}`).classList.add('active');
  document.querySelector(`#menu1Tab${category}`).classList.add('tab1_active');
}

function selectTab2(category) {
  const allTabs = document.querySelectorAll('.tab__item-text');
  const allButtons = document.querySelectorAll('.tab2');

  // Hide all tabs and remove active class from buttons
  allTabs.forEach((tab) => tab.classList.remove('active'));
  allButtons.forEach((btn) => btn.classList.remove('tab2_active'));

  // Show the selected tab and activate the corresponding button
  document.getElementById(`tab2Content${category}`).classList.add('active');
  document.querySelector(`.tab2:nth-child(${category})`).classList.add('tab2_active');
}

function selectTab3(category) {
  const allTabs = document.querySelectorAll('.tab__item-text');
  const allButtons = document.querySelectorAll('.tab3');

  // Hide all tabs and remove active class from buttons
  allTabs.forEach((tab) => tab.classList.remove('active'));
  allButtons.forEach((btn) => btn.classList.remove('tab3_active'));

  // Show the selected tab and activate the corresponding button
  document.getElementById(`tab3Content${category}`).classList.add('active');
  document.querySelector(`#menu3Tab${category}`).classList.add('tab3_active');
}






/********************************** */
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector('.about-slider'); // Select the slider container
  const slides = document.querySelectorAll('.about-slider__item'); // Select all slides
  let currentIndex = 0; // Track the current slide index
  const totalSlides = slides.length; // Total number of slides
  const slideInterval = 3000; // Time in milliseconds for auto-slide (e.g., 3000 = 3 seconds)

  // Function to show the current slide
  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none'; // Show the current slide and hide others
    });
  };

  // Function to go to the next slide
  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide after the last one
    showSlide(currentIndex);
  };

  // Automatically switch slides every few seconds
  setInterval(nextSlide, slideInterval);

  // Initialize the slider by showing the first slide
  showSlide(currentIndex);
});










// document.addEventListener('DOMContentLoaded', () => {
//   const sliderItems = document.querySelectorAll('.section-slider__item');
//   const paginationButtons = document.querySelectorAll('.section-slider__page');
//   let currentIndex = 0;

//   // Function to show the active slide and hide the others
//   const updateSlider = (index) => {
//     sliderItems.forEach((item, i) => {
//       if (i === index) {
//         item.classList.remove('hidden');
//       } else {
//         item.classList.add('hidden');
//       }
//     });

//     // Update active pagination button
//     paginationButtons.forEach((button) => {
//       if (parseInt(button.dataset.filter, 10) === index + 1) {
//         button.classList.add('active');
//       } else {
//         button.classList.remove('active');
//       }
//     });
//   };

//   // Add event listeners to pagination buttons
//   paginationButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//       const filter = parseInt(button.dataset.filter, 10) - 1;
//       currentIndex = filter;
//       updateSlider(currentIndex);
//     });
//   });

//   // Auto-play functionality (optional)
//   setInterval(() => {
//     currentIndex = (currentIndex + 1) % sliderItems.length;
//     updateSlider(currentIndex);
//   }, 5000); // Change slide every 5 seconds

//   // Initialize the slider
//   updateSlider(currentIndex);
// });

///////////////////////////////////////////////////
function selectTab(tabNumber) {
  // Remove 'active' class from all tabs
  document.querySelectorAll('.tab-menu__item').forEach(tab => tab.classList.remove('tab1_active'));
  
  // Add 'active' class to the selected tab
  document.getElementById(`menu1Tab${tabNumber}`).classList.add('tab1_active');
  
  // Show the corresponding content
  document.querySelectorAll('.tab__item-text').forEach(content => content.style.display = 'none');
  document.getElementById(`tab1Content${tabNumber}`).style.display = 'block';
}







/* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */

 const dropBtn = document.querySelector(".dropbtn"); 


 function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");

 }

// Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }

const germanyLang = document.querySelector(".germany");
const englishLang = document.querySelector(".english");
const dutchLang = document.querySelector(".dutch");


germanyLang.addEventListener("click", function(){

    dropBtn.style.background = "url('./images/icon/germany.svg')";
})

englishLang.addEventListener("click", function(){

    dropBtn.style.background = "url('./images/icon/united-kingdom.svg')";
})

dutchLang.addEventListener("click", function(){

    dropBtn.style.background = "url('./images/icon/denmark.svg')";
})







// tabs script start

// function selectTab(tabIndex)
// {
//     document.getElementById('tab1Content1').style.display = "none";
//     document.getElementById('tab1Content2').style.display = "none";

//     document.getElementById('tab1Content' + tabIndex).style.display="block"; 
// }

// let tabOne = document.querySelectorAll('.tab1');

// for (let i = 0; i < tabOne.length; i++) {
//   tabOne[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName(" tab1_active");
//   current[0].className = current[0].className.replace(" tab1_active", "");
//   this.className += " tab1_active";
//   });
// }

// function selectTabTwo(tabIndex)
// {
//     document.getElementById('tab2Content1').style.display = "none";
//     document.getElementById('tab2Content2').style.display = "none";
//     if(document.getElementById('tab2Content3') != null)
//     {
//       document.getElementById('tab2Content3').style.display = "none";
//     }

//     document.getElementById('tab2Content' + tabIndex).style.display="block"; 
// }

// let tabTwo = document.querySelectorAll('.tab2');

// for (let i = 0; i < tabTwo.length; i++) {
//   tabTwo[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName(" tab2_active");
//   current[0].className = current[0].className.replace(" tab2_active", "");
//   this.className += " tab2_active";
//   });
// }

// function selectTabThree(tabIndex)
// {
//     document.getElementById('tab3Content1').style.display = "none";
//     document.getElementById('tab3Content2').style.display = "none";

//     document.getElementById('tab3Content' + tabIndex).style.display="block"; 
// }

// let tabThree = document.querySelectorAll('.tab3');

// for (let i = 0; i < tabThree.length; i++) {
//   tabThree[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName(" tab3_active");
//   current[0].className = current[0].className.replace(" tab3_active", "");
//   this.className += " tab3_active";
//   });
// }

// function selectTabFour(tabIndex)
// {
//     document.getElementById('tab4Content1').style.display = "none";
//     document.getElementById('tab4Content2').style.display = "none";

//     document.getElementById('tab4Content' + tabIndex).style.display="block"; 
// }

// let tabFour = document.querySelectorAll('.tab4');

// for (let i = 0; i < tabFour.length; i++) {
//   tabFour[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName(" tab4_active");
//   current[0].className = current[0].className.replace(" tab4_active", "");
//   this.className += " tab4_active";
//   });
// }

//********************************************** */


// humburger menu 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mobileMenu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".menu__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
///////////////////////////////////


document.addEventListener("DOMContentLoaded", function() {
  const sliderTrack = document.querySelector('.slider__section'); // slider__section elementini seçirik
  const totalSlides = document.querySelectorAll('.slider__item').length; // slider__item sayını alırıq

  console.log(sliderTrack); // Slider track doğru təyin edildimi yoxlayırıq
  console.log(totalSlides); // totalSlides doğru sayılırmı yoxlayırıq

  // if (!sliderTrack || totalSlides === 0) {
  //     console.error("Slider track or slides not found!");
  //     return;
  // }

  let currentSlide = 0;

  // Sliderın növbəti slaydına keçmək
  function goToNextSlide() {
      if (currentSlide < totalSlides - 1) {
          currentSlide++;
      } else {
          currentSlide = 0; // İlk slayda qayıdır
      }
      updateSliderPosition();
  }

  // Sliderın əvvəlki slaydına keçmək
  function goToPrevSlide() {
      if (currentSlide > 0) {
          currentSlide--;
      } else {
          currentSlide = totalSlides - 1; // Son slayda qayıdır
      }
      updateSliderPosition();
  }

  // Slider mövqeyini yeniləyir
  function updateSliderPosition() {
      sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Növbəti və əvvəlki düymələrinə hadisələr əlavə edirik
  const prevButton = document.querySelector('.slider__arrow--prev');
  const nextButton = document.querySelector('.slider__arrow--next');

  prevButton.addEventListener('click', goToPrevSlide);
  nextButton.addEventListener('click', goToNextSlide);

  // Avtomatik slayd dəyişməsi üçün setInterval istifadə edirik
  setInterval(goToNextSlide, 3000); // Hər 3 saniyədən bir növbəti slayda keçir
});

  
/////////////////////////

// document.addEventListener("DOMContentLoaded", () => {
//   const contactUsButton = document.querySelector(".intro__btn");
//   const contactInfoSection = document.querySelector(".contact__info");

//   contactUsButton.addEventListener("click", (event) => {
//       event.preventDefault(); // Prevent default anchor behavior
      
//       // Smooth scroll to the contact section
//       const contactSection = document.getElementById("contact-section");
//       contactSection.scrollIntoView({ behavior: "smooth" });

//       // Add the 'show' class to trigger the lift effect
//       contactInfoSection.classList.add("show");
//   });
// });

//////////////////////////////////


const filterButtons1 = document.querySelectorAll('.section-slider1 .section-slider__page');
const portfolioItems1 = document.querySelectorAll('.section-slider1 .section-slider__item');
filterButtons1.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        portfolioItems1.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === category) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});
///////////////
const filterButtons2 = document.querySelectorAll('.section-slider2 .section-slider__page');
const portfolioItems2 = document.querySelectorAll('.section-slider2 .section-slider__item');
filterButtons2.forEach(button => {
  button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      portfolioItems2.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === category) {
              item.classList.remove('hidden');
          } else {
              item.classList.add('hidden');
          }
      });
  });
});
///////////////
const filterButtons3 = document.querySelectorAll('.section-slider3 .section-slider__page');
const portfolioItems3 = document.querySelectorAll('.section-slider3 .section-slider__item');
filterButtons3.forEach(button => {
  button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      portfolioItems3.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === category) {
              item.classList.remove('hidden');
          } else {
              item.classList.add('hidden');
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const accordionTriggers = document.querySelectorAll('.accordion-item__trigger');

  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      const content = this.nextElementSibling; // Select the content element

      // Check if content is already open
      const isOpen = content.style.display === 'block';

      // Close all open accordions
      document.querySelectorAll('.accordion-item__content').forEach(item => item.style.display = 'none');
      document.querySelectorAll('.accordion-item__trigger').forEach(btn => btn.classList.remove('accordion-active'));

      // Open the clicked accordion if it was not already open
      if (!isOpen) {
        content.style.display = 'block';
        this.classList.add('accordion-active');
      }
    });
  });
});
