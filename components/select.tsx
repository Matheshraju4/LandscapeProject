type SelectProps = {
  onChange: (value: string) => void;
};

const Select: React.FC<SelectProps> = ({ onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <label htmlFor="Select ">Select Type</label>
      <select id="All" onChange={handleChange}>
        <option value="Flowers">Flowers</option>
        <option value="Models">Models</option>
        <option value="Plants_and_trees">Plants and trees</option>
      </select>
    </div>
  );
};

export default Select;
