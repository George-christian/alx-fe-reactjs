import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      <h2>All Recipes</h2>

      {recipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);

        return (
          <div key={recipe.id} style={{ marginBottom: '20px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            <button
              onClick={() =>
                isFavorite
                  ? removeFavorite(recipe.id)
                  : addFavorite(recipe.id)
              }
            >
              {isFavorite ? '💔 Remove Favorite' : '❤️ Add to Favorites'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;