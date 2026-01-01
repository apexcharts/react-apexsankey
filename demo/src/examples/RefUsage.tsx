import { useRef, useState, useEffect } from "react";
import ApexSankey, {
  GraphData,
  SankeyOptions,
  ApexSankeyRef,
} from "react-apexsankey";

const data: GraphData = {
  nodes: [
    { id: "Source A", title: "Source A" },
    { id: "Source B", title: "Source B" },
    { id: "Source C", title: "Source C" },
    { id: "Process 1", title: "Process 1" },
    { id: "Process 2", title: "Process 2" },
    { id: "Output X", title: "Output X" },
    { id: "Output Y", title: "Output Y" },
  ],
  edges: [
    { source: "Source A", target: "Process 1", value: 30 },
    { source: "Source A", target: "Process 2", value: 20 },
    { source: "Source B", target: "Process 1", value: 25 },
    { source: "Source B", target: "Process 2", value: 35 },
    { source: "Source C", target: "Process 2", value: 15 },
    { source: "Process 1", target: "Output X", value: 40 },
    { source: "Process 1", target: "Output Y", value: 15 },
    { source: "Process 2", target: "Output X", value: 30 },
    { source: "Process 2", target: "Output Y", value: 40 },
  ],
};

const options: Partial<SankeyOptions> = {
  width: 700,
  height: 400,
  nodeWidth: 18,
  fontFamily: "Inter, sans-serif",
  fontWeight: "500",
  enableTooltip: true,
};

export default function RefUsage() {
  const chartRef = useRef<ApexSankeyRef>(null);
  const [graphInfo, setGraphInfo] = useState<string>("Loading...");

  useEffect(() => {
    // small delay to ensure chart is rendered
    const timer = setTimeout(() => {
      if (chartRef.current?.graph) {
        const graph = chartRef.current.graph;
        setGraphInfo(
          JSON.stringify(
            {
              maxRank: graph.maxRank,
              hasGraph: !!graph.graph,
            },
            null,
            2
          )
        );
      } else {
        setGraphInfo("Graph not yet available");
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="example-container">
      <div className="example-header">
        <h2>Using Refs to Access Graph Instance</h2>
        <p>
          Demonstrates how to use React refs to access the underlying SankeyGraph
          instance for advanced use cases.
        </p>
      </div>
      <div className="chart-wrapper">
        <ApexSankey ref={chartRef} data={data} options={options} />
      </div>
      <div className="ref-demo">
        <strong>Graph Instance Info:</strong>
        <pre>{graphInfo}</pre>
      </div>
    </div>
  );
}
