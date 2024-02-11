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
    <div className="mx-auto w-64">
      <Select options={options} onChange={onChange} value={value} />
    </div>
  );
};
