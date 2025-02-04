import { getCurrentDate } from "@/app/utils/utils";
import { handleDownloadProps } from "./@types";

export const handleDownload = ({
  downloadFileUrl,
  setIsDownload,
}: handleDownloadProps) => {
  if (!downloadFileUrl) return;
  const currentDate = getCurrentDate();

  const link = document.createElement("a");
  link.href = downloadFileUrl;
  link.download = `curriculo-pablo-moreira-${currentDate}.pdf`; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setIsDownload(true);
};
