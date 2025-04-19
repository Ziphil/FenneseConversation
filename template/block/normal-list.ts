//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule(["ul", "ol"], "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement(element.tagName, (self) => {
    self.addClassName("normal-list");
    self.setAttribute("data-type", (element.tagName === "ul") ? "unordered" : "ordered");
    if (element.getAttribute("col") === "2") {
      self.setAttribute("data-column", "2");
    } else if (element.getAttribute("col") === "3") {
      self.setAttribute("data-column", "3");
    }
    self.appendChild(transformer.apply(element, "section.ul"));
  });
  return self;
});

manager.registerElementRule("li", "section.ul", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("li", (self) => {
    self.addClassName("normal-item");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

export default manager;