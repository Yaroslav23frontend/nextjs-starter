import { Toast } from "./Toast";
import { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Toast> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Toast",
  component: Toast,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Toast>;

export const ToastStory: Story = {
  args: {
    _type: "success",
    message:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
};
