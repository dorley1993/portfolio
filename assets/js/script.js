$(document).ready(function(){
  window.scrollTo(0,0);

//variables for typewriter effects
var i = 0;
var txt = 'Hi! I am Danielle.'; 
var speed = 70; 

//selectors
var bttn = $(".show");
var navBrand = $(".navbar-brand");


//creates brand
navBrand.text("<DO>");
bttn.text("Resume");




//typewriting effect
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}




//creates the projects area
function featuredProjects() {

    //projects title
    var websites = $(".titlePr");
    var title = $('<h2 class="title-projects col-12">').text('Featured Projects');
    //appends the title to the html
    websites.append(title);

    //project 1, adds pic and hyperlinks to html
    var project1Col = $('<div class="col-12 websiteImg">');
    var project1picLink = $('<a target="_blank" href="https://obrienceob.github.io/LostNoMore/">');
    var imageP1 = $('<img src="assets/images/lostNoMore.png" id="lostNo">');
    project1picLink.append(imageP1);
    //name underneath the pic with hyperlinks to repo and web
    var divName = $('<div class="lostP row">')
    var nameP = $('<h4 class="lostPtitle">').text('Lost No More')
    var icon = $('<a class="iconsP" target="_blank" href="https://github.com/obrienceob/LostNoMore"><i class="fab fa-github fa-2x"></i></a>');
    //appends it together
    divName.append(nameP, icon);
    $('.row1').append(project1Col.append(project1picLink.append(divName)));
  

    //project 2 setup, weather app
    var project2Col = $('<div class="col-12 websiteImg">');
    var project2picLink = $('<a target="_blank" href="https://dorley1993.github.io/Weather_Dashboard/">');
    var imageP2 = $('<img src="assets/images/weatherDashboard.png" id="weather">');
    project2picLink.append(imageP2);
    //adds the name underneath with github link, both hyperlinks.
    var div2Name = $('<div class="row weather">')
    var name2P = $('<h4 class="weathT">').text('Weather Dashboard')
    var icon2 = $('<a class="iconsP" target="_blank" href="https://github.com/dorley1993/Weather_Dashboard"><i class="fab fa-github fa-2x"></i></a>');
    //appends it together
    div2Name.append(name2P, icon2);
    $('.row2').append(project2Col.append(project2picLink.append(div2Name)));

    //project 3 setup, daily schedular app
    var project3Col = $('<div class="col-12 websiteImg">');
    var project3picLink = $('<a target="_blank" href="https://dorley1993.github.io/Schedule_Your_Day/">');
    var imageP3 = $('<img src="assets/images/workSched.png" id="workSched">');
    project3picLink.append(imageP3);
    //adds the name underneath with github link, both hyperlinks.
    var div3Name = $('<div class="schedular row">')
    var name3P = $('<h4 class="workSched"><a class="workScedI" target="_blank" href="https://github.com/dorley1993/Schedule_Your_Day">');
    name3P.text('Work Day Schedular');
    var icon3 = $('<a class="workScedI iconsP" target="_blank" href="https://github.com/dorley1993/Schedule_Your_Day"><i class="fab fa-github fa-2x"></i></a>');
    //appends it together
    div3Name.append(name3P, icon3)
    $('.row3').append(project3Col.append(project3picLink.append(div3Name)));


    //button to more
    var buttonMore = $('<button class="more" id="projBtn">').text("More Projects!");
    //appends button to html
    $('.moreBtnS').append(buttonMore);
}


//function calls
typeWriter();
featuredProjects();

//creates the more area
$("#projBtn").on("click", function() {
  //removes all except the header, projects area and footer
  $("header").remove();
  $(".abt-me").remove();
  $("#skills").remove();
  //removes background image
  $(".backgroundImg").attr("style", "background-image: none");

  //scrolls to top of window
  window.scrollTo(0,0);

  //creates the title to be just projects
  $('.title-projects').addClass("nameChange");
  $('.title-projects').text('Projects');
  //adds class to projects button new button
  $('#projBtn').addClass("newBtn");
  //then selects that button, changes text to HOME
  $('.newBtn').text("Home");

  //window reload for the home button
  $(".newBtn").on("click", function() {
    window.location.reload();
    window.scrollTo(0,0);
  });
});

//contact area
$(".mail").on("click", function() {
  //makes everything, but the contact area dissapear
  $("header").remove();
  $(".abt-me").remove();
  $("#skills").remove();
  $(".projectWrapper").remove();
  $("#mail").remove();
  $('#projBtn').remove();

  //makes background image none
  $(".backgroundImg").attr("style", "background-image: none");

  //scroll to top, when window loads
  window.scrollTo(0,0);


  //contact selectors
  var contactHeader = $('#headerC');
  var contactForm = $(".contactForm");
  var paraC = $('#paraC');

  //contact header
  var headerWrap = $('<article class="col-xs-12 col-s-12 col-md-8 col-lg-6 col-xl-6" id="custom-contactme">')
  var contactTitle = $('<h1 class="custom-about-contact-portfolio justify-content-center" id="contact-me-custom">').text('Contact Me');
    //appends to html
  contactHeader.append(headerWrap.append(contactTitle));

  //contact paragraph
  var contactPWrap = $('<article class="col-xs-12 col-s-12 col-md-8 col-lg-6 col-xl-6 custom-paragraph">');
  var para = $('<p>').text('If you want to talk to me about a project you see or to create a website, you can fill out the form below or send an email.');
  paraC.append(contactPWrap.append(para));

  //creates the form
  var form = $('<form class="gform col-xs-12 col-s-12 col-md-8 col-lg-6 col-xl-6" method="POST" data-email="daniorley1993@gmail.com" action="https://script.google.com/macros/s/AKfycbwbt47-Gi36Pjs7KHkSNllbQHFOR2FdvsNExnrHKHsa9KrakTQ/exec">')

  //creates input name area on form
  var inputArticle = $('<article class="form-group">');
  var inputName = $('<label for="info">').text("Name:");
  var inputTextB = $('<input type="text" name="name" class="form-control gform" id="name" placeholder="enter name">');
  //appends it together
  inputArticle.append(inputName, inputTextB);

  //creates input email area on form
  var inputArt2 = $('<article class="form-group">');
  var inputEmail = $('<label for="email">').text("Email:");
  var inputTextB2 = $('<input type="email" name="email" class="form-control gform" id="email" placeholder="enter email" name="email">');
  //appends it together
  inputArt2.append(inputEmail, inputTextB2);

  //creates input comment area on form
  var inputArt3 = $('<article class="form-group">');
  var inputComment = $('<label for="comment">').text("Comment:");
  var inputTextB3 = $('<textarea class="form-control gform" name="message" rows="6" id="comment" placeholder="enter message here/optional">');
  //appends it together
  inputArt3.append(inputComment, inputTextB3);
  
  //submit button 
  var subBtn = $('<button type="submit" value="Send" class="more gform" id="custom-btn">').text("submit");
 


  //appends everything together
  contactForm.append(form.append(inputArticle, inputArt2, inputArt3, subBtn));

  
  //button to more
  var homeBtn = $('<button class="more" id="homeBtn">').text("Home");
  $(".homeBTN").append(homeBtn);

  //home button click function
  $("#homeBtn").on("click", function(){
    window.location.reload();
    window.scrollTo(0,0);
  })

   
});

});