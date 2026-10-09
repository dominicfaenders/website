import QRCode from "qrcode";

type QrCodeProps = {
  url: string;
  className?: string;
  size?: number;
  title?: string;
};

export default async function QrCode({
  url,
  className = "",
  size = 220,
  title = "QR-Code",
}: QrCodeProps) {
  const svg = await QRCode.toString(url, {
    type: "svg",
    margin: 1,
    width: size,
    color: {
      dark: "#1d1d1f",
      light: "#ffffff",
    },
    errorCorrectionLevel: "M",
  });

  return (
    <div
      className={`qr-code inline-block leading-none [&_svg]:h-auto [&_svg]:w-full ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={title}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
