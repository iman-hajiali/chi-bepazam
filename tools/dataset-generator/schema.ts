export type IngredientType = "required" | "optional";

export interface Ingredient {
  ingredient_id: string;
  name: string;
  amount: number;
  unit: string;
  type: IngredientType;
}

export interface Food {
  food_id: string;

  identity: {
    name_fa: string;
    name_en: string;
    slug: string;
    alternative_names: string[];
  };

  classification: {
    category: string;
    sub_category: string;
    origin: string;
  };

  time: {
    prep_time_min: number;
    cook_time_min: number;
    total_time_min: number;
  };

  difficulty: {
    level: number;
  };

  cost: {
    level: number;
  };

  serving: {
    servings: number;
  };

  ingredients: Ingredient[];

  steps: string[];

  nutrition: {
    calories: number;
    protein_g: number;
    carbs_g: number;
    fat_g: number;
  };

  diet: {
    vegetarian: boolean;
    vegan: boolean;
    gluten_free: boolean;
    keto_friendly: boolean;
  };

  tags: string[];

  recommendation: {
    target_users: string[];
    occasion: string[];
  };

  meta: {
    version: string;
    status: string;
    created_at: string;
    updated_at: string;
    source: string;
  };
}