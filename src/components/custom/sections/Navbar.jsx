import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <header className="">
            <div className="container ">
                <nav className="menu hidden md:flex  items-center gap-6 justify-between w-full">
                    {/* Logo */}
                    <Link href={""}><Image src={"/frontix_logo.webp"} width={150} height={150} /></Link>

                    <div className="text-white flex gap-2">
                        <Link href="/features">Home</Link>
                        <Link href="/pricing">About</Link>
                        <Link href="/contact">Work</Link>
                        <Link href="/features" className="w-full">Testimonials</Link>
                        <Link href="/features" className="w-full">Pricing</Link>
                        <Link href="/features" className="w-full">FAQ</Link>
                        <Link href="/features" className="w-full">Contact</Link>
                    </div>

                    <div className="btn">
                        <Button variant="pinky">Get Started</Button>
                    </div>
                </nav>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Menu />
                        </SheetTrigger>
                        <SheetContent>
                            <Link href="/features">Home</Link>
                            <Link href="/pricing">About</Link>
                            <Link href="/contact">Work</Link>
                            <Link href="/contact" className="w-full">Testimonials</Link>
                            <Link href="/contact" className="w-full">Pricing</Link>
                            <Link href="/contact" className="w-full">FAQ</Link>
                            <Link href="/contact" className="w-full">Contact</Link>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

export default Navbar
