
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
     
      nav.classList.toggle('show-menu')
      
      toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle','nav-menu')

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')


dropdownItems.forEach((item) =>{
   const dropdownButton = item.querySelector('.dropdown__button') 


   dropdownButton.addEventListener('click', () =>{

       const showDropdown = document.querySelector('.show-dropdown')
       

       toggleItem(item)

       if(showDropdown && showDropdown!== item){
           toggleItem(showDropdown)
       }
   })
})


const toggleItem = (item) =>{
   
   const dropdownContainer = item.querySelector('.dropdown__container')

   
   if(item.classList.contains('show-dropdown')){
       dropdownContainer.removeAttribute('style')
       item.classList.remove('show-dropdown')
   } else{
      
       dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
       item.classList.add('show-dropdown')
   }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
     dropdownContainer = document.querySelectorAll('.dropdown__container')


const removeStyle = () =>{
   
      
       dropdownContainer.forEach((e) =>{
           e.removeAttribute('style')
       })

       
       dropdownItems.forEach((e) =>{
           e.classList.remove('show-dropdown')
       })
   }


addEventListener('resize', removeStyle)


const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
 
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

     
      if (button.id == "acceptBtn") {
       
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};










