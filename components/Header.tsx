"use client";

import React, { useState } from "react";
import { FaChevronDown, FaBars, FaXmark } from "react-icons/fa6";

// Desktop Dropdown
const NavDropdown = ({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) => (
  <div className="relative group">
    <button className="flex items-center gap-1 hover:text-emerald-600 transition font-medium">
      {title}
      <FaChevronDown size={10} />
    </button>

    <div className="absolute top-full left-0 hidden group-hover:block w-72 bg-white text-slate-700 py-3 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] border border-slate-100 z-50">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="block px-6 py-2.5 text-sm hover:bg-emerald-50 hover:text-emerald-700 transition duration-150 font-medium"
        >
          {item.label}
        </a>
      ))}
    </div>
  </div>
);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const services = [
    { label: "Expert Tech Support", href: "/expert-tech-support" },
    { label: "IT Support for Businesses", href: "/it-support-for-businesses" },
    {
      label: "Consultancy and Advisory Services",
      href: "/consultancy-and-advisory-services",
    },
    { label: "Cybersecurity Services", href: "/cybersecurity-services" },
    {
      label: "Software Development Services",
      href: "/software-development-services",
    },
    {
      label: "Website Design & Development",
      href: "/website-design-and-development",
    },
    {
      label: "Digital Marketing Services",
      href: "/digital-marketing-services",
    },
  ];

  const resources = [{ label: "FAQs", href: "/FAQ" }];

  return (
    <div className="sticky top-0 z-50 w-full bg-emerald-50 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo1.png"
            alt="Webmatic Solutions Logo"
            className="h-15 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a
            href="/about"
            className="hover:text-emerald-600 transition font-medium"
          >
            Who we are
          </a>

          <NavDropdown title="What we do" items={services} />

          <NavDropdown title="Resources" items={resources} />

          <a
            href="/contact"
            className="hover:text-emerald-600 transition font-medium"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-700"
        >
          {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">

          <a
            href="/about"
            className="block px-6 py-4 border-b border-slate-100 text-slate-700 font-medium"
          >
            Who we are
          </a>

          {/* What We Do */}
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="w-full flex justify-between items-center px-6 py-4 border-b border-slate-100 text-slate-700 font-medium"
          >
            What we do
            <FaChevronDown
              className={`transition-transform duration-300 ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {servicesOpen && (
            <div className="bg-slate-50">
              {services.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-10 py-3 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {/* Resources */}
          <button
            onClick={() => setResourcesOpen(!resourcesOpen)}
            className="w-full flex justify-between items-center px-6 py-4 border-b border-slate-100 text-slate-700 font-medium"
          >
            Resources
            <FaChevronDown
              className={`transition-transform duration-300 ${
                resourcesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {resourcesOpen && (
            <div className="bg-slate-50">
              {resources.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-10 py-3 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          <a
            href="/contact"
            className="block px-6 py-4 text-slate-700 font-medium"
          >
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;