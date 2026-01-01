import type { ApexSankeyConstructor } from "./types";

/**
 * sets the ApexSankey license key globally
 * should be called once at app initialization, before rendering any charts
 *
 * @param licenseKey - the license key string provided by ApexSankey
 *
 * @example
 * ```tsx
 * import { setApexSankeyLicense } from 'react-apexsankey';
 *
 * // call this at the top of your app, before rendering any charts
 * setApexSankeyLicense('your-license-key-here');
 * ```
 */
export function setApexSankeyLicense(licenseKey: string): void {
  if (typeof window !== "undefined") {
    const global = window as typeof window & { ApexSankey?: ApexSankeyConstructor };
    if (global.ApexSankey) {
      global.ApexSankey.setLicense(licenseKey);
    } else {
      // store license key to be applied when ApexSankey loads
      const extendedWindow = window as typeof window & { 
        __APEX_SANKEY_LICENSE_KEY__?: string 
      };
      extendedWindow.__APEX_SANKEY_LICENSE_KEY__ = licenseKey;
    }
  }
}

/**
 * checks if code is running on the server (SSR)
 */
export function isSSR(): boolean {
  return typeof window === "undefined";
}
