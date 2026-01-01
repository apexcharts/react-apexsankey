# React ApexSankey Demo

Interactive examples showcasing the `react-apexsankey` wrapper library.

## Running the Demo

1. First, build the main library (from the root directory):

```bash
cd ..
npm install
npm run build
```

2. Then install and run the demo:

```bash
cd demo
npm install
npm run dev
```

3. Open http://localhost:3000 in your browser.

## Examples Included

### Basic Sankey
Simple energy flow diagram demonstrating basic usage with nodes and edges.

### Node Customization
Job application flow with customized node appearance:
- Thin nodes with borders
- Disabled gradient fill
- Custom node width

### Edge Customization
Job search journey with:
- Custom edge colors highlighting success path
- Custom node ordering
- Custom tooltip template

### Large Dataset (Node Overlapping)
Product inventory with 77 nodes demonstrating:
- Automatic label visibility management
- How ApexSankey handles dense layouts
- Tooltip fallback for hidden labels

### Custom Fonts
People network flow showing:
- Google Fonts integration (Satisfy)
- Custom font colors
- Decorative typography

### Node Click Callback
Employment qualification flow demonstrating:
- `onNodeClick` callback handling
- Click history tracking
- Interactive node selection

### Using Refs
Process flow showing:
- How to access `SankeyGraph` instance via refs
- Reading graph properties (maxRank)
- Advanced integration patterns

## Project Structure

```
demo/
├── src/
│   ├── main.tsx          # entry point
│   ├── App.tsx           # main app with navigation
│   ├── styles.css        # global styles
│   └── examples/
│       ├── index.ts
│       ├── BasicSankey.tsx
│       ├── NodeCustomization.tsx
│       ├── EdgeCustomization.tsx
│       ├── NodeOverlapping.tsx
│       ├── CustomFonts.tsx
│       ├── RefUsage.tsx
│       └── NodeClickCallback.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```
