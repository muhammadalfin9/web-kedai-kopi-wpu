const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#menu-burger');
hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle('active');
};
document.addEventListener('click',function(e){if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
  navbarNav.classList.remove('active');
}
});

// const observer = new IntersectionObserver((entries)=>{
// entries.forEach((entry)=>{
//   if(entry.isIntersecting){
//     console.log(entry.target)
//     entry.target.classList.add("show")
//   }else{
//     entry.target.classList.remove("show")
//   }
// })
// }, {})
// const todoElements = document.querySelectorAll('.content')
// todoElements.forEach(el => observer.observe(el))