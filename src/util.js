import names from "./utils/names.json";
import places from "./utils/places.json";

export function generateName() {
  return (
    names[Math.floor(Math.random() * names.length)] +
    " from " +
    places[Math.floor(Math.random() * places.length)]
  );
}
