import { appNodeId } from "../constants";
import Component from "../constructors/Component";

function Header(data) {
  const settings = {
    selector: appNodeId,
    data,
    template: function ({slideshowLink}) {

      

      return `
          <header>
            <div class="header">
                <a href="/"
                    ><img class="header__logo" src="/assets/shared/logo.svg" alt="logo galleria"
                /></a>
                <a href=${slideshowLink} class="header__slideshow-button">start slideshow</a>
            </div>
            <div class="separator--content"></div>
          </header>
      `;
    },
  };
  Component.call(this, settings);
}

document.addEventListener('click', function() {
  const startSlideshow = function startSlideshow() {
    setInterval(function(){ 
      const nextButton = document.querySelectorAll('.nav-icons')[1];
    }, 2000);
  }
})

Header.prototype = Object.create(Component.prototype);
Header.prototype.constructor = Header;

export default Header;
