export interface IngredientItem {
  id: string;
  name: string;
  localName: string;
  subtitle: string;
  description: string;
  origin: string;
  image: string;
}

export const ingredients: IngredientItem[] = [
  {
    id: "jaggery",
    name: "Unrefined Cane Gur",
    localName: "देसी गुड़",
    subtitle: "Natural sweetness",
    description: "Slow-reduced over sugarcane bagasse fires in Bihar's rural sugar belts, retaining all natural minerals and dark molasses richness.",
    origin: "Bhojpur & Siwan Belts",
    image: "/images/sareya/ingredients/ingredient-jaggery.jpg",
  },
  {
    id: "wheat",
    name: "Sun-Ripened Coarse Wheat",
    localName: "मोती गेंहू",
    subtitle: "Stone-ground texture",
    description: "Heritage heirloom wheat varieties harvested in spring, sundried and milled slowly on traditional stones to preserve natural germ and bran.",
    origin: "Gangetic Alluvial Fields",
    image: "/images/sareya/ingredients/ingredient-wheat.jpg",
  },
  {
    id: "chana",
    name: "Desi Roasted Bengal Gram",
    localName: "भुना देसी चना",
    subtitle: "Golden roast",
    description: "Small brown desi chickpeas roasted in hot Gangetic sand until the skin crackles, developing an unmistakable nutty smoky sweetness.",
    origin: "Magadh Riverbeds",
    image: "/images/sareya/ingredients/ingredient-chana.jpg",
  },
  {
    id: "makhaana",
    name: "GI-Certified Lotus Seed",
    localName: "मिथिला मखाना",
    subtitle: "Wetland harvest",
    description: "Grade-A giant lotus seeds hand-collected by Mallah divers from the placid ponds of Darbhanga and popped over flaming wood fires.",
    origin: "Mithila Wetlands",
    image: "/images/sareya/ingredients/ingredient-makhaana.jpg",
  },
  {
    id: "sattu-powder",
    name: "Pure Stone Chakki Sattu",
    localName: "शुद्ध सत्तू",
    subtitle: "High plant protein",
    description: "100% whole grain roasted chickpea flour cold-milled to retain live nutrients, cooling potassium, and gut-soothing soluble fibre.",
    origin: "Nalanda & Patna",
    image: "/images/sareya/ingredients/ingredient-sattu-powder.jpg",
  },
  {
    id: "spices",
    name: "Whole Cardamom, Fennel & Ajwain",
    localName: "सुगंधित मसाले",
    subtitle: "Aromatic balance",
    description: "Green Malabar cardamom pods, fat plump Lucknowi saunf, and pungent wild ajwain ground coarse right before small-batch mixing.",
    origin: "Heirloom Spice Guilds",
    image: "/images/sareya/ingredients/ingredient-spices.jpg",
  },
];
