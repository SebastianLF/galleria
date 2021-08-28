function Component({ selector, template, data = {} }) {
  this.element = document.querySelector(selector);
  this.data = data;
  this.template = template;
}

Component.prototype.render = function () {
  this.element.insertAdjacentHTML("beforeend", this.template(this.data));
};

export default Component;
