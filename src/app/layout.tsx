/* eslint-disable perfectionist/sort-imports */

/* eslint-disable style/quotes */

import { ClerkProvider } from '@clerk/nextjs';
import "@/styles/global.css";
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>

          <Navbar />
          {children}

        </body>
      </html>
    </ClerkProvider>
  );
}
