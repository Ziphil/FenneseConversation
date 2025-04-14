//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("wordl", "lesson", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("ul", (self) => {
    self.addClassName("word-list");
    self.appendChild(transformer.apply(element, "wordl"));
  });
  return self;
});

manager.registerElementRule("li", "wordl", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("li", (self) => {
    self.addClassName("word-item");
    self.appendChild(transformer.apply(element, "wordl.li"));
  });
  return self;
});

manager.registerElementRule("sh", "wordl.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const conjugatedElement = element.searchXpath("following-sibling::shc")[0] as Element | undefined;
  self.appendElement("span", (self) => {
    self.addClassName("word-item-shaleian");
    self.appendChild(transformer.apply(element));
    if (conjugatedElement) {
      self.appendElement("span", (self) => {
        self.addClassName("word-item-conjugated");
        self.appendChild(transformer.apply(conjugatedElement));
      });
    }
  });
  return self;
});

manager.registerElementRule("eql", "wordl.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("ul", (self) => {
    self.addClassName("equivalent-list");
    self.appendChild(transformer.apply(element, "wordl.li.eql"));
  });
  return self;
});

manager.registerElementRule("li", "wordl.li.eql", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("li", (self) => {
    self.addClassName("equivalent-item");
    self.appendChild(transformer.apply(element));
  });
  return self;
});

manager.registerElementRule("cat", "wordl.li.eql", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("equivalent-item-category");
    self.appendChild(transformer.apply(element));
  });
  return self;
});

manager.registerElementRule("cls", "wordl.li.eql", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("equivalent-item-class");
    self.appendChild(transformer.apply(element));
  });
  return self;
});

manager.registerElementRule("ja", "wordl.li.eql", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("equivalent-item-japanese");
    self.appendChild(transformer.apply(element));
  });
  return self;
});

export default manager;