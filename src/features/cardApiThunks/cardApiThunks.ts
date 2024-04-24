import { createAsyncThunk } from '@reduxjs/toolkit';
import Phone from '../../models/interface';
const apiKey = process.env.REACT_APP_API_KEY;
export const loadPhones = createAsyncThunk('phones/getPhones', async () => {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=20`,
  ).catch((error) => {
    throw error;
  });

  const json = await data.json().catch((error) => {
    throw new Error('API request failed');
  });

  let photos = json.recipes.map((recipe: any) => {
    return {
      photoUrl: recipe.image,
      id: recipe.id,
      name: recipe.title,
      description: recipe.summary,
    } as Phone;
  });

  return photos;
});

// export const loadPhones = createAsyncThunk('phones/getPhones', async () => {
//   try {
//     const response = await fetch(
//       'https://www.themealdb.com/api/json/v1/1/random.php',
//     );

//     if (!response.ok) {
//       throw new Error('API request failed');
//     }

//     const data = await response.json();

//     // Aquí puedes manejar y mapear los datos de la respuesta según tus necesidades
//     const phonesData = data.meals.map((meal: any) => ({
//       photoUrl: meal.strMealThumb,
//       id: meal.idMeal,
//       name: meal.strMeal,
//       description: meal.strInstructions,
//     })) as Phone[];

//     return phonesData;
//   } catch (error) {
//     throw error;
//   }
// });

export const deletePhone = createAsyncThunk(
  'phones/deletePhone',
  async (phoneId: number | undefined) => {
    try {
      console.log(phoneId);
      // Send a DELETE request to the API to delete the phone.
      const response = await fetch(
        `https://phones-store-api.containers.soamee.com/phones/${phoneId}`,
        {
          method: 'DELETE',
        },
      );

      if (!response.ok) {
        let result = await response.text();
        console.log(result);
        throw new Error('Phone could not be removed.');
      }

      // Return the ID of the deleted phone.
      return phoneId;
    } catch (error) {
      throw new Error('Request to remove the phone failed');
    }
  },
);

// Create phone
export const createPhone = createAsyncThunk(
  'phones/createPhone',
  async (newPhone: Phone) => {
    try {
      const response = await fetch(
        'https://phones-store-api.containers.soamee.com/phones',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPhone),
        },
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Phone could not be created: ${errorMessage}`);
      }

      // Returns the data for the phone created.
      return newPhone;
    } catch (error) {
      throw new Error('Application failed');
    }
  },
);
