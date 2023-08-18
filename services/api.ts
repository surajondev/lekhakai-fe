import axios from "axios";
import { toast } from "react-toastify";

const baseURL: string = process.env.BACKEND_URL || "";

export const join = async (email: string) => {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const res = await axios.post(`${baseURL}/join`, {
      email,
      timezone,
    });
    toast.success(res.data.data);
  } catch (error: any) {
    toast.error(error.response.data.error);
  }
};

export const singIn = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${baseURL}/auth/login`, {
      email,
      password,
    });
    toast.success("login Successfull");
  } catch (error: any) {
    toast.error(error.response.data.error);
  }
};

export const singUp = async (
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  devto_username: string
) => {
  try {
    const res = await axios.post(`${baseURL}/auth/register`, {
      first_name,
      last_name,
      email,
      password,
      devto_username,
    });
    toast.success("Registered Successfull");
  } catch (error: any) {
    toast.error(error.response.data.error);
  }
};
