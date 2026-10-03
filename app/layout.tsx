import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Kitsune Asia · Białystok", description: "Sushi, wok i azjatyckie smaki. Warszawska 1A, Białystok. Menu i kontakt.", robots: { index: false, follow: false }, icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg` } };
export default function Layout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="pl"><body>{children}</body></html> }
