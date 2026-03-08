import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-[#0b0620] text-[#bfb9c8] py-14 px-6">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-start">
                    <div className="min-w-0">
                        <h3 className="text-white text-lg font-semibold">Lorem Ipsum</h3>
                        <p className="mt-3 text-sm leading-6 max-w-xs">#1 Finance SaaS Webflow Template to start transforming your financial future with a solution</p>
                    </div>

                    <div>
                        <div className="text-white font-semibold mb-3 text-sm">Products</div>
                        <nav className="flex flex-col">
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">Analytics</a>
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">Feature</a>
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">Pricing</a>
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">Contact</a>
                        </nav>
                    </div>

                    <div>
                        <div className="text-white font-semibold mb-3 text-sm">Company</div>
                        <nav className="flex flex-col">
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">Blog</a>
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">Blog Details</a>
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">Style Guide</a>
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">404</a>
                        </nav>
                    </div>

                    <div>
                        <div className="text-white font-semibold mb-3 text-sm">Term</div>
                        <nav className="flex flex-col">
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">Privacy</a>
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">Documentation</a>
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">ChangeLog</a>
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">Licenses</a>
                        </nav>
                    </div>

                    <div>
                        <div className="text-white font-semibold mb-3 text-sm">Social Links</div>
                        <nav className="flex flex-col">
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">Facebook</a>
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">Instagram</a>
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">Twitter</a>
                            <a className="text-[#d6cfe8] text-sm mb-2 hover:underline" href="#">LinkedIn</a>
                        </nav>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-7 pt-6">
                    <div className="text-center text-[#8f8696] text-xs">ABC Digital © Copyright {year}. All Rights Reserved</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
