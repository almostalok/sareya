export interface BiharRegion {
  id: string;
  name: string;
  hindiName: string;
  speciality: string;
  productKey: string;
  description: string;
  landscapeNote: string;
  coordinates: { x: number; y: number }; // percentage on map
}

export const biharRegions: BiharRegion[] = [
  {
    id: "mithila",
    name: "Mithila (Darbhanga & Madhubani)",
    hindiName: "मिथिला",
    speciality: "Phool Makhaana & Sweet Curds",
    productKey: "Mithila Phool Makhaana",
    description:
      "A serene landscape crisscrossed by lotus ponds and orchard groves. Here, the Mallah community dives deep to harvest the sacred Makhaana, toasted over gentle fires until it blooms white like jasmine.",
    landscapeNote: "Freshwater wetland ecosystems, GI-tagged lotus seed farming.",
    coordinates: { x: 62, y: 32 },
  },
  {
    id: "magadh",
    name: "Magadh (Patna, Nalanda & Gaya)",
    hindiName: "मगध",
    speciality: "Stone-Ground Sattu & Silao Khaja",
    productKey: "Roasted Chana Sattu",
    description:
      "The ancient seat of learning and agrarian mastery. Desi Bengal gram roasted in hot river sand and cold-ground in stone chakkis provides the legendary protein power of Gangetic wanderers.",
    landscapeNote: "Fertile alluvial plains along the sacred Ganges river basin.",
    coordinates: { x: 48, y: 55 },
  },
  {
    id: "bhojpur",
    name: "Bhojpur & Tirhut",
    hindiName: "भोजपुर",
    speciality: "Heirloom Thekua & Chashni Gujiya",
    productKey: "Heirloom Thekua",
    description:
      "Courtyard hearths alive with festive laughter. Wooden saanchas (moulds) carved with sunbursts press coarse whole wheat with golden A2 ghee and crushed fennel into revered festive offerings.",
    landscapeNote: "Heritage sugarcane belts yielding raw mineral-rich jaggery.",
    coordinates: { x: 28, y: 45 },
  },
  {
    id: "champaran",
    name: "Champaran",
    hindiName: "चम्पारण",
    speciality: "Litti Masala & Clay Handi Cooking",
    productKey: "Champaran Litti Masala Mix",
    description:
      "The northern frontier where wild carom (ajwain), spicy dried mango, and cold-pressed mustard oil fuse into the pungent stuffing for wood-fire and cow-dung embers baked litti.",
    landscapeNote: "Foothills of the Himalayas meeting Terai grasslands.",
    coordinates: { x: 34, y: 22 },
  },
  {
    id: "anga",
    name: "Anga (Bhagalpur & Munger)",
    hindiName: "अंग",
    speciality: "Katarni Chura & Tilkut",
    productKey: "Heirloom Pantry Blends",
    description:
      "Celebrated for aromatic heirloom grains, crushed roasted til sweets, and time-honored slow-cooking pantry traditions passed down through unbroken generations.",
    landscapeNote: "Gentle river valleys where the Ganges turns eastward.",
    coordinates: { x: 74, y: 64 },
  },
];
