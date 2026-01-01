import ApexSankey, { GraphData, SankeyOptions } from "react-apexsankey";

const data: GraphData = {
  nodes: [
    { id: "Berlin", title: "Berlin" },
    { id: "Job Applications", title: "Job Applications" },
    { id: "Barcelona", title: "Barcelona" },
    { id: "Madrid", title: "Madrid" },
    { id: "Amsterdam", title: "Amsterdam" },
    { id: "Paris", title: "Paris" },
    { id: "London", title: "London" },
    { id: "Munich", title: "Munich" },
    { id: "Brussels", title: "Brussels" },
    { id: "Dubai", title: "Dubai" },
    { id: "Dublin", title: "Dublin" },
    { id: "Other Cities", title: "Other Cities" },
    { id: "No Response", title: "No Response" },
    { id: "Responded", title: "Responded" },
    { id: "Rejected", title: "Rejected" },
    { id: "Interviewed", title: "Interviewed" },
    { id: "No Offer", title: "No Offer" },
    { id: "Declined Offer", title: "Declined Offer" },
    { id: "Accepted Offer", title: "Accepted Offer" },
  ],
  edges: [
    { source: "Berlin", target: "Job Applications", value: 102, color: "#94a3b8" },
    { source: "Barcelona", target: "Job Applications", value: 39, color: "#94a3b8" },
    { source: "Madrid", target: "Job Applications", value: 35, color: "#94a3b8" },
    { source: "Amsterdam", target: "Job Applications", value: 15, color: "#94a3b8" },
    { source: "Paris", target: "Job Applications", value: 14, color: "#94a3b8" },
    { source: "London", target: "Job Applications", value: 6, color: "#94a3b8" },
    { source: "Munich", target: "Job Applications", value: 5, color: "#94a3b8" },
    { source: "Brussels", target: "Job Applications", value: 4, color: "#94a3b8" },
    { source: "Dubai", target: "Job Applications", value: 3, color: "#94a3b8" },
    { source: "Dublin", target: "Job Applications", value: 3, color: "#94a3b8" },
    { source: "Other Cities", target: "Job Applications", value: 12, color: "#94a3b8" },
    { source: "Job Applications", target: "No Response", value: 189, color: "#94a3b8" },
    { source: "Job Applications", target: "Responded", value: 49, color: "#f97316" },
    { source: "Responded", target: "Rejected", value: 38, color: "#94a3b8" },
    { source: "Responded", target: "Interviewed", value: 11, color: "#f97316" },
    { source: "Interviewed", target: "No Offer", value: 8, color: "#94a3b8" },
    { source: "Interviewed", target: "Declined Offer", value: 2, color: "#94a3b8" },
    { source: "Interviewed", target: "Accepted Offer", value: 1, color: "#22c55e" },
  ],
  options: {
    order: [
      [
        ["Berlin", "Barcelona", "Madrid", "Amsterdam", "Paris", "London"],
        ["Munich", "Brussels", "Dubai", "Dublin", "Other Cities"],
      ],
      [["Job Applications"]],
      [["Responded"], ["No Response"]],
      [["Interviewed"], ["Rejected"]],
      [["Accepted Offer", "Declined Offer", "No Offer"], []],
    ],
  },
};

const options: Partial<SankeyOptions> = {
  width: 900,
  height: 650,
  nodeWidth: 12,
  fontFamily: "Inter, sans-serif",
  fontWeight: "500",
  fontSize: "13px",
  edgeOpacity: 0.6,
  enableTooltip: true,
  tooltipTemplate: ({ source, target, value }) => `
    <div style="padding: 8px; font-family: Inter, sans-serif;">
      <strong>${source.title}</strong> → <strong>${target.title}</strong>
      <br />
      <span style="color: #64748b;">Applications: ${value}</span>
    </div>
  `,
};

export default function EdgeCustomization() {
  return (
    <div className="example-container">
      <div className="example-header">
        <h2>Edge Customization</h2>
        <p>
          Job search journey visualization with custom edge colors highlighting
          the successful path (orange for progress, green for success). Uses
          custom node ordering and tooltip template.
        </p>
      </div>
      <div className="chart-wrapper">
        <ApexSankey data={data} options={options} />
      </div>
    </div>
  );
}
