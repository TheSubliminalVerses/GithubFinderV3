import Navbar from "@/components/Navbar"
import { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
    display: "swap"
})

const metadata: Metadata = {
    title: "Github Finder",
    description: "App to find github users."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${roboto.className} flex flex-col justify-between h-screen`}>
                <Navbar />
                <main className="container mx-auto pb-12">
                    {children}
                </main>
            </body>
        </html>
    )
}