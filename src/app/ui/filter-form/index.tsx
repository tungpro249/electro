import { Divider, Collapse, Checkbox } from "antd";
const { Group } = Checkbox;
const { Panel } = Collapse;

interface TypeFilter {
  label: string;
  count: number;
}

const FilterForm = ({ data, title }: { data: TypeFilter[]; title: string }) => {
  return (
    <div className="w-full">
      <Divider className="my-2" />
      <Group style={{ width: "100%" }}>
        <Collapse
          bordered={false}
          defaultActiveKey={[1]}
          style={{ width: "100%" }}
        >
          <Panel
            header={<span style={{ fontWeight: "bold" }}>{title}</span>}
            key="1"
          >
            {data.map((item: TypeFilter, index: number) => (
              <div key={index}>
                <Checkbox value={item.label}>
                  {item.label} ({item.count})
                </Checkbox>
              </div>
            ))}
          </Panel>
        </Collapse>
      </Group>
    </div>
  );
};

export default FilterForm;
