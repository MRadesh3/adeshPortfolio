import "../styles/globals.css";
import { Sora } from "@next/font/google";
import TopLeftImage from "@/components/TopLeftImage";
import Navbar from "@/components/Navbar";
import FramerMotion from "@/components/FramerMotion";
import Header from "@/components/Header";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Adesh Salsundar Portfolio",
  description:
    "Welcome to Adesh Salsundar's Portfolio— a dynamic showcase of creativity and expertise.",
  icons: {
    icon: ["/assets/favicon.ico?v=4"],
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div
          className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
        >
          <TopLeftImage />
          <Navbar />
          <Header />
          <FramerMotion>{children}</FramerMotion>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
