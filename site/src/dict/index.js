import fr from "./fr";
import en from "./en";
import es from "./es";
import ar from "./ar";

const dictionaries = { fr, en, es, ar };

export function getDict(locale) {
  return dictionaries[locale] || fr;
}
