import ApexSankey, { GraphData, SankeyOptions } from "react-apexsankey";

const data: GraphData = {
  nodes: [
    { id: "John", title: "John" },
    { id: "Raoul", title: "Raoul" },
    { id: "Jane", title: "Jane" },
    { id: "Marcel", title: "Marcel" },
    { id: "Ibrahim", title: "Ibrahim" },
    { id: "Junko", title: "Junko" },
  ],
  edges: [
    { source: "Marcel", target: "Ibrahim", value: 72 },
    { source: "Marcel", target: "Raoul", value: 155 },
    { source: "Raoul", target: "John", value: 109 },
    { source: "Raoul", target: "Ibrahim", value: 100 },
    { source: "Ibrahim", target: "Jane", value: 100 },
    { source: "Ibrahim", target: "Junko", value: 127 },
    { source: "Ibrahim", target: "John", value: 67 },
    { source: "Junko", target: "Jane", value: 140 },
    { source: "Junko", target: "John", value: 93 },
  ],
};

const options: Partial<SankeyOptions> = {
  width: 800,
  height: 500,
  nodeWidth: 15,
  fontSize: "22px",
  fontFamily: 'Satisfy, cursive',
  fontWeight: "400",
  fontColor: "#7c3aed",
  edgeOpacity: 0.3,
  enableTooltip: true,
};

export default function CustomFonts() {
  return (
    <div className="example-container">
      <div className="example-header">
        <h2>Custom Typography</h2>
        <p>
          People network flow with decorative "Satisfy" font and custom purple
          color. Shows how ApexSankey supports Google Fonts and custom styling.
        </p>
      </div>
      <div className="chart-wrapper">
        <ApexSankey data={data} options={options} />
      </div>
    </div>
  );
}
