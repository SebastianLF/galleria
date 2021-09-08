import Component from "../constructors/Component";
import { appNodeId } from "../constants";

function SlideshowNav(data) {
  const iconClassNavPrevious = data.previous === null ? "disabled" : "";
  const iconClassNavNext = data.next === null ? "disabled" : "";

  const previousLink = data.previous === null ? "" : `href=${data.previous}`;
  const nextLink = data.next === null ? "" : `href=${data.next}`;

  const settings = {
    selector: appNodeId,
    data: data,
    template: function (props) {
      // HTML template append to DOM for this component
      return `
            <div class="slideshow-nav-container">
                <div class="separator"></div>
                <div class="slideshow-nav-heading">
                    <p class="slideshow-nav__painting-title">${props.name}</p>
                    <p class="slideshow-nav__painting-artist">${props.artist.name}</p>
                </div>
                <nav class="slideshow-nav__icons-actions">
                    <a class="nav-icons ${iconClassNavPrevious}" ${previousLink}>
                        <img src="/assets/shared/icon-back-button.svg"></img>
                    </a>
                    <a class="nav-icons ${iconClassNavNext}" ${nextLink}>
                        <img src="/assets/shared/icon-next-button.svg"></img>
                    </a>
                </nav>
            </div>
        `;
    },
  };

  Component.call(this, settings);
}

SlideshowNav.prototype = Object.create(Component.prototype);

export default SlideshowNav;
