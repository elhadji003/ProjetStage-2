"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../public/images/logos/logo-app.png";
import Link from "next/link";
import { FiHeart, FiMenu, FiShoppingBag, FiUser, FiX } from "react-icons/fi";
import {
  Container,
  Left,
  Items,
  Right,
  MenuOpen,
  MobileMenu,
  Input,
  InputMobile,
} from "../../styles/NavbarStyle";
import useScroll from "@/hooks/useScroll";
import RightSidebar from "./RightSidebar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setSidebarOpen(open);
  };

  const isScroll = useScroll();

  return (
    <Container isScroll={isScroll} className="py-16">
      <Left>
        <Link href="/home">
          <Image src={Logo} alt="logo" width={120} height={40} />
        </Link>
        <Items>
          <li>
            <Link href="/mugs">Mugs Category</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </Items>
      </Left>

      <Right>
        <Input placeholder="Rechercher un produit ..."></Input>
        <Link href="/favorites">
          <FiHeart />
        </Link>
        <span>
          <button onClick={toggleDrawer(true)} className="focus:outline-none">
            <FiShoppingBag />
          </button>
          <RightSidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />
        </span>
        <Link href="/profile">
          <FiUser />
        </Link>

        <MenuOpen onClick={() => setOpen(!open)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </MenuOpen>
      </Right>

      {open && (
        <MobileMenu open={open}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/mugs">Mugs Category</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <InputMobile placeholder="Rechercher un produit ..."></InputMobile>
          </li>
        </MobileMenu>
      )}
    </Container>
  );
}
