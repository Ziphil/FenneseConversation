//

import {VivliostyleDocument, VivliostyleDocumentFragment, VivliostyleTemplateManager, VivliostyleText} from "@zenml/vivliostyle";
import {NodeLikeOf} from "@zenml/zenml";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("xl", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("dl", (self) => {
    self.addClassName("sentence-list");
    self.appendChild(transformer.apply(element, "section.xl"));
  });
  return self;
});

manager.registerElementRule("li", "section.xl", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("sentence-item");
    self.appendChild(transformer.apply(element, "section.xl.li"));
  });
  return self;
});

manager.registerElementRule("sh", "section.xl.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("dt", (self) => {
    self.addClassName("sentence-item-shaleian");
    self.appendChild(trimNode(document, transformer.apply(element, "section")));
  });
  return self;
});

manager.registerElementRule("ja", "section.xl.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("dd", (self) => {
    self.addClassName("sentence-item-japanese");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

function trimNode(document: VivliostyleDocument, node: NodeLikeOf<VivliostyleDocument>): NodeLikeOf<VivliostyleDocument> {
  if (node instanceof VivliostyleDocumentFragment) {
    const trimedNode = document.createDocumentFragment();
    for (let i = 0; i < node.nodes.length; i ++) {
      const child = node.nodes[i];
      if (i === 0 && child instanceof VivliostyleText) {
        trimedNode.appendTextNode(child.content.trimStart());
      } else if (i === node.nodes.length - 1 && child instanceof VivliostyleText) {
        trimedNode.appendTextNode(child.content.trimEnd());
      } else {
        trimedNode.appendChild(child);
      }
    }
    return trimedNode;
  }
  return node;
}

export default manager;