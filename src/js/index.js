// import "../ assets/*.jpg";
import paintings from "./data.json";
import Card from "./components/Card";
import Details from "./views/Details";
import Header from "./components/Header";
import Content from "./components/Content";
import Home from "./views/Home";
import { createSlug } from "./utils/functions";
import Navigo from "navigo";
import SlideshowNav from "./components/SlideshowNav";

function renderApp() {
  console.log(document.location);
  // render layout to DOM
  const header = new Header();
  header.render();
  const content = new Content();
  content.render();

  // init router
  const router = new Navigo("/");
  router
    .on("/", function () {
      const home = new Home();
      home.render();

      paintings.forEach((painting) => {
        const card = new Card(painting);
        card.render();
      });
    })
    .on("/paintings/:id", function (location) {
      let _index = 0;

      const paintingFound = paintings.filter((painting, index) => {
        if (createSlug(painting.name) === location.data.id) {
          _index = index;
          return true;
        }

        return false;
      });

      const detailsView = new Details(paintingFound[0]);
      detailsView.render();
      console.log(paintings.length, paintings);

      const pagination = {
        previous:
          _index - 1 === -1
            ? null
            : createSlug("/paintings/" + paintings[_index - 1].name),
        next:
          _index + 1 === paintings.length
            ? null
            : createSlug("/paintings/" + paintings[_index + 1].name),
      };

      const _paintingFound = paintingFound[0];
      const _data = Object.assign({ ..._paintingFound, ...pagination });

      const slideshowNav = new SlideshowNav(_data);
      slideshowNav.render();
    })
    .notFound(() => {
      console.log("404");
    });

  router.resolve();
}

renderApp();
