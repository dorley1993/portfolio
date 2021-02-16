$(document).ready(function(){
var i = 0;
var txt = 'Hi! I am Danielle.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var bttn = $(".show");



function typeWriter() {
    bttn.text("Resume");
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function skills() {
    var skillTitle = $('<h1 class="title-skills col-12">').text('Skills');
    var skill = $("#skills");
    skill.append(skillTitle);

    var card = $('<div class="card ui raised padded segment cOne ">');
    var cardTitle = $('<h1 class="card-title row">').text("Frontend Technologies:");
    
    var row1 = $('<div class="row">');
    var rowPic = $('<div class="card-body" style="color: #f06529">');
    var icon = $('<i class="fab fa-html5 fa-2x">')

    rowPic.append(icon);

    var nameC = $('<h3 id="cssT">').text('CSS');
    
    var row2 = $('<div class="row">');
    var rowPic2 = $('<div class="card-body" style="color: #2965f1">');
    var icon2 = $('<i class="fab fa-css3-alt fa-2x">');

    rowPic2.append(icon2);

    var nameJ = $('<h3 id="jsT">').text('JavaScript');
    
    var row3 = $('<div class="row">');
    var rowPic3 = $('<div class="card-body">');
    var icon3 = $('<i class="fab fa-js fa-2x" style="color: #F0DB4f">');

    rowPic3.append(icon3);

    var name = $('<h3 id="htmlT">').text('HTML');

    skill.append(card.append(cardTitle));
    card.append(row1.append(rowPic.append(name)));
    card.append(row2.append(rowPic2.append(nameC)));
    card.append(row3.append(rowPic3.append(nameJ)));


    var card2 = $('<div class="card ui raised padded segment cTwo">');
    var card2Title = $('<h1 class="card-title">').text("Other Technologies:");
    
    var row1O = $('<div class="row">');
    var row1Pic = $('<div class="card-body" style="color: black">');
    var iconO = $('<i class="fab fa-github fa-2x">')

    row1Pic.append(iconO);


    var nameT = $('<h3 id="termT">').text('Terminal');
    
    var rowT = $('<div class="row">');
    var rowPicT = $('<div class="card-body">');
    var iconT = $('<i class="fas fa-terminal fa-2x">');

    rowPicT.append(iconT);

    var name1 = $('<h3 id="gitT">').text('Github');

    skill.append(card2.append(card2Title));
    card2.append(row1O.append(row1Pic.append(name1)));
    card2.append(rowT.append(rowPicT.append(nameT)));
}

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
    var nameP = $('<h3 class="lostPtitle col-9">').text('Lost No More')
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
    var name2P = $('<h3 class="weathT col-9">').text('Weather Dashboard')
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
    var name3P = $('<h3 class="workSched col-9">').text('Work Day Schedular')
    var icon3 = $('<a class="col-3" target="_blank" href="https://github.com/dorley1993/Schedule_Your_Day"><i class="fab fa-github fa-2x"></i></a>');
    //appends it together
    div3Name.append(name3P, icon3);
    project3Col.append(project3picLink.append(div3Name));

    //button to more
    var btnDiv = $('<div class="row d-flex justify-content-center">')
    var buttonMore = $('<button class="more">').text("More Projects!");

    btnDiv.append(buttonMore)

    //appends it to the html
    websites.append(project1Col, project2Col, project3Col, btnDiv);
    
}

$('.show').on("click", function(){
    $(".show").html("<i class='fas fa-download'></i>")
})

typeWriter();
skills()
featuredProjects();

});