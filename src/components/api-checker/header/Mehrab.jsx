import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconUserFilled } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandGmail } from "@tabler/icons-react";
import Image from "next/image";
import mehrab from "@/../public/images/mehrab.png";

export default function Mehrab() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="capitalize">
            <IconUserFilled />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
        >
          <SheetHeader>
            <SheetTitle className={"capitalize"}>
              mohammad mehrab pourzakaria
            </SheetTitle>
          </SheetHeader>
          <div className="no-scrollbar overflow-y-auto px-4 flex flex-col items-center">
            <figure>
              <Image
                src={mehrab}
                width={100}
                height={100}
                alt="mehrabPourzakaira"
              />
            </figure>
            <p className="mt-5 text-center">
              I'm Mehrab Pourzakaria, a creative developer passionate about
              turning ideas into engaging digital experiences. Starting in New
              Jersey, my love for tech and design grew from building simple
              sites to developing complex applications.
            </p>
            <div className="flex gap-2.5 mt-5">
              <a
                href=""
                target="_blank"
                className="w-10 h-10 rounded-xl bg-[#0B65C3] flex justify-center items-center"
              >
                <IconBrandLinkedin />
              </a>
              <a
                href=""
                target="_blank"
                className="w-10 h-10 rounded-xl bg-[#F03DC3] flex justify-center items-center"
              >
                <IconBrandInstagram />
              </a>
              <a
                href=""
                target="_blank"
                className="w-10 h-10 rounded-xl bg-[#181616] flex justify-center items-center"
              >
                <IconBrandGithub />
              </a>
              <a
                href=""
                target="_blank"
                className="w-10 h-10 rounded-xl bg-[#EA4335] flex justify-center items-center"
              >
                <IconBrandGmail />
              </a>
            </div>
          </div>
          <SheetFooter>
            <Button
              type="submit"
              asChild
              variant="link"
              className={"capitalize text-primary-foreground bg-foreground"}
            >
              <a
                href="https://pourzakaria.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                my website
              </a>
            </Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
