import { inline } from "./inline.js"; // pode ter mais de um, mas o nome precisa ser preciso de não for fazer um macete (nome as nomeTrocado)
import defaultInline from "./inline.js"; //a mudança de nome e mais flexivel, mas so pode ter um por arquivo
import { group } from "./non-inline.js";
import exportDefault from "./non-inline.js";

inline();
defaultInline();

group;
exportDefault();