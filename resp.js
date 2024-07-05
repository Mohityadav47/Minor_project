burger=document.queryselector ('.burger')
  

navbar= document.queryselector ('.navbar')
rightnav = document.queryselector ('.rightnav')
navlist= document.queryselector('.navlist')


burger.addeventlistener('.click',()=>{
  
rightnav.classlist.toggle('.v-class-resp');
navbar.classlist.toggle('.h-nav-resp');
navlist.classlist.toggle('.v-class-resp');

})
