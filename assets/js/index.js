// add active to class link 
function ActiveElementClass(parentClassSelector , childClassSelectorAll  , closestElement , classAdd){
    document.querySelector(parentClassSelector).addEventListener('click', function (e) {    
        e.preventDefault();
        if (!e.target.closest(closestElement)) return;
    
        document.querySelectorAll(childClassSelectorAll).forEach(e => e.classList.remove(classAdd));
        e.target.closest(closestElement).classList.add(classAdd)
    });
}
// example
// ActiveElementClass('.links' , '.links li a' , 'a' , 'active' );
const navMenu =  document.querySelector('.menu')
const navMobile = document.querySelector('.collapse-menu')
navMenu.addEventListener('click',()=>{
navMenu.classList.toggle('openNav');
if (navMenu.classList.contains('openNav')) {
    navMobile.classList.add('show-collapse-menu')
}else{
    navMobile.classList.remove('show-collapse-menu')

}
})
// -----------------------------------------


  const contactLink = document.querySelectorAll('.contact')
  const modalContact = document.querySelector('.contact-modal')
  const closeModalContact = document.querySelector('.closeModal')
  closeModalContact.addEventListener('click', ()=>{
    modalContact.classList.remove('show-contact-modal')
  })
  contactLink.forEach((e)=>{
    e.addEventListener('click' , ()=>{
      modalContact.classList.toggle('show-contact-modal')
    })
  })
  

  
  // ------------------------------------------

const showBackFilter = document.querySelector('.closeMobFilterBackground');
const searchFilter = document.querySelector('.search-filter');
const filterBtn = document.querySelector('.filter');
filterBtn.addEventListener('click' , ()=>{
 searchFilter.classList.toggle('openSearchFilter');
 showBackFilter.classList.toggle('showBackFilter');
})

showBackFilter.addEventListener('click' , ()=>{
 searchFilter.classList.remove('openSearchFilter');
 showBackFilter.classList.remove('showBackFilter');
})



const propertyCards = document.querySelectorAll('.property-card')
const section3 = document.querySelector('.section-3-main')
section3.addEventListener('click', function (e) {
    const clickedCard = e.target.closest('main');

    e.preventDefault();
    if (!clickedCard) return;

    propertyCards.forEach(e => e.setAttribute('data-IsSelected',false));
    clickedCard.setAttribute('data-IsSelected',true)
});

ActiveElementClass('.section-5-links' , '.section-5-links p' , 'p' , 'active-apartment-plan-link' );

