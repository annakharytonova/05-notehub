import css from "./SearchBox.module.css";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

interface SearchBoxProps {
  value: string;
  onSubmit: (value: string) => void;
}

function SearchBox({ value, onSubmit }: SearchBoxProps) {
  const [localValue, setLocalValue] = useState(value);

  const updateSearchQuery = useDebouncedCallback(
    (value: string) => onSubmit(value),
    500,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
    updateSearchQuery(e.target.value);
  };

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      value={localValue}
      onChange={handleChange}
    />
  );
}

export default SearchBox;
