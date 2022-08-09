import type { IPLocation } from "~/types";

export function getLocation(): Promise<IPLocation>;
export function getLocation(ip: string): Promise<IPLocation>;
export function getLocation(ip?: string): Promise<IPLocation> {
  const uri = new URL("/api/v2/country,city", "https://geo.ipify.org/");
  uri.searchParams.append("apiKey", "at_GJQFO5rgiNCI8zNGf3LnUea57Orxy");
  if (ip) uri.searchParams.append("ipAddress", ip);

  return fetch(uri.toString()).then((r) => r.json());
}
