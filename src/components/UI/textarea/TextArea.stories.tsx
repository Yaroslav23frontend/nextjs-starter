import { TextArea } from "./Textarea";
import { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof TextArea> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Text Area",
  component: TextArea,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TextArea>;

export const DefaultTextArea: Story = {
  args: {
    children: "Default",
  },
};
