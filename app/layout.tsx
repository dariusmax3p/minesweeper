import {
  Crimson_Pro,
  Nunito,
  Source_Code_Pro,
  Trirong,
} from "next/font/google";
import "@/styles/globals.scss";

// Logo
const crimsonPro = Crimson_Pro({
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  variable: "--crimson-pro",
});

// Mono
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  variable: "--source-code-pro",
});

// Serif
const trirong = Trirong({
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  variable: "--trirong",
  weight: ["300", "500", "700", "900"],
});

// Sans
const nunito = Nunito({
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
  variable: "--nunito",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex antialiased bg-grain bg-white-500 ${crimsonPro.variable} ${trirong.variable} ${nunito.variable} ${sourceCodePro.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
