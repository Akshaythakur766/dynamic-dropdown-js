import { Meta, StoryObj } from "@storybook/react";
import { actions } from "@storybook/addon-actions";
import Dropdown from "../src/Components/Dropdown";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  args: {
    value:"hello",
    typeable:false
  },
  argTypes: {},
  parameters: {},
  tags: ["autodocs", "dropdown"],
} satisfies Meta<typeof Dropdown>;

export default meta;

export const Default = {
  args: {},
};
