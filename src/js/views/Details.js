import { contentClassname } from "../constants";
import Component from "../constructors/Component";
import { makeAbsolutePath } from "../utils/functions";
import SlideshowNav from "../components/SlideshowNav";

function Details(data) {
  console.log(data);

  Component.call(this, {
    selector: contentClassname,
    data: data,
    template: function (props) {
      const imageUrl = makeAbsolutePath(props.images.hero.large);
      const artistImage = makeAbsolutePath(props.artist.image);
      const slideshowNav = new SlideshowNav(props);
      
      const iconClassNavPrevious = data.previous === null ? "disabled" : "";
      const iconClassNavNext = data.next === null ? "disabled" : "";
    
      const previousLink = data.previous === null ? "" : `href=${data.previous}`;
      const nextLink = data.next === null ? "" : `href=${data.next}`;

      return `
        <article class="details">
        
        <div class="painting__image-container">
          <img class="painting-image" src="${imageUrl}">
          <div class="painting__heading-container">
            <h1 class="painting__heading-name">${props.name}</h1>
            <h2 class="painting__heading-artist">${props.artist.name}</h2>
          </div>
          <div class="painting__artist-img">
            <img src="${artistImage}"> 
          </div>
        </div>
        
        
        <div class="painting__description-container">
          <div class="painting_text">
            <p class="painting_year">${props.year}</p>
            <p class="painting__description">${props.description}</p>
          </div>
          <a class="painting__source" href="${props.source}">Go to source</a>
        </div>
        
        </article>
        
        <div class="slideshow-nav-container">
        
          <div class="separator"><span style="width: ${props.percentageOfTotal}%" class="slideshow-nav__progress-bar"></span></div>


          <div class="slideshow-nav-content">
            <div class="slideshow-nav-heading">
              <p class="slideshow-nav__painting-title">${props.name}</p>
              <p class="slideshow-nav__painting-artist">${props.artist.name}</p>
            </div>
            
            <nav class="slideshow-nav__icons-actions">
              <a class="nav-icons ${iconClassNavPrevious}" ${previousLink}>
              <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" stroke-width="2"/><path d="M.986.5h-1v22.775h1z"/></g></svg>
              </a>
              <a class="nav-icons ${iconClassNavNext}" ${nextLink}>
                <img src="/assets/shared/icon-next-button.svg"></img>
              </a>
            </nav>
          </div>
        </div>
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
