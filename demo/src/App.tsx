import { useState } from "react";
import {
  BasicSankey,
  NodeCustomization,
  EdgeCustomization,
  NodeOverlapping,
  CustomFonts,
  RefUsage,
  NodeClickCallback,
} from "./examples";

type ExampleKey =
  | "basic"
  | "nodeCustomization"
  | "edgeCustomization"
  | "nodeOverlapping"
  | "customFonts"
  | "refUsage"
  | "nodeClick";

interface ExampleConfig {
  key: ExampleKey;
  label: string;
  component: React.ComponentType;
}

const examples: ExampleConfig[] = [
  { key: "basic", label: "Basic", component: BasicSankey },
  { key: "nodeCustomization", label: "Node Customization", component: NodeCustomization },
  { key: "edgeCustomization", label: "Edge Customization", component: EdgeCustomization },
  { key: "nodeOverlapping", label: "Large Dataset", component: NodeOverlapping },
  { key: "customFonts", label: "Custom Fonts", component: CustomFonts },
  { key: "nodeClick", label: "Node Click", component: NodeClickCallback },
  { key: "refUsage", label: "Using Refs", component: RefUsage },
];

export default function App() {
  const [activeExample, setActiveExample] = useState<ExampleKey>("basic");

  const ActiveComponent =
    examples.find((e) => e.key === activeExample)?.component || BasicSankey;

  return (
    <div className="app">
      <header className="app-header">
        <h1>React ApexSankey</h1>
        <p>React wrapper for ApexSankey - Interactive Sankey Diagram Library</p>
      </header>

      <nav className="examples-nav">
        {examples.map((example) => (
          <button
            key={example.key}
            className={activeExample === example.key ? "active" : ""}
            onClick={() => setActiveExample(example.key)}
          >
            {example.label}
          </button>
        ))}
      </nav>

      <main>
        <ActiveComponent />
      </main>
    </div>
  );
}
