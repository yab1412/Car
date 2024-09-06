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
                title: "home",
                path: "/",
              },
              {
                title: "About",
                path: "/about",
              },
              {
                title: "Section",
                path: "/section",
              },
            ]}
            logo={{
              src: "",
              alt: "Image",
              width: 0,
              height: 0,
            }}
          />
        </header>
        <main>

        {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
