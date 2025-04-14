//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("ch", true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  if (element.hasAttribute("c")) {
    const codePoint = parseInt(element.getAttribute("c"), 16);
    self.appendTextNode(String.fromCodePoint(codePoint));
  } else if (element.hasAttribute("n")) {
    const query = element.getAttribute("n");
    if (query === "nbsp") {
      self.appendTextNode(String.fromCodePoint(0xA0));
    }
  }
  return self;
});

manager.registerElementRule("hs", true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("half-space");
  });
  return self;
});

manager.registerElementRule("wd", true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("word");
    self.appendChild(transformer.apply(element, "word"));
  });
  return self;
});

manager.registerElementRule("sh", "word", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("word-shaleian");
    self.appendChild(transformer.apply(element, "common"));
  });
  return self;
});

manager.registerElementRule("pr", "word", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("word-prounciation");
    self.appendChild(transformer.apply(element, "common"));
  });
  return self;
});

export default manager;