import Component from "../constructors/Component";
import { masonryClassname } from "../constants";

let itemsCount = 0;

// increment new id
function incrementComponentId() {
  itemsCount = itemsCount + 1;
  return itemsCount;
}

function Card(data) {
  const settings = {
    selector: masonryClassname,
    data: data,
    template: function (props) {
      // prefix route for paintings endpoint
      const prefix = "/paintings/";

      // create slug as url based on title (here "name")
      const slug = prefix + props.name.toLowerCase().replace(/\s/g, "-");

      // set background image and gradient.
      const backgroundImage = `linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.0001) 0%,
        rgba(0, 0, 0, 0.841672) 100%
      ), url(${props.images.gallery})`;

      // create index key
      const index = incrementComponentId();

      // set unique wrapper class
      const wrapperClass = `grid-item item${index} grid-item--with-gradient`;

      // HTML template append to DOM for this component
      return `
        <div style="background-image: ${backgroundImage}" class="${wrapperClass}" >
          <a href="${slug}" class="painting-card__link">
            <div class="painting-card__title_wrapper">
              <div class="painting-card__title">${props.name}</div>
              <div class="painting-card__author">${props.artist.name}</div>
            </div>
          </a>
        </div>
      `;
    },
  };

  Component.call(this, settings);
}

Card.prototype = Object.create(Component.prototype);
Card.prototype.constructor = Card;

export default Card;
