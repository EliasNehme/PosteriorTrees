// javascript file that set the functionality of some of the components in the index.html file
// imported to the index.html file via the <script> tag in the end of the body part  

$(document).ready(function() {

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ scroll back to top button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // javascript code was taken from https://mdbootstrap.com/docs/standard/extended/back-to-top/
    //Get the button
    let mybutton = document.getElementById("btn-back-to-top");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
    scrollFunction();
    };
    function scrollFunction() {
    if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
    ) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);
    function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ copy button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function copyBib() {
  let copyText = $("#citation")[0];
  navigator.clipboard.writeText(copyText.getHTML());
}