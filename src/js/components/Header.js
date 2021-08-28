import { appNodeId } from "../constants";
import Component from "../constructors/Component";

function Header() {
  const settings = {
    selector: appNodeId,
    template: function (props) {
      return `
          <header>
            <div class="header">
                <a href="/"
                    ><img class="header__logo" src="./assets/shared/logo.svg" alt="logo galleria"
                /></a>
                <button class="header__slideshow-button">start slideshow</button>
            </div>
            <div class="separator--content"></div>
          </header>
      `;
    },
  };
  Component.call(this, settings);
}

Header.prototype = Object.create(Component.prototype);
Header.prototype.constructor = Header;

export default Header;
