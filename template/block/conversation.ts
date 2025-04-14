//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("sit", "lesson", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("p", (self) => {
    self.addClassName("situation");
    self.appendChild(transformer.apply(element, "common"));
  });
  return self;
});

manager.registerElementRule("shconv", "lesson", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("ol", (self) => {
    self.addClassName("shaleian-conversation");
    self.appendChild(transformer.apply(element, "shconv"));
  });
  return self;
});

manager.registerElementRule("li", "shconv", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("li", (self) => {
    self.addClassName("shaleian-conversation-item");
    self.appendChild(transformer.apply(element, "shconv.li"));
  });
  return self;
});

manager.registerElementRule("name", "shconv.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("shaleian-conversation-name");
    self.appendChild(transformer.apply(element, "common"));
  });
  return self;
});

manager.registerElementRule("sen", "shconv.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("p", (self) => {
    self.addClassName("shaleian-conversation-sentence");
    self.appendChild(transformer.apply(element, "shconv.li.sen"));
  });
  return self;
});

manager.registerElementRule("em", "shconv.li.sen", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("em", (self) => {
    self.addClassName("shaleian-conversation-emphasis");
    self.appendChild(transformer.apply(element));
  });
  return self;
});

manager.registerElementRule("jaconv", "lesson", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("ol", (self) => {
    self.addClassName("japanese-conversation");
    self.appendChild(transformer.apply(element, "jaconv"));
  });
  return self;
});

manager.registerElementRule("li", "jaconv", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("li", (self) => {
    self.addClassName("japanese-conversation-item");
    self.appendChild(transformer.apply(element, "jaconv.li"));
  });
  return self;
});

manager.registerElementRule("name", "jaconv.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("japanese-conversation-name");
    self.appendChild(transformer.apply(element, "common"));
  });
  return self;
});

manager.registerElementRule("sen", "jaconv.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("p", (self) => {
    self.addClassName("japanese-conversation-sentence");
    self.appendChild(transformer.apply(element, "common"));
  });
  return self;
});

export default manager;