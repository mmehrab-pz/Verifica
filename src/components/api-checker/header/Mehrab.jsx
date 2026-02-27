import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
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
import { IconWorldWww } from "@tabler/icons-react";
import Image from "next/image";
import mehrab from "@/../public/images/mehrab.png";
import Link from "next/link";

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
            <SheetTitle className={"capitalize text-center"}>
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
              <Button asChild>
                <Link href="https://pourzakaria.com/" target="_blank">
                  <IconBrandLinkedin size={48}/>
                </Link>
              </Button>
              <Button asChild>
                <Link href="https://www.instagram.com/mehrab.poorzakaria_web/" target="_blank">
                  <IconBrandInstagram size={48}/>
                </Link>
              </Button>
              <Button asChild>
                <Link href="https://github.com/mmehrab-pz" target="_blank">
                  <IconBrandGithub size={48}/>
                </Link>
              </Button>
              <Button asChild>
                <Link href="https://mail.google.com/mail/u/0/?fs=1&to=mmehrab.pk@gmail.com&tf=cm" target="_blank">
                  <IconBrandGmail size={48}/>
                </Link>
              </Button>
              <Button asChild>
                <Link href="https://pourzakaria.com/" target="_blank">
                  <IconWorldWww size={48}/>
                </Link>
              </Button>
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
