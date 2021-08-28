import { contentClassname } from "../constants";
import Component from "../constructors/Component";
import { makeAbsolutePath } from "../utils/functions";

function Details(data) {
  console.log(data);

  Component.call(this, {
    selector: contentClassname,
    data: data,
    template: function (props) {
      const imageUrl = makeAbsolutePath(props.images.hero.large);
      const artistImage = props.artist.image;
      console.log(data);

      return `  
      <article class="details">
        <div class="painting__image-container">
          <img class="painting-image" src="${imageUrl}">
        </div>
        <div class="painting__heading-container">
          <h1 class="painting__heading-name">${props.name}</h1>
          <h2 class="painting__heading-artist">${props.artist.name}</h2>
        </div>
        <div class="painting__artist-img">
          <img src="${artistImage}"> 
        </div>
        <div class="painting__description-container">
          <p class="painting_year">${props.year}</p>
          <p class="painting__description">${props.description}</p>
        </div>
        <a class="painting__source" href="${props.source}">Go to source</a>
      </article>
        `;
    },
  });
}

Details.prototype = Object.create(Component.prototype);
Details.prototype.constructor = Details;

Details.prototype.render = function () {
  this.element.innerHTML = this.template(this.data);
};

export default Details;
