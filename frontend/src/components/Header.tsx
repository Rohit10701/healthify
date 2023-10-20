"use client";

import { FC, useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";

interface HeaderProps {}

const Header = () => {
  const { data: session } = useSession();
  {
    /* save user to db */
  }
  useEffect(() => {
    {
      if (session) {
        const userInfo = {
          username: session?.user?.name,
          email: session?.user?.email,
          caretaker: "",
        };

        axios
          .post("http://localhost:5000/users", userInfo)
          .then((response) => {
            // Success!
            console.log(response);
          })
          .catch((error) => {
            // Handle error
            console.log(error);
          });
      }
    }
  }, [session]);

  {
    session ?
    (toast({
      title: "logged in",
      description: "welcome back to healthify"
    })) :
    (toast({
      title: "logged out",
      description: "Thanks for using our service"
    }))
  }
  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container className="h-full flex items-center justify-between">
        {/* Logo */}
        <Logo />

        <div className="flex flex-row items-center justify-center gap-x-6">
          {/* Login */}
          {!session && (
            <div onClick={()=>signIn()} className="cursor-pointer">
              <p>Login/Register</p>
            </div>
          )}

          {/* profile photo */}
          {session && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  src={session?.user?.image as string}
                  alt="user image"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={`/medicine`}>
                    Medicine Details
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={`/settings`}>
                    settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {/* logout */}
                  {session && (
                    <div onClick={()=>signOut()} className="cursor-pointer">
                      <p>Logout</p>
                    </div>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
