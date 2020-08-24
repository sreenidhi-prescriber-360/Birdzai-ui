/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
//Side Navbar toggle
var $button = document.querySelector('#sidebar-toggle');
var $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (function (e) {
    e.preventDefault();
    $wrapper.classList.toggle('toggled');
}));


//dropdown function
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction0() {
    document.getElementById("myDropdown0").classList.toggle("show");
}
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
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