"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";


type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "About", href: "/about" },
  { name: "Docs", href: "#" },
  { name: "Contact Us", href: "#" },
];

const HomeNav2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full px-6 bg-[#09050E] lg:bg-transparent rounded-xl">
      <nav className="flex items-center w-full  lg:mx-auto  px-4 py-3  justify-between">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
          <div className="logo">
            <Image
              src="/icons/logo.svg"
              alt="Logo"
              width={137}
              height={55}
              className="w-auto h-10 sm:h-12 cursor-pointer"
            />
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <Image
              src="/icons/cross.svg"
              alt="Logo"
              width={137}
              height={55}
              className="w-auto h-10 sm:h-12 cursor-pointer"
            /> :  <Image
              src="/icons/hammenu.svg"
              alt="Logo"
              width={137}
              height={55}
              className="w-auto h-10 sm:h-12 cursor-pointer"
            />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="lg:flex items-center hidden w-[40%] gap-8 justify-evenly">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-[#b0a0cd] hover:text-purple transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

          {/* Launch App Button - Hidden on Mobile */}
          <Link href="/dashboard" className="hidden lg:block cursor-pointer">
          <Button variant="gradientPrimary" size="default">
            Launch App
          </Button>
        </Link>

        {/* Mobile Menu - Slide from Right */}
        <div
          className={`fixed lg:hidden inset-0 right-0 w-full rounded-xl bg-[#21192F] pt-5 z-50 flex flex-col items-center justify-start transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Header with Logo & Close Button */}
          <div className="w-full flex items-center justify-between px-6 py-4 ">
            <Image
              src="/icons/logo.svg"
              alt="Logo"
              width={120}
              height={40}
              className="w-auto h-10"
            />
            <button
              onClick={toggleMenu}
              className="text-purple-400"
              aria-label="Close menu"
            >
              <Image
              src="/icons/cross.svg"
              alt="Logo"
              width={137}
              height={55}
              className="w-auto h-10 sm:h-12 cursor-pointer"
            />
            </button>
          </div>

          {/* Navigation Links */}
          {/* Navigation Links */}
          <div className="flex flex-col items-center w-full mt-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={toggleMenu}
                className={`w-full text-center text-xl text-white py-4 hover:text-purple-400 transition-colors ${index !== navLinks.length - 1 ? "border-b-[0.4px] border-[#A26DFF] w-[80%] mx-auto" : ""
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Overlay Background (optional) */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </div>
  );
};

export default HomeNav2;
