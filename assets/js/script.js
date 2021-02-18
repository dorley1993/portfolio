$(document).ready(function(){

//variables for typewriter effects
var i = 0;
var txt = 'Hi! I am Danielle.'; /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */

//selectors
var bttn = $(".show");
var navBrand = $(".navbar-brand");


//creates brand
navBrand.text("<DO>");




//typewriting effect
function typeWriter() {
    bttn.text("Resume");
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
//creates the skills area
function skills() {
    //skills title
    var skillTitle = $('<h1 class="title-skills col-12">').text('Skills');
    var skill = $("#skills");
    //appends to html
    skill.append(skillTitle);

    //creates card one
    var card = $('<div class="card ui raised padded segment cOne col-lg-4 col-xl-4">');
    var cardTitle = $('<h1 class="card-title row">').text("Front-End Technologies:");

    //creates row one in card
    var row1 = $('<div class="row">');
    var rowPic = $('<div class="card-body" style="color: #f06529">');
    var icon = $('<i class="fab fa-html5 fa-2x">');
    //appends to row
    rowPic.append(icon);
    var nameC = $('<h3 id="cssT">').text('CSS');

    //creates row two
    var row2 = $('<div class="row">');
    var rowPic2 = $('<div class="card-body" style="color: #2965f1">');
    var icon2 = $('<i class="fab fa-css3-alt fa-2x">');
    //appends icon and row together
    rowPic2.append(icon2);
    var nameJ = $('<h3 id="jsT">').text('JavaScript');

    //creates row three
    var row3 = $('<div class="row">');
    var rowPic3 = $('<div class="card-body">');
    var icon3 = $('<i class="fab fa-js fa-2x" style="color: #F0DB4f">');
    //appends icon to row
    rowPic3.append(icon3);
    var name = $('<h3 id="htmlT">').text('HTML');

    //appends it all together, then onto the html skills area
    skill.append(card.append(cardTitle));
    card.append(row1.append(rowPic.append(name)));
    card.append(row2.append(rowPic2.append(nameC)));
    card.append(row3.append(rowPic3.append(nameJ)));


    //create card two
    var card2 = $('<div class="card ui raised padded segment cTwo col-lg-4 col-xl-4">');
    var card2Title = $('<h1 class="card-title">').text("Other Technologies:");
    
    //row one of other card
    var row1O = $('<div class="row">');
    var row1Pic = $('<div class="card-body" style="color: black">');
    var iconO = $('<i class="fab fa-github fa-2x">');
    //appends icon to row
    row1Pic.append(iconO);
    var nameT = $('<h3 id="termT">').text('Terminal');
    
    //row two of card two 
    var rowT = $('<div class="row">');
    var rowPicT = $('<div class="card-body">');
    var iconT = $('<i class="fas fa-terminal fa-2x">');
    //append icon
    rowPicT.append(iconT);
    var name1 = $('<h3 id="gitT">').text('Github');

    //appends it all together
    skill.append(card2.append(card2Title));
    card2.append(row1O.append(row1Pic.append(name1)));
    card2.append(rowT.append(rowPicT.append(nameT)));
}

//projects create area 
function featuredProjects() {

    //projects title
    var websites = $(".projects");
    var title = $('<h1 class="title-projects col-12">').text('Featured Projects');
    //appends the title to the html
    websites.append(title);

    //project 1, adds pic and hyperlinks to html
    var project1Col = $('<div class="col-12 websiteImg">');
    var project1picLink = $('<a target="_blank" href="https://obrienceob.github.io/LostNoMore/">');
    var imageP1 = $('<img src="assets/images/lostNoMore.png" id="lostNo">');
    project1picLink.append(imageP1);
    //name underneath the pic with hyperlinks to repo and web
    var divName = $('<div class="lostP row">')
    var nameP = $('<h3 class="lostPtitle col-xs-9 col-s-9 col-md-9 col-lg-9 col-xl-8">').text('Lost No More')
    var icon = $('<a class="col-3" target="_blank" href="https://github.com/obrienceob/LostNoMore"><i class="fab fa-github fa-2x"></i></a>');
    //appends it together
    divName.append(nameP, icon);
    project1Col.append(project1picLink.append(divName));

    //project 2 setup, weather app
    var project2Col = $('<div class="col-12 websiteImg">');
    var project2picLink = $('<a target="_blank" href="https://dorley1993.github.io/Weather_Dashboard/">');
    var imageP2 = $('<img src="assets/images/weatherDashboard.png" id="weather">');
    project2picLink.append(imageP2);
    //adds the name underneath with github link, both hyperlinks.
    var div2Name = $('<div class="weather row">')
    var name2P = $('<h3 class="weathT col-xs-9 col-s-9 col-md-9 col-lg-9 col-xl-8">').text('Weather Dashboard')
    var icon2 = $('<a class="col-3" target="_blank" href="https://github.com/dorley1993/Weather_Dashboard"><i class="fab fa-github fa-2x"></i></a>');
    //appends it together
    div2Name.append(name2P, icon2);
    project2Col.append(project2picLink.append(div2Name));

    //project 3 setup, daily schedular app
    var project3Col = $('<div class="col-12 websiteImg">');
    var project3picLink = $('<a target="_blank" href="https://dorley1993.github.io/Schedule_Your_Day/">');
    var imageP3 = $('<img src="assets/images/workSched.png" id="workSched">');
    project3picLink.append(imageP3);
    //adds the name underneath with github link, both hyperlinks.
    var div3Name = $('<div class="schedular row">')
    var name3P = $('<h3 class="workSched col-xs-4 col-sm-9 col-md-9 col-lg-9 col-xl-8">').text('Work Day Schedular')
    var icon3 = $('<a class="col-4 workScedI" target="_blank" href="https://github.com/dorley1993/Schedule_Your_Day"><i class="fab fa-github fa-2x"></i></a>');
    //appends it together
    div3Name.append(name3P, icon3);
    project3Col.append(project3picLink.append(div3Name));

    //button to more
    var btnDiv = $('<div class="row d-flex justify-content-center">')
    var buttonMore = $('<button href="#nav" class="more" id="projBtn">').text("More Projects!");
    //append button
    btnDiv.append(buttonMore)

    //appends it to the html
    websites.append(project1Col, project2Col, project3Col, btnDiv);
}



//function calls
typeWriter();
skills()
featuredProjects();

$("#projBtn").on("click", function() {
  console.log("hi");
  $("header").attr("style", "display: none");
  $(".abt-me").attr("style", "display: none");
  $("#skills").attr("style", "display: none");
  $(".backgroundImg").attr("style", "background-image: none");

  $('.title-projects').text('Projects');
  $('#projBtn').addClass("newBtn");
  
  $('.newBtn').text("Home");



  $(".newBtn").on("click", function() {
    window.location.reload();
  });

});

$("#mail").on("click", function() {
  //makes everything, but the contact area dissapear
  $("header").attr("style", "display: none");
  $(".abt-me").attr("style", "display: none");
  $("#skills").attr("style", "display: none");
  $(".projectWrapper").attr("style", "display: none");
  $(".backgroundImg").attr("style", "background-image: none");

  //contact selector
  var contactForm = $(".contactForm");

  //creates the form
  var form = $('<form class="gform ol-xs-12 col-s-12 col-md-8 col-lg-6 col-xl-6 formC" method="POST" data-email="daniorley1993@gmail.com" action="https://script.google.com/macros/s/AKfycbwbt47-Gi36Pjs7KHkSNllbQHFOR2FdvsNExnrHKHsa9KrakTQ/exec">')

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

  var subBtn = $('<button type="submit" value="Send" class="more gform" id="custom-btn">').text("submit");


  //appends everything together
  contactForm.append(form.append(inputArticle, inputArt2, inputArt3, subBtn));

  
  //button to more
  var homeBtn = $('<button class="more" id="homeBtn">').text("Home");
  $(".homeBTN").append(homeBtn);

  $("#homeBtn").on("click", function(){
    window.location.reload();
  })

   
    

  contact.append(rowContHead, divHome);

   
});


});