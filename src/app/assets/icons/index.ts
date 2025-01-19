import aws from "./aws.svg";
import azure from "./azure.png";
import figma from "./figma.svg";
import react from "./react.svg";
import metamask from "./metamask.svg";
import typescript from "./typescript.svg";
import fallback from "../images/placeholder.svg";

export const icons = {
  aws,
  figma,
  react,
  azure,
  fallback,
  metamask,
  typescript,
};
type IIcons = keyof typeof icons;

export const getIcons = (id: IIcons) => {
  return icons[id] ?? icons.fallback;
};
