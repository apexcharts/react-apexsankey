import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import type {
  ApexSankeyProps,
  ApexSankeyRef,
  ApexSankeyConstructor,
  ApexSankeyInstance,
  SankeyGraph,
} from "./types";
import { isSSR } from "./utils";

/**
 * gets ApexSankey constructor from global scope
 * user must load ApexSankey via CDN or ES module import before using this component
 */
function getApexSankeyClass(): ApexSankeyConstructor | null {
  if (typeof window === "undefined") return null;
  
  const global = window as typeof window & { ApexSankey?: ApexSankeyConstructor };
  return global.ApexSankey || null;
}

/**
 * applies stored license key if it was set before ApexSankey loaded
 */
function applyStoredLicense(ApexSankey: ApexSankeyConstructor): void {
  if (typeof window !== "undefined") {
    const extendedWindow = window as typeof window & { 
      __APEX_SANKEY_LICENSE_KEY__?: string 
    };
    if (extendedWindow.__APEX_SANKEY_LICENSE_KEY__) {
      ApexSankey.setLicense(extendedWindow.__APEX_SANKEY_LICENSE_KEY__);
    }
  }
}

/**
 * react wrapper component for ApexSankey
 * renders a sankey diagram using the ApexSankey library
 * 
 * note: user must load ApexSankey before using this component, either via:
 * - ES module: import ApexSankey from 'apexsankey'
 * - CDN: <script src="https://cdn.jsdelivr.net/npm/apexsankey/apexsankey.min.js"></script>
 *
 * @example
 * ```tsx
 * import ApexSankey from 'react-apexsankey';
 *
 * const data = {
 *   nodes: [
 *     { id: 'a', title: 'Node A' },
 *     { id: 'b', title: 'Node B' },
 *     { id: 'c', title: 'Node C' },
 *   ],
 *   edges: [
 *     { source: 'a', target: 'c', value: 1 },
 *     { source: 'b', target: 'c', value: 2 },
 *   ],
 * };
 *
 * function MyChart() {
 *   return <ApexSankey data={data} options={{ width: 800, height: 600 }} />;
 * }
 * ```
 */
const ApexSankey = forwardRef<ApexSankeyRef, ApexSankeyProps>(function ApexSankey(
  { data, options = {}, className, style },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<ApexSankeyInstance | null>(null);
  const [graph, setGraph] = useState<SankeyGraph | null>(null);
  const [error, setError] = useState<string | null>(null);

  // expose graph instance via ref
  useImperativeHandle(
    ref,
    () => ({
      graph,
    }),
    [graph]
  );

  // render chart when dependencies change
  useEffect(() => {
    if (isSSR()) return;
    if (!containerRef.current) return;

    // get ApexSankey from global scope
    const ApexSankeyClass = getApexSankeyClass();
    
    if (!ApexSankeyClass) {
      setError(
        "ApexSankey not found. Please load ApexSankey before using this component. " +
        "See README for installation instructions."
      );
      return;
    }

    // apply stored license if set before ApexSankey loaded
    applyStoredLicense(ApexSankeyClass);

    // clean up previous instance
    if (instanceRef.current) {
      containerRef.current.innerHTML = "";
      instanceRef.current = null;
      setGraph(null);
    }

    // create new instance
    try {
      const instance = new ApexSankeyClass(containerRef.current, options);
      instanceRef.current = instance;

      const renderedGraph = instance.render(data);
      setGraph(renderedGraph);
      setError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error rendering chart";
      setError(message);
    }

    // cleanup on unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      instanceRef.current = null;
    };
  }, [data, options]);

  // compute container styles
  const containerStyle: CSSProperties = {
    ...style,
  };

  // apply width/height from options if not set in style
  if (options.width && !style?.width) {
    containerStyle.width =
      typeof options.width === "number" ? `${options.width}px` : options.width;
  }
  if (options.height && !style?.height) {
    containerStyle.height =
      typeof options.height === "number" ? `${options.height}px` : options.height;
  }

  // render nothing on server
  if (isSSR()) {
    return (
      <div
        ref={containerRef}
        className={className}
        style={containerStyle}
        aria-label="Sankey diagram loading"
      />
    );
  }

  // show error if loading failed
  if (error) {
    return (
      <div className={className} style={containerStyle} role="alert">
        <p style={{ color: "red", padding: "1rem" }}>{error}</p>
      </div>
    );
  }

  return <div ref={containerRef} className={className} style={containerStyle} />;
});

export default ApexSankey;
