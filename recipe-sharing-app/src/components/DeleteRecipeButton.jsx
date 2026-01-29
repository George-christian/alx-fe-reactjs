import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ id, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
    onDelete();
  };

  return (
    <button
      onClick={handleDelete}
      style={{ marginTop: '15px', color: 'white', background: 'red' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;