//

import articleExplanationManager from "./article/explanation";
import articleLessonManager from "./article/lesson";
import blockConversationManager from "./block/conversation";
import blockFigureContainerManager from "./block/figure-container";
import blockNormalTableManager from "./block/normal-table";
import blockSectionManager from "./block/section";
import blockSentenceListManager from "./block/sentence-list";
import blockWordListManager from "./block/word-list";
import fallbackManager from "./fallback";
import inlineBasicManager from "./inline/basic";
import inlineCommonManager from "./inline/common";
import rootManager from "./root";
import wordManager from "./word";


const managers = [
  rootManager,
  articleLessonManager,
  articleExplanationManager,
  blockConversationManager,
  blockWordListManager,
  blockSectionManager,
  blockSentenceListManager,
  blockFigureContainerManager,
  blockNormalTableManager,
  inlineCommonManager,
  inlineBasicManager,
  wordManager,
  fallbackManager
];

export default managers;