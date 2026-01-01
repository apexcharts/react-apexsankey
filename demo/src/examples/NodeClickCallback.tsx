import { useState } from "react";
import ApexSankey, { GraphData, SankeyOptions, Node } from "react-apexsankey";

const data: GraphData = {
  nodes: [
    { id: "England", title: "England" },
    { id: "Wales", title: "Wales" },
    { id: "Level 4", title: "Level 4" },
    { id: "Level 3", title: "Level 3" },
    { id: "Level 2", title: "Level 2" },
    { id: "Level 1", title: "Level 1 and Entry" },
    { id: "No qualifications", title: "No Qualifications" },
    { id: "Wholesale & retail", title: "Wholesale & Retail" },
    { id: "Health & social work", title: "Health & Social Work" },
    { id: "Education", title: "Education" },
    { id: "Construction", title: "Construction" },
    { id: "Manufacturing", title: "Manufacturing" },
    { id: "Transport & storage", title: "Transport & Storage" },
    { id: "Finance & insurance", title: "Finance & Insurance" },
  ],
  edges: [
    { source: "England", target: "Level 4", value: 13 },
    { source: "England", target: "Level 3", value: 8 },
    { source: "England", target: "Level 2", value: 8 },
    { source: "England", target: "Level 1", value: 6 },
    { source: "England", target: "No qualifications", value: 3 },
    { source: "Wales", target: "Level 4", value: 7 },
    { source: "Wales", target: "Level 3", value: 8 },
    { source: "Wales", target: "Level 2", value: 4 },
    { source: "Wales", target: "Level 1", value: 5 },
    { source: "Wales", target: "No qualifications", value: 5 },
    { source: "Level 4", target: "Wholesale & retail", value: 4 },
    { source: "Level 4", target: "Health & social work", value: 3 },
    { source: "Level 4", target: "Education", value: 2 },
    { source: "Level 4", target: "Construction", value: 1 },
    { source: "Level 4", target: "Manufacturing", value: 2 },
    { source: "Level 4", target: "Transport & storage", value: 2 },
    { source: "Level 4", target: "Finance & insurance", value: 3 },
    { source: "Level 3", target: "Wholesale & retail", value: 3 },
    { source: "Level 3", target: "Health & social work", value: 2 },
    { source: "Level 3", target: "Education", value: 1 },
    { source: "Level 3", target: "Construction", value: 2 },
    { source: "Level 3", target: "Manufacturing", value: 1 },
    { source: "Level 3", target: "Transport & storage", value: 2 },
    { source: "Level 3", target: "Finance & insurance", value: 2 },
    { source: "Level 2", target: "Wholesale & retail", value: 2 },
    { source: "Level 2", target: "Health & social work", value: 1 },
    { source: "Level 2", target: "Education", value: 2 },
    { source: "Level 2", target: "Construction", value: 1 },
    { source: "Level 2", target: "Manufacturing", value: 2 },
    { source: "Level 2", target: "Transport & storage", value: 1 },
    { source: "Level 2", target: "Finance & insurance", value: 1 },
    { source: "Level 1", target: "Wholesale & retail", value: 1 },
    { source: "Level 1", target: "Health & social work", value: 2 },
    { source: "Level 1", target: "Education", value: 1 },
    { source: "Level 1", target: "Construction", value: 2 },
    { source: "Level 1", target: "Manufacturing", value: 1 },
    { source: "Level 1", target: "Transport & storage", value: 1 },
    { source: "Level 1", target: "Finance & insurance", value: 1 },
    { source: "No qualifications", target: "Wholesale & retail", value: 1 },
    { source: "No qualifications", target: "Health & social work", value: 1 },
    { source: "No qualifications", target: "Education", value: 1 },
    { source: "No qualifications", target: "Construction", value: 1 },
    { source: "No qualifications", target: "Manufacturing", value: 1 },
    { source: "No qualifications", target: "Transport & storage", value: 1 },
    { source: "No qualifications", target: "Finance & insurance", value: 1 },
  ],
};

export default function NodeClickCallback() {
  const [clickedNode, setClickedNode] = useState<Node | null>(null);
  const [clickHistory, setClickHistory] = useState<string[]>([]);

  const handleNodeClick = (node: Node) => {
    setClickedNode(node);
    setClickHistory((prev) => [...prev.slice(-4), node.title]);
  };

  const options: Partial<SankeyOptions> = {
    width: 850,
    height: 550,
    nodeWidth: 20,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    edgeOpacity: 0.25,
    enableTooltip: true,
    onNodeClick: handleNodeClick,
  };

  return (
    <div className="example-container">
      <div className="example-header">
        <h2>Node Click Callback</h2>
        <p>
          Employment qualification flow. Click on any node to trigger the
          callback and see the node information below.
        </p>
      </div>
      <div className="chart-wrapper">
        <ApexSankey data={data} options={options} />
      </div>
      <div className="ref-demo">
        <strong>Last Clicked Node:</strong>
        <pre>
          {clickedNode
            ? JSON.stringify(clickedNode, null, 2)
            : "Click a node to see its data"}
        </pre>
        {clickHistory.length > 0 && (
          <>
            <strong>Click History:</strong>
            <pre>{clickHistory.join(" → ")}</pre>
          </>
        )}
      </div>
    </div>
  );
}
