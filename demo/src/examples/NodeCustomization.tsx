import ApexSankey, { GraphData, SankeyOptions } from "react-apexsankey";

const data: GraphData = {
  nodes: [
    { id: "Applications", title: "Applications" },
    { id: "Accepted", title: "Accepted" },
    { id: "Rejected", title: "Rejected" },
    { id: "In Progress", title: "In Progress" },
    { id: "Software Engineering", title: "Software Engineering" },
    { id: "Data Science", title: "Data Science" },
    { id: "Marketing", title: "Marketing" },
    { id: "Sales", title: "Sales" },
    { id: "HR", title: "HR" },
    { id: "Finance", title: "Finance" },
    { id: "Full-time", title: "Full-time" },
    { id: "Part-time", title: "Part-time" },
    { id: "Contract", title: "Contract" },
  ],
  edges: [
    { source: "Applications", target: "Accepted", value: 10 },
    { source: "Applications", target: "Rejected", value: 15 },
    { source: "Applications", target: "In Progress", value: 10 },
    { source: "Accepted", target: "Software Engineering", value: 4 },
    { source: "Accepted", target: "Data Science", value: 2 },
    { source: "Accepted", target: "Marketing", value: 1 },
    { source: "Accepted", target: "Sales", value: 1 },
    { source: "Accepted", target: "HR", value: 1 },
    { source: "Accepted", target: "Finance", value: 1 },
    { source: "Rejected", target: "Software Engineering", value: 5 },
    { source: "Rejected", target: "Data Science", value: 3 },
    { source: "Rejected", target: "Marketing", value: 2 },
    { source: "Rejected", target: "Sales", value: 2 },
    { source: "Rejected", target: "HR", value: 2 },
    { source: "Rejected", target: "Finance", value: 1 },
    { source: "In Progress", target: "Software Engineering", value: 3 },
    { source: "In Progress", target: "Data Science", value: 2 },
    { source: "In Progress", target: "Marketing", value: 2 },
    { source: "In Progress", target: "Sales", value: 1 },
    { source: "In Progress", target: "HR", value: 1 },
    { source: "In Progress", target: "Finance", value: 1 },
    { source: "Software Engineering", target: "Full-time", value: 8 },
    { source: "Software Engineering", target: "Part-time", value: 2 },
    { source: "Software Engineering", target: "Contract", value: 2 },
    { source: "Data Science", target: "Full-time", value: 5 },
    { source: "Data Science", target: "Part-time", value: 1 },
    { source: "Data Science", target: "Contract", value: 1 },
    { source: "Marketing", target: "Full-time", value: 3 },
    { source: "Marketing", target: "Part-time", value: 1 },
    { source: "Marketing", target: "Contract", value: 1 },
    { source: "Sales", target: "Full-time", value: 2 },
    { source: "Sales", target: "Part-time", value: 1 },
    { source: "Sales", target: "Contract", value: 1 },
    { source: "HR", target: "Full-time", value: 2 },
    { source: "HR", target: "Part-time", value: 1 },
    { source: "HR", target: "Contract", value: 1 },
    { source: "Finance", target: "Full-time", value: 2 },
    { source: "Finance", target: "Contract", value: 1 },
  ],
};

const options: Partial<SankeyOptions> = {
  width: 900,
  height: 600,
  fontFamily: "Quicksand, sans-serif",
  fontWeight: "600",
  nodeWidth: 8,
  nodeBorderWidth: 2,
  nodeBorderColor: "#333",
  edgeGradientFill: false,
  enableTooltip: true,
};

export default function NodeCustomization() {
  return (
    <div className="example-container">
      <div className="example-header">
        <h2>Node Customization</h2>
        <p>
          Job application flow with customized node appearance: thin nodes with
          borders and disabled gradient fill for a cleaner look.
        </p>
      </div>
      <div className="chart-wrapper">
        <ApexSankey data={data} options={options} />
      </div>
    </div>
  );
}
