export type ToastContextProps = {
  addToast: ({
    _type,
    autoDismiss,
    message,
    dismissDuration,
  }: ToastDto) => void;
};
export type ToastTypes = "success" | "error";
export type ToastProps = {
  _type: ToastTypes;
  message: string;
};
export interface ToastDto extends ToastProps {
  id?: number;
  autoDismiss: boolean;
  dismissDuration?: number;
}
