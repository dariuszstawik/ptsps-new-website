"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import navbarData from "./navbarData";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Logo from "../logo";
import Hamburger from "../hamburger";
import { Facebook, Linkedin } from "lucide-react";
import { Router } from "next/router";

const Navbar = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const pathname = usePathname();

  const router = useRouter;

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const toggleSubmenu = (e) => {
    e.preventDefault();
    setIsSubmenuVisible(!isSubmenuVisible);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setCurrentIndex(index);
  };

  const handleRefresh = () => {
    router.reload();
  };

  return (
    <>
      <div className="bg-white border-b-2 border-b-gray-100 text-xl antialiased fixed w-screen h-28 xl:flex justify-between items-center px-10 xl:px-16  top-0 left-0 z-50 hidden">
        <Logo closeMobileMenu={closeMobileMenu} onCLick={handleRefresh} />
        <div className="pl-8 w-full flex justify-end items-center gap-4 h-28">
          <NavigationMenu>
            <NavigationMenuList>
              <ul
                className={
                  isMobileMenuActive
                    ? "list-none absolute z-40 w-screen top-full left-0 bg-gray-50 py-4 flex flex-col justify-center align-center items-center gap-10 lg:static lg:flex-row"
                    : "list-none flex-col justify-center align-center items-center gap-6 lg:flex-row my-4 hidden lg:flex lg:justify-end ml-4"
                }
              >
                {navbarData.map((nav) => {
                  const isActive = pathname === nav.path;

                  return (
                    nav.isVisible && (
                      <NavigationMenuItem key={nav.id}>
                        {nav.submenu ? (
                          <>
                            <Link href={nav.path}>
                              {" "}
                              <NavigationMenuTrigger className="text-base">
                                {nav.title}
                              </NavigationMenuTrigger>
                            </Link>
                            <NavigationMenuContent>
                              <ul className="grid gap-3 p-6 md:w-[400px] lg:min-w-[900px] lg:grid-cols-[.75fr_1fr]">
                                {nav.submenu.map(
                                  (subnav) =>
                                    subnav.isVisible && (
                                      <li className="relative" key={subnav.id}>
                                        <Link
                                          href={subnav.path}
                                          className={cn(
                                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                          )}
                                        >
                                          <div className="text-sm font-medium leading-none">
                                            {subnav.title}
                                          </div>
                                        </Link>
                                      </li>
                                    )
                                )}
                              </ul>
                            </NavigationMenuContent>
                          </>
                        ) : (
                          <>
                            <Link
                              href={nav.path}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                            >
                              <div className="text-base font-medium leading-none">
                                {nav.title}
                              </div>
                            </Link>
                          </>
                        )}
                      </NavigationMenuItem>
                    )
                  );
                })}
              </ul>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="ml-10 gap-2 hidden 2xl:flex">
          {/* <Facebook className="text-white bg-primaryBlue rounded w-10 h-10 p-2" />
          <Linkedin className="text-white bg-primaryBlue rounded w-10 h-10 p-2" /> */}
          <div className="w-12 h-12 p-2 shrink-0">
            <a
              href="https://www.facebook.com/superwizja.pracy.socjalnej"
              target="_blank"
            >
              <img
                src="/facebook.svg"
                alt="facebook"
                className="w-full h-full"
              />
            </a>
          </div>

          <div className="w-12 h-12 p-2 shrink-0">
            <a
              href="https://www.linkedin.com/company/polskie-towarzystwo-superwizji-pracy-socjalnej/"
              target="_blank"
            >
              <img
                img
                src="/linkedin.svg"
                alt="linkedin"
                className="w-full h-full"
              />
            </a>
          </div>
          <div className="w-12 h-12 p-2 shrink-0">
            <a href="https://www.instagram.com/superwizjaps/" target="_blank">
              <img src="/instagram1.svg" className="w-8" />
            </a>
          </div>
        </div>
        <Hamburger
          hasCloseIcon={isMobileMenuActive ? true : false}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>

      <div className="bg-white border-b-2 border-b-gray-100 text-xl antialiased fixed w-screen h-28 flex justify-between items-center px-10 lg:px-16 py-4  top-0 left-0 z-50 xl:hidden">
        <div className="navbar bg-base-100">
          <div className="navbar-start flex">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost xl:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-96 text-sm"
              >
                {navbarData.map(
                  (item, index) =>
                    item.isVisible && (
                      <li
                        key={index}
                        onClick={(e) => {
                          toggleSubmenu(e);
                          handleMouseEnter(index);
                        }}
                      >
                        <Link href={item.path}>{item.title}</Link>
                        {item.submenu &&
                          isSubmenuVisible &&
                          currentIndex === index && (
                            <ul className="p-2">
                              {item.submenu.map(
                                (subitem, subindex) =>
                                  subitem.isVisible && (
                                    <li key={subindex}>
                                      <Link href={subitem.path}>
                                        {subitem.title}
                                      </Link>
                                    </li>
                                  )
                              )}
                            </ul>
                          )}
                      </li>
                    )
                )}
              </ul>
            </div>
            <div className="mx-6 w-64 shrink-0">
              <Logo />
            </div>
          </div>
          {/* <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navbarData.map((item, index) =>
                item.submenu ? (
                  <li key={index}>
                    <details>
                      <summary>{item.title}</summary>
                      <ul className="p-2">
                        {item.submenu.map((subitem) => (
                          <li>
                            <a>{subitem.title}</a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={index}>
                    <a>{item.title}</a>
                  </li>
                )
              )}
            </ul>
          </div> */}
          {/* <div className="navbar-end">
            <a className="btn">Button</a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
