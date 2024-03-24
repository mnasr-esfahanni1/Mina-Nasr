
console.log("test")




var sidemenu = document.getElementById("sidemenu");
var closeMenue = document.getElementById('closeMenu');
var openMenu = document.getElementById('openMenu');


openMenu.addEventListener("click" , function(){

    sidemenu.style.right = '0';
});

closeMenue.addEventListener("click" , function(){

    sidemenu.style.right = "-200px";
});


  const scriptURL = 'https://script.google.com/macros/s/AKfycbxazzxdvtDv_prs8GupqgCKuMkhDD49Zkva67Cxq3yUatx6w8ZhAbZZYaxVk3wIzeL7aw/exec'
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { 
        msg.innerHTML = `Message sent succefully `

        setTimeout(function(){
            msg.innerHTML = " "
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  });






