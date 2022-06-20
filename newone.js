const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
});
 

 
switcher.addEventListener('click', function() {
     

    const className = document.body.className;
    if(className == "light-theme") {
         
        document.body.classList.toggle('light-theme');
    } else {
        document.body.classList.toggle('dark-theme');
    }

     
}); 