import ApexSankey, { GraphData, SankeyOptions } from "react-apexsankey";

const data: GraphData = {
  nodes: [
    { id: "Oil", title: "Oil" },
    { id: "Natural Gas", title: "Natural Gas" },
    { id: "Coal", title: "Coal" },
    { id: "Fossil Fuels", title: "Fossil Fuels" },
    { id: "Electricity", title: "Electricity" },
    { id: "Energy", title: "Energy" },
  ],
  edges: [
    { source: "Oil", target: "Fossil Fuels", value: 15 },
    { source: "Natural Gas", target: "Fossil Fuels", value: 20 },
    { source: "Coal", target: "Fossil Fuels", value: 25 },
    { source: "Coal", target: "Electricity", value: 25 },
    { source: "Fossil Fuels", target: "Energy", value: 60 },
    { source: "Electricity", target: "Energy", value: 25 },
  ],
};

const options: Partial<SankeyOptions> = {
  width: 800,
  height: 500,
  nodeWidth: 20,
  fontFamily: "Quicksand, sans-serif",
  fontWeight: "600",
  enableTooltip: true,
};

export default function BasicSankey() {
  return (
    <div className="example-container">
      <div className="example-header">
        <h2>Basic Sankey Diagram</h2>
        <p>
          A simple energy flow diagram showing how different fuel sources
          contribute to total energy production.
        </p>
      </div>
      <div className="chart-wrapper">
        <ApexSankey data={data} options={options} />
      </div>
    </div>
  );
}
