/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

export function RenderIcon({
  icon,
  theme,
}: {
  icon: SimpleIcon;
  theme: string;
}) {
  const bgHex = theme === "light" ? "#080510" : "#f3f2ef";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      rel: undefined,
      href: undefined,
      target: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
}
