
$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        autoplay:true,
        speed: 800,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              arrows: false
            }
          }
        ]
    });

    $('.hut-slider').slick({
      arrows: false,
      autoplay:true,
      speed: 800,
      draggable: false
  });

  $('.area-slider').slick({
    arrows: false,
    autoplay:true,
    speed: 800,
    draggable: false
});

$('.about-slider').slick({
  arrows: false,
  autoplay:true,
  speed: 800,
  draggable: false
});

//accordion script start


$('.accordion-item__trigger').click(function(){
  $(this).next('.accordion-item__content').slideToggle();
  $(this).next('.accordion-item__content ').prev('.accordion-item__trigger').toggleClass('accordion-active');

})


  $('.section-slider').slick({
    arrows: true,
    infinite: false,
    nextArrow: '<button class="slick-next slick-arrow increment" aria-label="Next" type="button" aria-disabled="false" style>Next</button>',
    prevArrow: '<button class="slick-prev slick-arrow decrement" aria-label="Next" type="button" aria-disabled="false" style>Next</button>',
    speed: 150,
    draggable: false,
    swipe: false
  });


  let sliderVestenburg = 1;
  let progressBarVestenburg = 20;
  let counterVestenburg = document.querySelector('.vesterborg__inner .counter');
  let barVestenburg = document.querySelector('.vesterborg__inner .bar');
  $('.vesterborg-slider').on('click', '.increment', function () {
    
    sliderVestenburg++;
    if(sliderVestenburg >= 5)
    {
      sliderVestenburg = 5;
    }
    counterVestenburg.innerHTML = sliderVestenburg;

    if (progressBarVestenburg <= 80 && progressBarVestenburg >= 20) {
      progressBarVestenburg += 20;
      barVestenburg.style.width = progressBarVestenburg + "%";
    }

  });

  $('.vesterborg-slider').on('click', '.decrement', function () {
    sliderVestenburg--;
    if(sliderVestenburg <= 0)
    {
      sliderVestenburg = 1;
    }
    counterVestenburg.innerHTML = sliderVestenburg;
  
    if (progressBarVestenburg <= 100 && progressBarVestenburg >= 40) {
      progressBarVestenburg -= 20;
      barVestenburg.style.width = progressBarVestenburg + "%";
    }
  });

  
  let sliderNum1 = 1;
  let progressBarWidth1 = 20;
  let counter1 = document.querySelector('.section__item-slider1 .counter');
  let bar1 = document.querySelector('.section__item-slider1 .bar');
  $('.section-slider1').on('click', '.increment', function () {
    
    sliderNum1++;
    if(sliderNum1 >= 5)
    {
      sliderNum1 = 5;
    }
    counter1.innerHTML = sliderNum1;

    if (progressBarWidth1 <= 80 && progressBarWidth1 >= 20) {
      progressBarWidth1 += 20;
      bar1.style.width = progressBarWidth1 + "%";
    }
  });

  $('.section-slider1').on('click', '.decrement', function () {
    sliderNum1--;
    if(sliderNum1 <= 0)
    {
      sliderNum1 = 1;
    }
    counter1.innerHTML = sliderNum1;
  
    if (progressBarWidth1 <= 100 && progressBarWidth1 >= 40) {
      progressBarWidth1 -= 20;
      bar1.style.width = progressBarWidth1 + "%";
    }
  });




  let sliderNum2 = 1;
  let progressBarWidth2 = 20;
  let counter2 = document.querySelector('.section__item-slider2 .counter');
  let bar2 = document.querySelector('.section__item-slider2 .bar');
  $('.section-slider2').on('click', '.increment', function () {
    sliderNum2++;
    if(sliderNum2>=5)
    {
      sliderNum2=5;
    }
    counter2.innerHTML = sliderNum2;
    if (progressBarWidth2 <= 80 && progressBarWidth2 >= 20) {
      progressBarWidth2 += 20;
      bar2.style.width = progressBarWidth2 + "%";
    }    
   });

   $('.section-slider2').on('click', '.decrement', function () {
    sliderNum2--;
    if(sliderNum2<=0)
    {
      sliderNum2=1;
    }
    counter2.innerHTML = sliderNum2;
  
    if (progressBarWidth2 <= 100 && progressBarWidth2 >= 40) {
      progressBarWidth2 -= 20;
      bar2.style.width = progressBarWidth2 + "%";
    }
   });


  let sliderNum3 = 1;
  let progressBarWidth3 = 20;
  let counter3 = document.querySelector('.section__item-slider3 .counter');
  let bar3 = document.querySelector('.section__item-slider3 .bar');
   $('.section-slider3').on('click', '.increment', function () {
    sliderNum3++;
    if(sliderNum3>=5)
    {
      sliderNum3=5;
    }
    counter3.innerHTML = sliderNum3;
    if (progressBarWidth3 <= 80 && progressBarWidth3 >= 20) {
      progressBarWidth3 += 20;
      bar3.style.width = progressBarWidth3 + "%";
    }    
  });

   $('.section-slider3').on('click', '.decrement', function () {
    sliderNum3--;
    if(sliderNum3<=0)
    {
      sliderNum3=1;
    }
    counter3.innerHTML = sliderNum3;
  
    if (progressBarWidth3 <= 100 && progressBarWidth3 >= 40) {
      progressBarWidth3 -= 20;
      bar3.style.width = progressBarWidth3 + "%";
    }
  });


  let sliderNum4 = 1;
  let progressBarWidth4 = 20;
  let counter4 = document.querySelector('.section__item-slider4 .counter');
  let bar4 = document.querySelector('.section__item-slider4 .bar');
   $('.section-slider4').on('click', '.increment', function () {
    sliderNum4++;
    if(sliderNum4 >= 5)
    {
      sliderNum4 = 5;
    }
    counter4.innerHTML = sliderNum4;
    if (progressBarWidth4 <= 80 && progressBarWidth4 >= 20) {
      progressBarWidth4 += 20;
      bar4.style.width = progressBarWidth4 + "%";
    }    
  });

   $('.section-slider4').on('click', '.decrement', function () {
    sliderNum4--;
    if(sliderNum4 <= 0)
    {
      sliderNum4 = 1;
    }
    counter4.innerHTML = sliderNum4;
  
    if (progressBarWidth4 <= 100 && progressBarWidth4 >= 40) {
      progressBarWidth4 -= 20;
      bar4.style.width = progressBarWidth4 + "%";
    }
  });

});


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

