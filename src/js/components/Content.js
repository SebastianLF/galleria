import { appNodeId } from "../constants";
import Component from "../constructors/Component";

function Content() {
  const settings = {
    selector: appNodeId,
    template: function () {
      return `
        <main>
          <div class="content"></div>
        </main>
      `;
    },
  };

  Component.call(this, settings);
}

Content.prototype = Object.create(Component.prototype);
Content.prototype.constructor = Content;

export default Content;
