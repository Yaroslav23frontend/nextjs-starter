import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const StandardButton: Story = {
  args: {
    children: "Standard",
  },
};
