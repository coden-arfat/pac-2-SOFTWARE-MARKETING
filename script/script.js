
const btn = document.getElementsByClassName('nav-btn-img')[0]
 
const navli=document.getElementsByClassName('nav-list')[0]
btn.addEventListener( 'click', ()=>{
 navli.classList.toggle('active')
})