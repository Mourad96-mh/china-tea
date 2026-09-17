import fr from "./fr";
import en from "./en";
import es from "./es";

const dictionaries = { fr, en, es };

export function getDict(locale) {
  return dictionaries[locale] || fr;
}
