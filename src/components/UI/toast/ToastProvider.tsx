"use client";
import { useCallback, useState } from "react";
import { ToastDto, ToastTypes } from "./types";
import ToastContext from "./useToast";
import Toast from "./Toast";

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastDto[]>([]);
  const removeToast = useCallback((id: number) => {
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id));
  }, []);
  const addToast = useCallback(
    ({
      message,
      _type,
      autoDismiss = true,
      dismissDuration = 3000,
    }: ToastDto) => {
      const id = new Date().getTime();
      setToasts((oldToasts) => [
        ...oldToasts,
        { id, message, _type, autoDismiss, dismissDuration },
      ]);

      if (autoDismiss) {
        setTimeout(() => {
          removeToast(id);
        }, 5000);
      }
    },
    []
  );
  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-[160px] left-0 right-0  w-full flex flex-col items-center gap-4 justify-end p-4">
        {toasts.map(({ id, message, _type }) => (
          <Toast key={id} message={message} _type={_type} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
