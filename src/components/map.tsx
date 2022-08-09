import { useEffect, useRef } from "react";
import { map, tileLayer, marker, type Map, icon } from "leaflet";

import markerIcon from "~/assets/images/icon-location.svg";
import { styled } from "~/styles/stitches.config";
import useSWR from "swr";
import { getLocation } from "~/services/ip";

type Props = {};

const MapContainer = styled("div", {
  width: "$full",
  height: "calc(100vh - $sizes$header)",
  "@tabletUp": {
    height: "calc(100vh - $sizes$header + 1rem)",
  },
});

const MapEl: React.FC<Props> = (props) => {
  const { data } = useSWR("location", () => getLocation());
  const mapElRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map>();
  //   const fetcher = useFetcher();

  useEffect(() => {
    if (mapElRef.current && !mapRef.current) {
      const mapEl = map(mapElRef.current, { zoomControl: false });
      tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(mapEl);
      mapRef.current = mapEl;
    }
  }, []);

  useEffect(() => {
    if (mapRef.current && data) {
      const iconEl = icon({
        iconUrl: markerIcon,
        iconSize: [40, 60],
        iconAnchor: [22, 94],
      });
      mapRef.current.setView([data.location.lat, data.location.lng], 30);
      marker([data.location.lat, data.location.lng], {
        icon: iconEl,
      })
        .addTo(mapRef.current)
        .bindPopup(`${data.location.city}, ${data.location.region}`);
    }
  }, [data]);

  return <MapContainer ref={mapElRef} />;
};

MapEl.displayName = "Map";
export default MapEl;
