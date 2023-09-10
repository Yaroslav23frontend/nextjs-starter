import { useRef, useState } from "react";
import { Modal } from "./Modal";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/Button";
const ModalTest = () => {
  const [modal, setModal] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button
        onClick={() => ref.current?.showModal()}
        text="Open Modal"
        name="Open Modal"
      />
      <Modal
        message="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        open={modal}
        onCancel={() => ref.current?.close()}
        onSubmit={() => alert("hi")}
        cancelButton={true}
        submitButton={true}
        ref={ref}
      />
    </>
  );
};
const meta: Meta<typeof ModalTest> = {
  title: "Modal",
  component: ModalTest,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ModalTest>;

export const ModalStory: Story = {
  args: {},
};
