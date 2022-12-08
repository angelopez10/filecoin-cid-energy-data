import { Icon } from "leaflet";
import IconMarker from "../../../../assets/location_icon.svg";
export const LocationIcon = new Icon({
  iconUrl: IconMarker,
  iconRetinaUrl: IconMarker,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [45, 45],
  className: "leaflet-location-icon",
});
