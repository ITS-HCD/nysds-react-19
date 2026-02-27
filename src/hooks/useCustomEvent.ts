import { useEffect } from "react";

/**
 * Attach a listener for a custom DOM event on a ref'd element.
 *
 * React 19 supports custom elements natively, but its `on*` event props
 * only map to lowercased event names (e.g., `onClick` → "click").
 * Hyphenated custom events like "nys-change" or "nys-click" need
 * manual addEventListener — that's what this hook provides.
 *
 * @example
 * const ref = useRef<HTMLElement>(null);
 * useCustomEvent(ref, "nys-change", useCallback((e) => {
 *   console.log(e.detail.page);
 * }, []));
 * return <nys-pagination ref={ref} totalPages={10} />;
 */
export function useCustomEvent<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  eventName: string,
  handler: (event: CustomEvent) => void,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const listener = (e: Event) => handler(e as CustomEvent);
    el.addEventListener(eventName, listener);
    return () => el.removeEventListener(eventName, listener);
  }, [ref, eventName, handler]);
}
