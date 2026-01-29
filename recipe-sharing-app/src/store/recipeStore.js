import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // ===== Recipes =====
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id), // keep favorites clean
    })),

  // ===== Favorites =====
  addFavorite: (recipeId) =>
    set((state) =>
      state.favorites.includes(recipeId)
        ? state
        : { favorites: [...state.favorites, recipeId] }
    ),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // ===== Recommendations =====
  generateRecommendations: () => {
    const { recipes, favorites } = get();

    // Simple recommendation logic:
    // Recommend recipes NOT already favorited
    const recommended = recipes.filter(
      (recipe) => !favorites.includes(recipe.id)
    );

    set({ recommendations: recommended.slice(0, 3) }); // limit results
  },
}));