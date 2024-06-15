'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}
const handleSubmit = (e, form) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log("data :", data);
  fetch("https://omni-backend-mjiv.onrender.com/submit/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      document.getElementById("submissionMessage").style.display = "block";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const handleContactFormSubmit = (event, form) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  fetch("https://omni-backend-mjiv.onrender.com/submit/contact", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      document.getElementById('submissionResult').style.display = 'block';
    } else {
      console.error('Error:', data.message);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

$(document).ready(function(){
  // When the "Get Started" button is clicked
  $(".get-started-btn").click(function(){
      // Show the modal
      $("#contactModal").modal("show");
  });
});

$(document).ready(function() {
  // Debugging: Check if button click event is firing
  $('.get-started-btn').click(function() {
    console.log('Button clicked');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var getStartedBtn = document.querySelector('.btn.btn-primary.active.get-started-btn');

  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', function(event) {
      // Prevent default behavior (in this case, following the href)
      event.preventDefault();

      console.log('Get Started button clicked');

      // Get form data
      var name = document.getElementById('name').value;
      var contactNumber = document.getElementById('contactNumber').value;
      var email = document.getElementById('email').value;
      var subject = document.getElementById('subject').value;
      var message = document.getElementById('message').value;

      console.log('Name:', name);
      console.log('Contact Number:', contactNumber);
      console.log('Email:', email);
      console.log('Subject:', subject);
      console.log('Message:', message);

      // Submit logic here
      // For testing purposes, you can just console log a message
      console.log('Form submission logic will go here');
    });
  } else {
    console.error('Get Started button not found');
  }
});