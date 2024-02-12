import Select from "react-select";

export const SelectComponent = ({
  value,
  onChange,
  options,
}: {
  value: any;
  onChange: any;
  options: any[];
}) => {
  return (
    <div className="w-full md:w-1/3 ">
      <Select options={options} onChange={onChange} value={value} className="block w-full"/>
    </div>
  );
};
