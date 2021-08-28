import { contentClassname } from "../constants";
import Component from "../constructors/Component";

function Home() {
  const settings = {
    selector: contentClassname,
    template: function () {
      return `
          <div class="masonry"></div>
      `;
    },
  };
  Component.call(this, settings);
}

Home.prototype = Object.create(Component.prototype);
Home.prototype.constructor = Home;

export default Home;
