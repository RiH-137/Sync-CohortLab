import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import { neobrutalism, shadesOfPurple } from '@clerk/themes'

export const metadata = {
  title: "Sync AI",
  description: ""
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: [dark, neobrutalism],
      variables: { '#9AE600': '#9AE600' },
      signIn: {
        baseTheme: [neobrutalism],
        variables: { '#9AE600': '#9AE600' },
      },
    }}
  >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`} cz-shortcut-listen="true">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />

            <main className="min-h-screen">
              {children}
            </main>

            {/* toaster */}
            <Toaster richColors />

            {/* footer */}
            <footer className="bg-black text-white">
              {/* Top Section */}
              <div className="bg-lime-400 text-black text-4xl font-bold p-10">
                KȝȝP HʋstlinG...
              </div>

              {/* Footer Content */}
              <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Image */}
                <div>
                  <Image
                    src="/img.jpg"
                    alt="Footer Image"
                    width={500}
                    height={300}
                    className="mb-4"
                  />
                  <p className="text-sm text-gray-400">
                    All rights are reserved by CohortLab.
                  </p>
                </div>

                {/* Product Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Product</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>job.CohortLab</li>
                    <li>FreeLance.CohortLab</li>
                    <li>Sync.CohortLab</li>
                    <li />
                  </ul>
                </div>

                {/* Follow Us */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>X</li>
                    <li>LinkedIn</li>
                    <li>Mail</li>
                    <li>+91 8580149535</li>
                  </ul>
                </div>

                {/* Features & Services */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Features</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>Resume Builder</li>
                    <li>Cover Page Design</li>
                    <li>Resume Templates</li>
                    <li>Mock Interviews Practices</li>
                  </ul>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
