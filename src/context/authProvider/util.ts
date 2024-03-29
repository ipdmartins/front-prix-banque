import { api } from "../../libs/axios";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("u");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

export async function LoginRequest(account: string, password: string) {
  try {
    const response = await api.get(
      `clients?account=${account}&password=${password}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
}
