import I18n from "ex-react-native-i18n";

// Transaltion
import ar from "./ar";
import en from "./en";

//Languages
I18n.translations = {
  en,
  ar
};
I18n.fallbacks = true;

//Fuction that change Language
export function ChangeLanguage(Lang) {
  I18n.locale = Lang;
}

// Function that translate
export function t(name) {
  return I18n.t(name);
}
