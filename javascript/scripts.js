function openNav() {
    Object.assign(mySidenav.style,{width:"250px", opacity:"100%"});
  }
  

  function closeNav() {
    Object.assign(mySidenav.style,{width:"0px", opacity:"0%"});
  }

// POST form data to zapier on submit
$(document).ready(function (e) {
    $("#contactForm").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "https://hooks.zapier.com/hooks/catch/11214164/bhcheob/",
            type: "post",
            data: $("#contactForm").serialize(),
            success: function () {
                // Redirect to another success page
                window.location = "../index.html";
            }
        });
    });

    // zet op elke input en textarea in de form een 'touched' class nadat de 
    // gebruiker het element bezocht heeft
    $('form input, form textarea').focus(function(e) {
        e.target.classList.add('touched');
    });
});