import { createContext, useContext } from "react";
import { ToastDto } from "./types";
interface ToastContextProps {
  addToast: ({
    message,
    _type,
    autoDismiss,
    dismissDuration,
  }: ToastDto) => void;
}
const ToastContext = createContext<ToastContextProps | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export default ToastContext;
