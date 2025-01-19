import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { fetchSimpleIcons } from "react-icon-cloud";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCurrentDate = (): string => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Meses começam do zero
  const year = now.getFullYear();
  return `${day}-${month}-${year}`;
};

export const generateRandomNumber = (untilNumbers: number) =>
  Math.floor(Math.random() * untilNumbers);
export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const fetchIcons = (iconSlugs: string[]) => {
  return fetchSimpleIcons({ slugs: iconSlugs });
};

export const handleRedirect = () => {
  const url = `https://wa.me/5521981014689`;
  window.open(url, "_blank");
};
