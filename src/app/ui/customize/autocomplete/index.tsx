// components/CustomSelectForm.tsx
import React from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

interface CustomSelectFormProps {
  title: string;
  options: SelectProps['options'];
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const CustomSelectForm: React.FC<CustomSelectFormProps> = ({
  title,
  options,
  onChange,
  placeholder,
  disabled = false,
  ...props
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-2">{title}</label>
      <Select
        placeholder={placeholder || `Select ${title}`}
        options={options}
        onChange={onChange}
        style={{ width: "100%" }}
        className="rounded-full"
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default CustomSelectForm;
