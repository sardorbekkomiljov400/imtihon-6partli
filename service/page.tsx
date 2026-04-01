const BASE_URL = process.env.NEXT_PUBLIC_API;

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_API .env da topilmadi");
}


export const SignIn = (body: { username: string; password: string }) => {
  return fetch(`${BASE_URL}auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const Signup = (body: {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}) => {
  return fetch(`${BASE_URL}auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const getAll = (URL: string) => {
  return fetch(`${BASE_URL}${URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const addCartItem = (body: {
  userId: number;
  sessionId: string;
  productId: number;
  quantity: number;
}) => {
  return fetch(`${BASE_URL}cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const sendContact = (body: {name:string; email:string, phone:string, message:string}) =>{
  return fetch(`${BASE_URL}contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
}

export const cerateBron = (body: {email:string, guestCount:number, reservationDate:string , reservationTime:string, tableId:number }) =>{
  return fetch(`${BASE_URL}reservations/create`, {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  })
}


 