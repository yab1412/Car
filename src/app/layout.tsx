import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../Styles/global.scss";
import Header from "@/UI/Components/Header";
import { Footer } from "@/UI/Components/Footer";

const inter = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yabtsega Muluneh",
  description: "Generated Template by Yabtsega",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Header
            menu={[
              {
                title: "Home",
                path: "/",
              },
              {
                title: "About",
                path: "#about",
              },
              {
                title: "Offers",
                path: "#offers",
              },
              {
                title: "Cars",
                path: "#cars",
              },
              {
                title: "News",
                path: "#news",
              },
              {
                title: "Testimonies",
                path: "/section",
              },
              {
                title: "FAQ",
                path: "#FAQ",
              },
              {
                title: "Contacts",
                path: "#contact us",
              },
            ]}
            logo={{
              src: "/assets/logo.jpg",
              alt: "Image",
              width: 100,
              height: 100,
            }}
          />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
