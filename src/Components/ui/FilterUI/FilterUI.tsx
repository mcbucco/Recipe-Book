import "./FilterUI.css";
import { nanoid } from "@reduxjs/toolkit";

type TFilterUI = {
  title: string;
  optionGroup: string;
  options: string[];
};

export type TFilterUIProps = {
  label: string;
  filters: TFilterUI[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const FilterUI: React.FC<TFilterUIProps> = ({ label, filters, value, onChange }) => {
  
  const filterOptions = filters.map((filter) => (
    <optgroup label={filter.title} key={nanoid()}>
      {filter.options.map((option) => (
        <option value={`${filter.optionGroup}::${option}`} key={nanoid()}>
          {option}
        </option>
      ))}
    </optgroup>
  ));
  return (
    <div className="filter">
      <label htmlFor={label}>Фильтровать: </label>
      <select
        className="filter_select"
        id={label}
        value={value}
        onChange={onChange}
      >
        {filterOptions}
      </select>
    </div>
  );
};

export default FilterUI;
