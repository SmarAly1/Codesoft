import { useLocation } from "wouter";

export function useBaseLocation() {
  const baseUrl = import.meta.env.VITE_BASE_URL || "/";
  const [location, setLocation] = useLocation();

  // Wrap setLocation to handle base URL
  const setBaseLocation = (to: string) => {
    setLocation(baseUrl + to.replace(/^\//, ""));
  };

  // Remove base URL from current location
  const baseLocation = location.replace(new RegExp(`^${baseUrl}`), "/");

  return [baseLocation, setBaseLocation] as const;
}
