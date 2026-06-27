import { Food } from "./schema";

export const foodsSeed: Food[] = [
  {
    food_id: "IR-FD-0001",

    identity: {
      name_fa: "املت گوجه فرنگی",
      name_en: "Tomato Omelette",
      slug: "omelette-tomato",
      alternative_names: []
    },

    classification: {
      category: "صبحانه",
      sub_category: "سریع",
      origin: "ایران"
    },

    time: {
      prep_time_min: 5,
      cook_time_min: 10,
      total_time_min: 15
    },

    difficulty: {
      level: 1
    },

    cost: {
      level: 1
    },

    serving: {
      servings: 2
    },

    ingredients: [
      {
        ingredient_id: "ING-0001",
        name: "تخم مرغ",
        amount: 2,
        unit: "عدد",
        type: "required"
      },
      {
        ingredient_id: "ING-0002",
        name: "گوجه فرنگی",
        amount: 2,
        unit: "عدد",
        type: "required"
      },
      {
        ingredient_id: "ING-0003",
        name: "روغن",
        amount: 1,
        unit: "قاشق غذاخوری",
        type: "required"
      }
    ],

    steps: [
      "گوجه‌ها را خرد کرده و داخل ماهیتابه تفت بده",
      "اجازه بده آب گوجه کمی کشیده شود",
      "تخم‌مرغ‌ها را اضافه کن",
      "هم بزن تا کاملاً بپزد"
    ],

    nutrition: {
      calories: 250,
      protein_g: 14,
      carbs_g: 8,
      fat_g: 18
    },

    diet: {
      vegetarian: true,
      vegan: false,
      gluten_free: true,
      keto_friendly: false
    },

    tags: ["سریع", "صبحانه", "اقتصادی", "ساده"],

    recommendation: {
      target_users: ["دانشجویی", "خانوادگی", "سریع"],
      occasion: ["صبحانه"]
    },

    meta: {
      version: "1.0",
      status: "active",
      created_at: "",
      updated_at: "",
      source: "seed"
    }
  }
];