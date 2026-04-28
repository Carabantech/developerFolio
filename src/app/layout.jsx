import "@/styles/globals.scss";
import ClientLayout from "../components/ClientLayout";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
