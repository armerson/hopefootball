import type { SchemaTypeDefinition } from "sanity";
import { club } from "./club";
import { foundation } from "./foundation";
import { homepage } from "./homepage";
import { story } from "./story";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, club, story, foundation],
};
