import { Chef, isChef } from './chef';
import { Recipe, isRecipe } from './recipe';
import * as dayjs from 'dayjs';

async function getChefBirthday(id: number): Promise<string | null> {
    let recipe: Recipe | null;
    try {
        const recipeRes = await fetch(`https://dummyjson.com/recipes/${id}`);
        recipe = await recipeRes.json();
        if (!isRecipe(recipe)) {
            throw new Error('Formato dati non valido');
        };
    } catch (error) {
        if(error instanceof Error) {
            console.error(`Errore durante il recupero della ricetta: ${error}`);
        } else {
            throw new Error(`Non sono riuscito a recuperare la ricetta con id: ${id}`);
        };
        return null;
    };

    let chef: Chef | null;
    try {
        const chefRes = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
        chef = await chefRes.json();
        if(!isChef(chef)) {
            throw new Error('Formato dati non valido');
        };
    } catch (error) {
        if(error instanceof Error) {
            console.error(`Errore durante il recupero dello chef: ${error}`);
        } else {
            throw new Error(`Non sono riuscito a recuperare la ricetta con id: ${id}`);
        };
        return null;
    };

    const newDate: string = dayjs(chef.birthDate).format('DD/MM/YYYY');
    return newDate;
};

getChefBirthday(1)
  .then(birthday => console.log("Data di nascita dello chef:", birthday))
  .catch(error => console.error("Errore:", error.message));