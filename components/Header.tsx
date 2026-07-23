"use client";

import React, { useState } from "react";
import { FaChevronDown, FaBars, FaXmark } from "react-icons/fa6";

type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

// Desktop Dropdown
const NavDropdown = ({ title, items }: { title: string; items: NavItem[] }) => (
  <div className="relative group">
    <button className="flex items-center gap-1 hover:text-emerald-600 transition font-medium">
      {title}
      <FaChevronDown size={10} />
    </button>

    <div className="absolute top-full -left-25 hidden group-hover:block w-72 bg-white rounded-xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] py-3 z-50">
      {items.map((item) => (
        <div key={item.label} className="relative group/item">
          <a
            href={item.href || "#"}
            className="flex items-center justify-between px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
          >
            {item.label}

            {item.children && <span className="text-xs">▶</span>}
          </a>

          {/* Second Level */}
          {item.children && (
            <div className="absolute left-full top-0 ml-1 hidden group-hover/item:block w-72 bg-white rounded-xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] py-3">
              {item.children.map((child) => (
                <a
                  key={child.label}
                  href={child.href}
                  className="block px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
                >
                  {child.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const services: NavItem[] = [
    {
      label: "Expert Tech Support",
      href: "/expert-tech-support",
      children: [
        {
          label: "Expert Tech Support",
          href: "/expert-tech-support",
        },
        {
          label: "Software Troubleshooting",
          href: "/expert-tech-support/software-troubleshooting",
        },
        {
          label: "Network Setup and Maintenance",
          href: "/expert-tech-support/network-setup-and-maintenance",
        },
        {
          label: "Cybersecurity Assistance",
          href: "/expert-tech-support/cybersecurity-assistance",
        },
        {
          label: "Device and System Optimization",
          href: "/expert-tech-support/device-and-system-optimization",
        },
      ],
    },

    {
      label: "IT Support for Businesses",
      href: "/it-support-for-businesses",
      children: [
        {
          label: "IT Support for Businesses",
          href: "/it-support-for-businesses",
        },

        {
          label: "Managed IT Services",
          href: "/it-support-for-businesses/managed-services",
        },

        {
          label: "Network Design and Setup",
          href: "/it-support-for-businesses/network-design-and-setup",
        },

        {
          label: "Data Backup and Disaster Recovery",
          href: "/it-support-for-businesses/data-backup-and-disaster-recovery",
        },

        {
          label: "Cybersecurity Solutions",
          href: "/it-support-for-businesses/cybersecurity-solutions",
        },
        {
          label: "Cloud Services and Visualization",
          href: "/it-support-for-businesses/cloud-services-and-visualization",
        },
      ],
    },

    {
      label: "Consultancy and Advisory Services",
      href: "/consultancy-and-advisory-services",
    },

    {
      label: "Cybersecurity Services",
      href: "/cybersecurity-services",
    },

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
