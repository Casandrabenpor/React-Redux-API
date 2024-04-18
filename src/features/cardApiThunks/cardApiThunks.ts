import { createAsyncThunk } from '@reduxjs/toolkit';
import Phone from '../../models/interface';

// export const loadPhones = createAsyncThunk('phones/getPhones', async () => {
//   const data = await fetch(
//     'https://phones-store-api.containers.soamee.com/phones',
//   ).catch((error) => {
//     throw error;
//   });

//   const json = await data.json().catch((error) => {
//     throw new Error('API request failed');
//   });

//   let photos = json.map((phone: any) => {
//     return {
//       photoUrl: phone.photoUrl,
//       id: phone.id,
//       name: phone.name,
//       description: phone.description,
//       price: phone.price,
//     } as Phone;
//   });

//   return photos;
// });

export const loadPhones = createAsyncThunk('phones/getPhones', async () => {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php',
    );

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();

    // Aquí puedes manejar y mapear los datos de la respuesta según tus necesidades
    const phonesData = data.meals.map((meal: any) => ({
      photoUrl: meal.strMealThumb,
      id: meal.idMeal,
      name: meal.strMeal,
      description: meal.strInstructions,
    })) as Phone[];

    return phonesData;
  } catch (error) {
    throw error;
  }
});
