export type Recipe = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

export function isRecipe(result: unknown): result is Recipe {
    if (
        result && typeof result === 'object' &&
        'id' in result && typeof result.id === 'number' &&
        'name' in result && typeof result.name === 'string' &&
        'ingredients' in result && Array.isArray(result.ingredients) &&
        'instructions' in result && Array.isArray(result.instructions) &&
        'prepTimeMinutes' in result && typeof result.prepTimeMinutes === 'number' &&
        'cookTimeMinutes' in result && typeof result.cookTimeMinutes === 'number' &&
        'servings' in result && typeof result.servings === 'number' &&
        'difficulty' in result && typeof result.difficulty === 'string' &&
        'cuisine' in result && typeof result.cuisine === 'string' &&
        'caloriesPerServing' in result && typeof result.caloriesPerServing === 'number' &&
        'tags' in result && Array.isArray(result.tags) &&
        'userId' in result && typeof result.userId === 'number' &&
        'image' in result && typeof result.image === 'string' &&
        'rating' in result && typeof result.rating === 'number' &&
        'reviewCount' in result && typeof result.reviewCount === 'number' &&
        'mealType' in result && Array.isArray(result.mealType)
    ) {
        return true;
    }
    return false;
}