function selectTab(tabIndex)
{
    document.getElementById('tab1Content1').style.display = "none";
    document.getElementById('tab1Content2').style.display = "none";

    document.getElementById('tab1Content' + tabIndex).style.display="block"; 
}

let tab1 = document.querySelectorAll('.tab1');

for (let i = 0; i < tab1.length; i++) {
  tab1[i].addEventListener("click", function() {
  var current = document.getElementsByClassName(" tab1_active");
  current[0].className = current[0].className.replace(" tab1_active", "");
  this.className += " tab1_active";
  });
}

function selectTab2(tabIndex)
{
    document.getElementById('tab2Content1').style.display = "none";
    document.getElementById('tab2Content2').style.display = "none";
    if(document.getElementById('tab2Content3') != null)
    {
      document.getElementById('tab2Content3').style.display = "none";
    }

    document.getElementById('tab2Content' + tabIndex).style.display="block"; 
}

let tab2 = document.querySelectorAll('.tab2');

for (let i = 0; i < tab2.length; i++) {
  tab2[i].addEventListener("click", function() {
  var current = document.getElementsByClassName(" tab2_active");
  current[0].className = current[0].className.replace(" tab2_active", "");
  this.className += " tab2_active";
  });
}

function selectTab3(tabIndex)
{
    document.getElementById('tab3Content1').style.display = "none";
    document.getElementById('tab3Content2').style.display = "none";

    document.getElementById('tab3Content' + tabIndex).style.display="block"; 
}

let tab3 = document.querySelectorAll('.tab3');

for (let i = 0; i < tab3.length; i++) {
  tab3[i].addEventListener("click", function() {
  var current = document.getElementsByClassName(" tab3_active");
  current[0].className = current[0].className.replace(" tab3_active", "");
  this.className += " tab3_active";
  });
}

function selectTab4(tabIndex)
{
    document.getElementById('tab4Content1').style.display = "none";
    document.getElementById('tab4Content2').style.display = "none";

    document.getElementById('tab4Content' + tabIndex).style.display="block"; 
}

let tab4 = document.querySelectorAll('.tab4');

for (let i = 0; i < tab4.length; i++) {
  tab4[i].addEventListener("click", function() {
  var current = document.getElementsByClassName(" tab4_active");
  current[0].className = current[0].className.replace(" tab4_active", "");
  this.className += " tab4_active";
  });
}

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