import { Spinner } from "./Spinner";
import { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof Spinner> = {
  title: "Spinner",
  component: Spinner,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const DefaultSpinner: Story = {
  args: {
    children: "Default",
  },
};
