import _ from "lodash";
import "./style.css";
import calculatorPic from "../dist/calculator.png";
import tiktaktoePic from "../dist/tik-tak-toe.png";
import restaurantPic from "../dist/restaurant-pg.png";
import weatherPic from "../dist/weather-app.png";
import etchASketch from "../dist/etch-a-sketch.png";
import bookLibrary from "../dist/library.png";
import tipCalculator from "../dist/tip-calculator.png";
import "@fortawesome/fontawesome-free/js/all";

function component() {
  let mainPageDiv = document.createElement("div");
  const btn = document.createElement("button");
  btn.innerHTML = "click me and check console";

  const totalDiv = document.createElement("div");
  const firstMainPage = document.createElement("first_full_page");
  firstMainPage.innerHTML = `<div id="toppage"> 
  <nav id="navbar">
   <ul> 
   <li><a class="nav-link" href="#welcome-section">About<a></li> 
   <li><a class="nav-link" href="#projects">Work</a></li> 
   <li><a class="nav-link" href="#socials">Contact</a></li> 
   </ul> 
   </nav> 


   <section id="welcome-section"> 
   <h1>Hey, My name is Dimeji</h1> 
   <h3>An avid Programmer</h3> 
   <h2>With projects in JavaScript <i class="fa-brands fa-js"></i>, Python <i class="fa-brands fa-python"></i>, HTML <i class="fa-brands fa-html5"></i>, CSS <i class="fa-brands fa-css3"></i></h2> 
   </section>
   </div> `;

  const projectsHTML = document.createElement("projects_html");
  projectsHTML.innerHTML = `<h3>These are some of my projects</h3> 
   
   <div id="work"> 
   <div class="project-tile"> <a target="_blank" href="https://dimejidj.github.io/calculator_vanilla_js/"> <img src=${calculatorPic} alt="tributpg" class="project-sq"> <p>Calculator</p></a> </div>
    <div class="project-tile"> <a target="_blank" href="https://dimejidj.github.io/tic_tac_toe/"> <img src=${tiktaktoePic} alt="tributpg" class="project-sq"> <p>Tik Tac Toe</p></a> </div> 
    <div class="project-tile"> <a target="_blank" href="https://dimejidj.github.io/restaurant/"> <img src=${restaurantPic} alt="tributpg" class="project-sq"> <p>Restaurant Page</p></a> </div> 
    <div class="project-tile"> <a target="_blank" href="https://dimejidj.github.io/weather_app/"> <img src=${weatherPic} alt="tributpg" class="project-sq"> <p>Weather App</p></a> </div> 
    </div>`;

  totalDiv.append(firstMainPage);

  const projectsSection = document.createElement("section");
  projectsSection.setAttribute("id", "projects");
  projectsSection.append(projectsHTML);

  const otherbtn = document.createElement("button");
  otherbtn.textContent = "More Projects";
  otherbtn.classList.add("otherbtn");
  projectsSection.append(otherbtn);

  totalDiv.append(projectsSection);

  const secondMainPage = document.createElement("second_full_page");
  secondMainPage.innerHTML = `<section id="contact"> 
    <div id="details"> <h3>Let\'s work together...</h3> 
    <p><i>Feel free to contact me on the details below</i></p> 
    </div> 

    <div id="socials"> 
    <ul> 
    <li><a id="profile-link" href="https://github.com/dimejidj" target="_blank"><i class="fab fa-github icons" ></i>Github</a></li> 
    <li><a href="mailto:dimeji_09@hotmail.co.uk" target="_blank"><i class="fas fa-envelope icons"></i>Send an email</a></li> 
    <li><a href="https://www.linkedin.com/in/dimeji-olatunde-5248031a7/" target="_blank"><i class="fab fa-linkedin icons"></i>Linkedin</a></li> 
    <li><a href="tel:+447531510785" target="_blank"><i class="fas fa-mobile-alt icons"></i>Call me</a></li> 
    </ul> 
    </div> 
    </section> 
    
    <footer id="footer"> 
    <p>*All projects on this page was designed and produced entirely by myself (Dimeji)*</p> 
    </footer>`;

  totalDiv.append(secondMainPage);
  mainPageDiv.append(totalDiv);

  const otherPage = document.createElement("other_page");
  const topOtherPage = document.createElement("div");
  topOtherPage.setAttribute("id", "top_other_pg");
  const topPageLink = document.createElement("a");
  topPageLink.innerHTML = `<i class="fa-solid fa-house-user home_icon"></i>`;

  topOtherPage.append(topPageLink);

  const bottomOtherPage = document.createElement("bottom_other_page");
  bottomOtherPage.innerHTML = `</div>
    <section id="projects">
        <h3>Here are some of my other projects</h3>
        <div id="work">
    <div class="project-tile">
        <a target="_blank" href="https://dimejidj.github.io/etch_a_sketch/">
        <img src=${etchASketch} alt="tributpg" class="project-sq">
        <p>Etch a Sketch</p></a>
        </div>
        <div class="project-tile">
        <a target="_blank" href="https://dimejidj.github.io/library/"><img src=${bookLibrary} alt="tributpg" class="project-sq">
            <p>Book Library</p></a>
        </div>
        <div class="project-tile">
        <a target="_blank" href="https://dimejidj.github.io/TipCalculator/">
        <img src=${tipCalculator} alt="tributpg" class="project-sq">
        <p>Tip Calculator</p></a>
        </div>
        <div class="project-tile">
        <a target="_blank" href="https://codepen.io/dimejidj/full/zYwJNJy"><img src="https://miro.medium.com/max/700/0*KLSVTspaz94tq9XC.png" alt="tributpg" class="project-sq">
            <p>Survey Page</p>
        </a>
        </div>
    </section>`;

  otherPage.append(topOtherPage);
  otherPage.append(bottomOtherPage);

  otherbtn.addEventListener("click", function (e) {
    while (mainPageDiv.firstChild) {
      mainPageDiv.removeChild(mainPageDiv.firstChild);
    }
    mainPageDiv.append(otherPage);
  });

  topPageLink.addEventListener("click", function (e) {
    while (mainPageDiv.firstChild) {
      mainPageDiv.removeChild(mainPageDiv.firstChild);
    }
    mainPageDiv.append(totalDiv);
  });

  return mainPageDiv;
}

document.body.appendChild(component());
