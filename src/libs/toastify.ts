import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface messageProps {
  type: string;
  message: string;
}

export const toastify = ({ type, message }: messageProps) => {
  switch (type) {
    case "success":
      toast.success(message, { theme: "colored" });
    case "error":
      toast.error(message, { theme: "colored" });

    default:
      return "Not found";
  }
};
