import toast from "react-hot-toast";
import { useEffect } from "react";

export default function ErrorMessage() {
  useEffect(() => {
    toast.error("Oops, something went wrong. Please try again");
  }, []);

  return null;
}
