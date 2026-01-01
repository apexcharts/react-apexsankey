import type { CSSProperties } from "react";

/**
 * node definition for sankey diagram
 */
export interface Node {
  readonly id: string;
  readonly title: string;
  readonly color?: string;
}

/**
 * edge definition connecting two nodes
 */
export interface Edge {
  readonly source: string;
  readonly target: string;
  readonly value: number;
  readonly type?: string;
  readonly color?: string;
}

/**
 * common options for canvas and layout
 */
export interface CommonOptions {
  readonly canvasStyle?: string;
  readonly enableToolbar?: boolean;
  readonly height?: number | string;
  readonly spacing?: number;
  readonly viewPortHeight?: number;
  readonly viewPortWidth?: number;
  readonly width?: number | string;
}

/**
 * node appearance options
 */
export interface NodeOptions {
  readonly nodeBorderColor?: string;
  readonly nodeBorderWidth?: number;
  readonly nodeWidth?: number;
  readonly onNodeClick?: (node: Node) => void;
}

/**
 * edge appearance options
 */
export interface EdgeOptions {
  readonly edgeGradientFill?: boolean;
  readonly edgeOpacity?: number;
}

/**
 * font styling options
 */
export interface FontOptions {
  readonly fontColor?: string;
  readonly fontFamily?: string;
  readonly fontSize?: string;
  readonly fontWeight?: string;
}

/**
 * tooltip configuration options
 */
export interface TooltipOptions {
  readonly enableTooltip?: boolean;
  readonly tooltipBGColor?: string;
  readonly tooltipBorderColor?: string;
  readonly tooltipId?: string;
  readonly tooltipTemplate?: (content: TooltipContent) => string;
}

/**
 * content passed to tooltip template function
 */
export interface TooltipContent {
  source: Node;
  target: Node;
  value: number;
}

/**
 * combined sankey options
 */
export type SankeyOptions = CommonOptions &
  EdgeOptions &
  FontOptions &
  NodeOptions &
  TooltipOptions;

/**
 * data options for ordering and alignment
 */
export interface DataOptions {
  readonly order?: string[][][];
  readonly alignLinkTypes?: boolean;
}

/**
 * complete data structure for sankey diagram
 */
export interface GraphData {
  readonly nodes: Node[];
  readonly edges: Edge[];
  readonly options?: DataOptions;
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
 * apexsankey class interface
 */
export interface ApexSankeyInstance {
  element: HTMLElement;
  options: SankeyOptions;
  graph: SankeyGraph;
  render(data: GraphData): SankeyGraph;
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
  /**
   * the rendered sankey graph instance
   * available after initial render, null during SSR or before mount
   */
  graph: SankeyGraph | null;
}

/**
 * props for the ApexSankey react component
 */
export interface ApexSankeyProps {
  /**
   * sankey diagram data containing nodes and edges
   */
  data: GraphData;

  /**
   * configuration options for the sankey diagram
   */
  options?: Partial<SankeyOptions>;

  /**
   * css class name for the container element
   */
  className?: string;

  /**
   * inline styles for the container element
   */
  style?: CSSProperties;
}
