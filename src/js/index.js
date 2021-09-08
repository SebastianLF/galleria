// import "../ assets/*.jpg";
import paintings from "./data.json";
import Card from "./components/Card";
import Details from "./views/Details";
import Header from "./components/Header";
import Content from "./components/Content";
import Home from "./views/Home";
import { createSlug } from "./utils/functions";
import Navigo from "navigo";

function renderApp() {
  // render header to DOM
  const startSlideshowLink = createSlug("/paintings/" + paintings[0].name);
  const header = new Header({ slideshowLink: startSlideshowLink });
  header.render();

  // render content div to DOM
  const content = new Content();
  content.render();

  // init router
  const router = new Navigo("/");
  router
    .on("/", function () {

      // render home page to DOM
      const home = new Home();
      home.render();
      
      // render paintings within grid to DOM
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
      })[0];
     
      const percentageOfTotal = ((_index + 1) / paintings.length) * 100;
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

      const _data = Object.assign({ ...paintingFound, ...pagination, percentageOfTotal });

      const detailsView = new Details(_data);
      detailsView.render();
    })
    .notFound(() => {
      console.log("404");
    });

  router.resolve();
}

renderApp();
