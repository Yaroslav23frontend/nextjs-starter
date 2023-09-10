import { forwardRef, useEffect, useRef } from "react";
import { Button } from "../button/Button";
import { ModalProps } from "./types";

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      message,
      onCancel,
      onSubmit,
      open,
      cancelButton = true,
      submitButton = true,
      title,
    },
    ref
  ) => {
    return (
      <>
        <dialog onClick={onCancel} className="modal cursor-pointer" ref={ref}>
          <div
            className="modal-box cursor-default -translate-y-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            {title && <h3 className="font-bold text-lg">{title}</h3>}
            <p className="text-base py-4">{message}</p>
            <div className="modal-action">
              <form method="dialog" className="flex gap-4">
                {cancelButton && (
                  <Button
                    name="cancel"
                    size={"sm"}
                    onClick={() => onCancel && onCancel()}
                  >
                    Cancel
                  </Button>
                )}
                {submitButton && (
                  <Button
                    name="submit"
                    size={"sm"}
                    onClick={() => onSubmit && onSubmit()}
                  >
                    Submit
                  </Button>
                )}
              </form>
            </div>
          </div>
        </dialog>
      </>
    );
  }
);
Modal.displayName = "Modal";
export { Modal };
