# react-apexsankey

React wrapper for [ApexSankey](https://github.com/apexcharts/apexsankey) - A JavaScript library to create Sankey diagrams.

## Installation

```bash
npm install react-apexsankey apexsankey @svgdotjs/svg.js
```

Or with yarn:

```bash
yarn add react-apexsankey apexsankey @svgdotjs/svg.js
```

## Loading ApexSankey

**Important:** You must load ApexSankey before using the React component. Choose one of the following methods:

### Option 1: ES Module Import (Recommended)

Import ApexSankey at your app's entry point to register it globally:

```tsx
// main.tsx or index.tsx
import "apexsankey";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Option 2: CDN Script Tags

Add the scripts to your `index.html` before your app bundle:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexsankey/apexsankey.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Quick Start

```tsx
import ApexSankey from "react-apexsankey";

const data = {
  nodes: [
    { id: "oil", title: "Oil" },
    { id: "gas", title: "Natural Gas" },
    { id: "coal", title: "Coal" },
    { id: "fossil", title: "Fossil Fuels" },
    { id: "energy", title: "Energy" },
  ],
  edges: [
    { source: "oil", target: "fossil", value: 15 },
    { source: "gas", target: "fossil", value: 20 },
    { source: "coal", target: "fossil", value: 25 },
    { source: "fossil", target: "energy", value: 60 },
  ],
};

function App() {
  return (
    <ApexSankey
      data={data}
      options={{
        width: 800,
        height: 600,
        nodeWidth: 20,
      }}
    />
  );
}
```

## License Setup

If you have a commercial license, set it once at app initialization before rendering any charts:

```tsx
import { setApexSankeyLicense } from "react-apexsankey";

// call this at the top of your app
setApexSankeyLicense("your-license-key-here");
```

Example with React app entry point:

```tsx
// main.tsx or index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { setApexSankeyLicense } from "react-apexsankey";
import App from "./App";

// set license before rendering
setApexSankeyLicense("your-license-key-here");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Using Refs

Access the underlying `SankeyGraph` instance via refs:

```tsx
import { useRef, useEffect } from "react";
import ApexSankey, { ApexSankeyRef } from "react-apexsankey";

function App() {
  const chartRef = useRef<ApexSankeyRef>(null);

  useEffect(() => {
    if (chartRef.current?.graph) {
      console.log("Graph instance:", chartRef.current.graph);
      console.log("Max rank:", chartRef.current.graph.maxRank);
    }
  }, []);

  return <ApexSankey ref={chartRef} data={data} options={options} />;
}
```

## Props

| Prop        | Type                    | Required | Description                                |
| ----------- | ----------------------- | -------- | ------------------------------------------ |
| `data`      | `GraphData`             | Yes      | Sankey diagram data (nodes and edges)      |
| `options`   | `Partial<SankeyOptions>`| No       | Configuration options for the diagram      |
| `className` | `string`                | No       | CSS class name for the container element   |
| `style`     | `CSSProperties`         | No       | Inline styles for the container element    |

## Data Format

### Nodes

```typescript
interface Node {
  id: string;      // unique identifier
  title: string;   // display label
  color?: string;  // optional custom color
}
```

### Edges

```typescript
interface Edge {
  source: string;  // source node id
  target: string;  // target node id
  value: number;   // edge weight/size
  type?: string;   // optional grouping type
  color?: string;  // optional custom color
}
```

### Complete Data Structure

```typescript
interface GraphData {
  nodes: Node[];
  edges: Edge[];
  options?: {
    order?: string[][][];      // custom node ordering
    alignLinkTypes?: boolean;  // align links by type
  };
}
```

## Options

| Option             | Type                          | Default                      | Description                                        |
| ------------------ | ----------------------------- | ---------------------------- | -------------------------------------------------- |
| `width`            | `number \| string`            | `800`                        | Width of graph container                           |
| `height`           | `number \| string`            | `800`                        | Height of graph container                          |
| `canvasStyle`      | `string`                      | `""`                         | CSS styles for canvas root container               |
| `spacing`          | `number`                      | `100`                        | Spacing from top and left of graph container       |
| `nodeWidth`        | `number`                      | `20`                         | Width of graph nodes                               |
| `nodeBorderWidth`  | `number`                      | `1`                          | Border width of nodes in pixels                    |
| `nodeBorderColor`  | `string`                      | `""`                         | Border color of nodes                              |
| `onNodeClick`      | `(node: Node) => void`        | `undefined`                  | Callback function for node click                   |
| `edgeOpacity`      | `number`                      | `0.4`                        | Opacity value for edges (0 to 1)                   |
| `edgeGradientFill` | `boolean`                     | `true`                       | Enable gradient fill based on node colors          |
| `enableTooltip`    | `boolean`                     | `false`                      | Enable tooltip on hover                            |
| `enableToolbar`    | `boolean`                     | `false`                      | Enable/disable graph toolbar                       |
| `tooltipId`        | `string`                      | `"sankey-tooltip-container"` | Tooltip HTML element id                            |
| `tooltipTemplate`  | `(content) => string`         | default template             | HTML template for tooltip                          |
| `tooltipBorderColor` | `string`                    | `"#BCBCBC"`                  | Border color of tooltip                            |
| `tooltipBGColor`   | `string`                      | `"#FFFFFF"`                  | Background color of tooltip                        |
| `fontSize`         | `string`                      | `"14px"`                     | Font size of node labels                           |
| `fontFamily`       | `string`                      | `""`                         | Font family of node labels                         |
| `fontWeight`       | `string`                      | `"400"`                      | Font weight of node labels                         |
| `fontColor`        | `string`                      | `"#000000"`                  | Font color of node labels                          |

## Custom Node Ordering

You can specify custom node ordering using the `order` option in data:

```tsx
const data = {
  nodes: [
    { id: "a", title: "A" },
    { id: "b", title: "B" },
    { id: "c", title: "C" },
  ],
  edges: [
    { source: "a", target: "c", value: 1 },
    { source: "b", target: "c", value: 2 },
  ],
  options: {
    order: [
      [["a", "b"]], // first layer
      [["c"]],      // second layer
    ],
  },
};
```

## Custom Tooltip

```tsx
const options = {
  enableTooltip: true,
  tooltipTemplate: ({ source, target, value }) => `
    <div style="padding: 8px;">
      <strong>${source.title}</strong> → <strong>${target.title}</strong>
      <br />
      Value: ${value}
    </div>
  `,
};
```

## Styling

### Container Styling

```tsx
<ApexSankey
  data={data}
  className="my-sankey-chart"
  style={{ border: "1px solid #ccc", borderRadius: 8 }}
  options={options}
/>
```

### Canvas Styling

```tsx
const options = {
  canvasStyle: "background: #f6f6f6; border: 1px solid #caced0;",
};
```

## TypeScript

All types are exported for use in your TypeScript projects:

```tsx
import ApexSankey, {
  GraphData,
  Node,
  Edge,
  SankeyOptions,
  ApexSankeyRef,
  ApexSankeyProps,
} from "react-apexsankey";
```

## SSR Support

This component is SSR-safe and renders an empty container on the server. The chart is only rendered client-side after hydration.

## Browser Support

- React 17+
- Modern browsers (Chrome, Firefox, Safari, Edge)

## License

MIT

## Links

- [ApexSankey Documentation](https://apexcharts.com/docs/sankey)
- [ApexSankey GitHub](https://github.com/nicnash/apexsankey)
