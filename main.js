import { animateArrayVisibility } from "/functions";
import { showPortfolioItem } from "/functions"; 

const showInfo = () => {    
  const facebookButton = document.querySelector("#facebook-button");
  const instagramButton = document.querySelector("#instagram-button");
  const youtubeButton = document.querySelector("#youtube-button");
  const emailButton = document.querySelector("#email-button");
  const text = document.querySelector("#text");   

  const infos = [facebookButton, instagramButton, youtubeButton, emailButton, text];
  animateArrayVisibility(infos, 1000);

  facebookButton.addEventListener('click', function (evt) {
    window.location.href="https://www.facebook.com/beatricetosoratti";    
  });
  instagramButton.addEventListener('click', function (evt) {
    window.location.href="https://www.instagram.com/beatreeche/?hl=it";
  });
  youtubeButton.addEventListener('click', function (evt) {
    window.location.href="https://www.youtube.com/channel/UCTyFSIKnv4Z3rvc32sfSpMA/featured";
  });
  emailButton.addEventListener('click', function (evt) {
    text.setAttribute("value", "beatricetosoratti@hotmail.it");
  }); 
};

const showPortfolio = () => {
  const portfolio = document.querySelector("#portfolio-panel");
  const portfolioLeftButton = document.querySelector("#portfolio-left-button");
  const portfolioRightButton = document.querySelector("#portfolio-right-button");

  let y = 0;
  let currentItem = 0;

  portfolio.setAttribute("visible", true);
  document.querySelector("#portfolio-item0").setAttribute("visible", true);

  const id = setInterval(() => {
    y += 0.008;
    if (y >= 0.6) {
      clearInterval(id);
      portfolioLeftButton.setAttribute("visible", true);
      portfolioRightButton.setAttribute("visible", true);
      portfolioLeftButton.addEventListener('click', () => {
        currentItem = (currentItem + 1) % 3;
        showPortfolioItem(currentItem);
      });
      portfolioRightButton.addEventListener('click', () => {
        currentItem = (currentItem - 1 + 3) % 3;
        showPortfolioItem(currentItem);
      });   
    };
    portfolio.setAttribute("position", "0 " + y + " -0.01");
  }, 10);  
};

const showAvatar = (onDone) => {
  const avatar = document.querySelector("#avatar");
  let z = -0.3;
  const id = setInterval(() => {
    z += 0.008;
    if (z >= 0.3) {
      clearInterval(id);
      onDone();
    };
    avatar.setAttribute("position", "0 -0.25 " + z);
  }, 10);
};

AFRAME.registerComponent('mytarget', {
  init: function () {
    const entity = document.querySelector('[sound]');
    this.el.addEventListener('targetFound', event => {
      console.log("target found");
      entity.components.sound.playSound();
      showAvatar(() => {
        setTimeout(() => {
          showPortfolio();           
        }, 1700);
      });
      showInfo();
    });
    this.el.addEventListener('targetLost', event => {
      console.log("target lost");
      entity.components.sound.pauseSound();
    });
  }
});