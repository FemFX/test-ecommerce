import { Checkbox } from "@gravity-ui/uikit";

interface AttributeGroupProps {
  name: string;
  values: { id: string; value: string }[];
  attributeIds: string[];
  handleFilterChange: (id: string) => void;
}

const AttributeGroup = ({
  name,
  values,
  attributeIds,
  handleFilterChange,
}: AttributeGroupProps) => (
  <div key={name}>
    <div className="font-bold capitalize text-xl">{name}</div>
    {values.map(({ id, value }) => (
      <div className="flex items-center gap-2" key={id}>
        <Checkbox
          checked={attributeIds.includes(id)}
          onChange={() => handleFilterChange(id)}
        />
        {value}
      </div>
    ))}
  </div>
);
export default AttributeGroup;
