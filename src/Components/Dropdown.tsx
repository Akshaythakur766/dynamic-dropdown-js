import React, { useState } from "react";
import axios, { AxiosInstance } from "axios";

type commonProps = {
  value: number | string;
  typeable?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  onChange: (e: any) => void;
};
type ObjectValues = {
  isObject?: true;
  valueKey?: string;
  displayKey?: string;
};
type StaticDropdownProps = {
  type: "static";
  initialOptions: object[] | string[] | number[];
};
type DynamicDropdownProps = {
  type: " dynamic";
  axiosInstance?: AxiosInstance | undefined;
  apiUrl: string;
  extraQuery?: { [key: string]: string };
};

type DropdownProps = commonProps &
  ({ isObject: false } | ObjectValues) &
  (StaticDropdownProps | DynamicDropdownProps);

const Dropdown = (props: DropdownProps) => {
  const {
    value,
    typeable = false,
    onChange,
    type = "static",
    disabled = false,
    isObject = true,
    readonly = false,
  } = props;
  const [selectedValue, setSelectedValue] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div className="">
      <input value={selectedValue} onChange={handleChange} />
      <div></div>
    </div>
  );
};

export default Dropdown;
