import Header from "@/components/layouts/Header";
import "../globals.css";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "Trigent - Brand Portal",
  description:
    "Trigent Brand Portal is a centralized platform for managing and sharing brand assets, guidelines, and resources. It provides a user-friendly interface for teams to access and utilize brand materials effectively, ensuring consistency and adherence to brand standards across all channels. Like icons, logos, images, and templates are easily accessible, promoting efficient collaboration and brand management.",
};

export default function MarketingLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="fixed top-0 left-0 right-0 w-full z-1000">
            <Header />
          </div>

          <div className="mt-25">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
