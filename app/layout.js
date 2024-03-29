import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
import "./styles/globals.css"

export const metadata = {
  title: "Sharely",
  description:
    "Sharely: Because good stories deserve to be shared... and memes too!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="..//favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
