import { TagType } from "./TagType";

export const summer: TagType = {
  id: "summer",
  name: {
    fr: "été",
    en: "summer",
  },
  type: "saison",
  color: "yellow",
};

export const vegan: TagType = {
  id: "vegan",
  name: {
    fr: "vegan",
    en: "vegan",
  },
  type: "diet",
  color: "green",
};

export const appetizer: TagType = {
  id: "appetizer",
  name: {
    fr: "entrée",
    en: "appetizer",
  },
  type: "plateType",
  color: "purple",
};

export const dessert: TagType = {
  id: "dessert",
  name: {
    fr: "dessert",
    en: "appetizer",
  },
  type: "plateType",
  color: "#e320bd",
};

export const autumn: TagType = {
  id: "autumn",
  name: {
    fr: "automne",
    en: "autumn",
  },
  type: "saison",
  color: "orange",
};

export const winter: TagType = {
  id: "winter",
  name: {
    fr: "hiver",
    en: "winter",
  },
  type: "saison",
  color: "blue",
};

// New tags 

export const glutenFree: TagType = {
  id: "gluten-free",
  name: {
    fr: "sans gluten",
    en: "gluten-free",
  },
  type: "diet",
  color: "#bada55",
};

export const quickAndEasy: TagType = {
  id: "quick-easy",
  name: {
    fr: "rapide et facile",
    en: "quick & easy",
  },
  type: "difficulty",
  color: "#ff9900",
};

export const tagList: TagType[] = [
  summer,
  winter,
  dessert,
  appetizer,
  autumn,
  vegan,
  glutenFree, // Added the new tag to the tagList
  quickAndEasy, // Added the new tag to the tagList
];