const theStudioText = `This superb apartment benefits from large floor to ceiling windows and light wells throughout creating an abundance of natural light. It is also fitted with air conditioning, Lutron lighting and a Crestron sound system. It is ideal for family living, having a large reception room with both sitting and dining areas with a wonderful skylight providing exceptional light. The three terraces are perfect areas for outside entertaining and al fresco dining in the warmer months. The bespoke kitchen is well appointed and provides ample space for informal family dining. There is a large principal bedroom suite with far reaching London views, a guest bedroom suite, two further bedrooms and a family bathroom.`;
const deluxePortionText = `Discreetly located in the heart of bustling Islington and tucked away in a mews style lane just off Upper Street, Climpson House is the epitome of modern living combining a high level specification with cutting edge design. This superb split level penthouse apartment is beautifully finished throughout t and features engineered light washed oak flooring, integrated Miele appliances, Quooker instant boiled water tap, partial Lutron lighting, underfloor heating, polished plaster in the bathrooms, high quality matt black architectural fittings throughout and a large private top floor roof terrace with panoramic skyline views across central London, together with a further terrace and a balcony on the fourth floor. There are two generous bedrooms, both with built-in wardrobes with timber veneer doors, motion sensor lighting and a mixture of drawers and shelves. The principal bedroom features a stylish en-suite shower room and there is also a further family bathroom on this floor. A stunning oak staircase leads to the top floor double aspect reception room with a smart, contemporary open plan kitchen with glazed sliding doors leading to a terrace and a smaller south facing balcony.A retractable glass roof leads to the truly stunning roof terrace with spectacular views across Islington and the City beyond, ideal for summer entertaining.`;
const pentHouseText = `A luxurious penthouse apartment with versatile entertaining space. Upon walking into the apartment you will find an open plan reception room with designated dining area and a fully fitted kitchen with integrated appliances to the rear. Floor to ceiling windows provide plenty of light and air throughout providing a lateral feel. A cloakroom can be found along the hallway, with access to two double bedrooms, both with an en suite bathroom and access onto a private balcony. The upper floor accommodates a study room, which could also be used as an additional bedroom or reception room. Access is provided out on to a generously sized approximately 7.6mx7.6m roof terrace with breath-taking aspects of the City. Residents will benefit from world-class facilities including a gymnasium, spa, pool, 24 hour concierge, cinema room and business lounge.`;
const topGardenText = `These garden design ideas are key to creating a scheme you'll love for years to come. Whether you're looking for garden landscaping ideas to overhaul your outdoor space, or more tailored garden design inspiration such as garden furniture, paving, lights, plants, borders, decking and more, we've compiled some fabulous garden ideas to help you transform your back garden, whether it's big or small – and it'll help to boost your property value, too. But before you proceed with any redesigns or updates, take a look at your garden as a whole, says Andrew Kyte at The Chelsea Gardener: 'Find out as much as you can about the garden's position, direction and outlook. Not only will this affect planting, it can dictate how you use your space.' Whether it's a small garden, long and narrow garden, cottage garden or courtyard garden, you should observe where and at what times of day different parts of the garden gets light and sun. Think about access and what you want to use your garden for – planting and growing veg, sunbathing, eating alfresco or simply sitting down to enjoy a cup of tea on a sunny morning?`;
const doubleHeightText = `Discover City Living at Feature17 with this 2nd floor 2 bedroom apartment with your own private West facing balcony! Open plan kitchen/living/dining area flooded with light from dual aspect floor to ceiling windows and double doors leading out to the balcony. The master bedroom benefits from a fitted wardrobe, there is also a good sized second and third bedroom, bathroom and large storage cupboard. This home is even more affordable for First time buyers with the London Help to Buy Scheme, only 5 % deposit needed and get up to a 40% loan from the Government (interest free for the first 5 years) meaning you only need to apply for a 55% mortgage! Call us now for more details.`;
function apartmentBluePrintLinkAction(id, blueprintImgName , blueprint_h1 , blueprint_p){
    document.getElementById(id).addEventListener('click' , ()=>{
        document.getElementById('blueprintImg').setAttribute('src',`assets/images/${blueprintImgName}`);
        document.querySelector('.blueprint-info h1').textContent = blueprint_h1;
        document.querySelector('.blueprint-info p').textContent = blueprint_p;
    })
}
// example
apartmentBluePrintLinkAction('theStudio' , 'studio-blueprint.jpg','the studio', theStudioText)
apartmentBluePrintLinkAction('deluxePortion' , 'Deluxe-Portion.jpg','deluxe portion', deluxePortionText)
apartmentBluePrintLinkAction('pentHouse' , 'Penthouse.jpg','pent house', pentHouseText)
apartmentBluePrintLinkAction('topGarden' , 'Top-garden.jpg','top garden', topGardenText)
apartmentBluePrintLinkAction('doubleHeight' , 'Double-Height.png','Double Height', doubleHeightText)

const swiper = new Swiper('.swiper', {
    speed: 800,
    spaceBetween: 0,
    effect: 'fade',
    autoplay: true,
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    delay: 500

  });
 
  Kineto.create('#popularCardSlide',{
    arrows: false,
    pagination: true,
    easing: 'easeInSine',
    speed: 500,
    perView: 3,
    height: 'auto',
    loop: true,
    waitAnimation: true,
    usePercent: true,
    
    responsive: {
        100:{
            perView: 1,
            margin: 5,
        },
       200:{
        perView: 1,
        margin: 5,
       },
      300:{
      perView: 1.5,
      margin: 10,
      },
      500:{
        perView: 2,
        margin: 10, 
      },
      600: {
        perView: 3,
        margin: 15,
      },
   
    }
    
  });
  document.querySelector('.vjs-big-play-button')
  console.log(
     
 );

  videojs('my-player', {
    controls: true,
    autoplay: false,
    preload: 'auto',
    responsive: true,
  });