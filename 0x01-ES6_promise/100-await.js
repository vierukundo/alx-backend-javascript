import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photoPromise = await uploadPhoto();
    const userPromise = await createUser();

    return {
      photo: photoPromise,
      user: userPromise,
    };
  } catch (error) {
    // If either uploadPhoto or createUser fails, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
