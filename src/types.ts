import type { CSSProperties } from "react";

// ---------------------------------------------------------------------------
// Core data types — must stay in sync with apexsankey core.
// These are kept here because react-apexsankey loads ApexSankey via the global
// window object (CDN pattern) and cannot import types from 'apexsankey' at
// build time without it being a devDependency.
// ---------------------------------------------------------------------------

/**
 * node definition for sankey diagram
 */
export interface SankeyNode {
  readonly id: string;
  readonly title: string;
  readonly color?: string;
}

/**
 * edge definition connecting two nodes
 */
export interface SankeyEdge {
  readonly source: string;
  readonly target: string;
  readonly value: number;
  readonly type?: string;
  readonly color?: string;
}

/**
 * data options for custom ordering and link alignment
 */
export interface DataOptions {
  readonly order?: string[][][];
  readonly alignLinkTypes?: boolean;
}

/**
 * complete data structure for sankey diagram
 */
export interface GraphData {
  readonly nodes: SankeyNode[];
  readonly edges: SankeyEdge[];
  readonly options?: DataOptions;
}

/**
 * combined sankey configuration options.
 * Mirrors the SankeyOptions intersection type in core apexsankey.
 * onNodeClick is intentionally omitted here — use the top-level onNodeClick prop instead.
 */
export interface SankeyOptions {
  // canvas / layout
  readonly canvasStyle?: string;
  readonly enableToolbar?: boolean;
  readonly height?: number | string;
  readonly spacing?: number;
  readonly viewPortHeight?: number;
  readonly viewPortWidth?: number;
  readonly width?: number | string;
  // node
  readonly nodeBorderColor?: string;
  readonly nodeBorderWidth?: number;
  readonly nodeWidth?: number;
  // edge
  readonly edgeGradientFill?: boolean;
  readonly edgeOpacity?: number;
  readonly edgeGap?: number;
  // font
  readonly fontColor?: string;
  readonly fontFamily?: string;
  readonly fontSize?: string;
  readonly fontWeight?: string;
  // tooltip
  readonly enableTooltip?: boolean;
  readonly tooltipBGColor?: string;
  readonly tooltipBorderColor?: string;
  readonly tooltipId?: string;
  readonly tooltipTemplate?: (content: TooltipContent) => string;
  // interaction
  readonly highlightOnHover?: boolean;
  readonly dimOnHover?: boolean;
  // animation
  readonly enableAnimation?: boolean;
  readonly animationDuration?: number;
}

/**
 * content passed to tooltip template function
 */
export interface TooltipContent {
  source: SankeyNode;
  target: SankeyNode;
  value: number;
}

/**
 * sankey graph instance returned by ApexSankey.render()
 */
export interface SankeyGraph {
  readonly graph: unknown;
  readonly maxRank: number;
  render(options?: { keepOldPosition?: boolean }): void;
}

/**
 * apexsankey class interface (loaded via window global)
 */
export interface ApexSankeyInstance {
  element: HTMLElement;
  options: SankeyOptions;
  graph: SankeyGraph;
  render(data: GraphData): SankeyGraph;
  destroy(): void;
}

/**
 * apexsankey constructor type
 */
export interface ApexSankeyConstructor {
  new (element: HTMLElement, options?: Partial<SankeyOptions>): ApexSankeyInstance;
  setLicense(key: string): void;
}

/**
 * ref handle exposed by the ApexSankey component
 */
export interface ApexSankeyRef {
  graph: SankeyGraph | null;
}

/**
 * props for the ApexSankey react component
 */
export interface ApexSankeyProps {
  /** sankey diagram data containing nodes and edges */
  data: GraphData;
  /**
   * configuration options for the sankey diagram.
   * onNodeClick is omitted here; use the top-level onNodeClick prop instead.
   */
  options?: Omit<Partial<SankeyOptions>, 'onNodeClick'>;
  /** callback fired when a node is clicked */
  onNodeClick?: (node: SankeyNode) => void;
  /** css class name for the container element */
  className?: string;
  /** inline styles for the container element */
  style?: CSSProperties;
}
