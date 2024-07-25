import "../styles/globals.css";

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-neutral-900 flex min-h-screen flex-col justify-center py-2">
        {children}
      </body>
    </html>
  );
}
