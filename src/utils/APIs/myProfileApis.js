// import { axiosInstance, axiosInstanceNoAuth } from './commonHeadApiLogic.js';
import { axiosInstance, axiosInstanceNoAuth } from './commonHeadApiLogic.js';
// import { authorizeMe } from './commonHeadApiLogic.js'; 
import { authorizeMe } from './commonHeadApiLogic.js';

// Ensure authorization header is set before making authenticated requests
const withAuthorization = async (apiFunction, ...args) => {
  try {
    await authorizeMe(); // Ensure the Authorization header is set
    return await apiFunction(...args);
  } catch (error) {
    // Handle errors as necessary
    console.error("Error in API request:", error);
    throw error;
  }
};



// export async function GetProfile(data) {
//   // return withAuthorization(async () => {
//     const response = await axiosInstanceNoAuth.get("/api/users/me", data);
//     return response;
//   // });
// }




export async function GetProfile() {
  const response = await axiosInstanceNoAuth.get("/api/users/me");
  return response;
}




// export async function GetProfile(params) {
//   const response = await axiosInstanceNoAuth.get("/api/users/me", {
//     params,
//   });
//   return response;
// }
