//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("side", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("figure", (self) => {
    self.addClassName("figure-container");
    self.appendChild(transformer.apply(element, "section", {contained: true}));
  });
  return self;
});

export default manager;