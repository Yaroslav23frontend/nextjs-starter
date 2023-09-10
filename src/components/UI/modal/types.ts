export type ModalProps = {
  message: string;
  title?: string;
  onCancel?: () => void;
  onSubmit?: () => void;
  open: boolean;
  cancelButton?: boolean;
  submitButton?: boolean;
};
