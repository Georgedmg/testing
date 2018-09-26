// add an event listener to our top menu button when window.width < 600px
var button = document.getElementById('menu-toggle'),
    myTopnav = document.getElementById('myTopnav');
button.addEventListener('click', function(){

    // toggle open class on the myTopnav element
    if ( myTopnav.classList.contains('open') ) {
        myTopnav.classList.remove('open');
        button.innerHTML = '<i class="fa fa-bars"></i>';
    } else {
        myTopnav.classList.add('open');
        button.innerHTML = '<i class="fa fa-times"></i>';
    }
});



// callbacks
// setTimeout / setInterval
// vanilla js vs jQuery
// es6 (let, arrow fn)


// css:

// SCSS, (pre-compilers, how to (babel))
//Create github account