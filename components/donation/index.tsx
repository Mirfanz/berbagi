"use client";

import {
  AdjustmentsHorizontalIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Progress } from "@heroui/progress";
import Image from "next/image";
import DonationCard from "./donation-card";

const Donation = () => {
  return (
    <main>
      <div className="flex mb-3 gap-2 bg-primary p-2 sticky top-0 z-10">
        <Button isIconOnly>
          <AdjustmentsHorizontalIcon className="w-6 h-6" />
        </Button>
        <Input
          placeholder="Temukan Donasi Yang Diiginkan"
          variant="flat"
          className=""
          classNames={{
            inputWrapper: "pr-1",
          }}
          endContent={
            <Button color="default" size="sm">
              Search
            </Button>
          }
        />
      </div>
      <section className="px-2 mt-3">
        <div className="flex flex-col gap-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <DonationCard key={"donation-" + i} />
          ))}
          <Button variant="solid" className="mb-3">
            Tampilkan Lainnya
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Donation;
