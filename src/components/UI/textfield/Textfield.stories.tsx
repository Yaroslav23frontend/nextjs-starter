import { TextField } from "./Textfield";
import { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof TextField> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Text Field",
  component: TextField,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TextField>;

export const DefaultTextField: Story = {
  args: {},
};
