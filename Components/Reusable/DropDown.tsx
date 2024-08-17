import React from "react";

interface DropdownProps {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropDown: React.FC<DropdownProps> = ({
  id,
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-small text-gray-900"
      >
        {label}
      </label>
      <div className="relative inline-block w-32">
        <select
          id={id}
          className="block w-full h-8 px-3 pr-10 text-sm bg-white border border-gray-300 rounded-full appearance-none focus:outline-none"
          value={value}
          onChange={onChange}
        >
          <option value="All">All</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.9142 8C18.4592 8 18.7622 8.63046 18.4218 9.05605L12.8408 16.0322C12.5806 16.3575 12.0859 16.3575 11.8257 16.0322L6.24478 9.05605C5.9043 8.63046 6.20731 8 6.75234 8L17.9142 8Z"
              fill="#B4B4C6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
