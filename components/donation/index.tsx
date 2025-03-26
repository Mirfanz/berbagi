"use client";

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import DonationCard from "./donation-card";
import { useQuery } from "@tanstack/react-query";
import { Donation as DonationType } from "@/types";
import axios from "axios";

const Donation = () => {
  const { data } = useQuery({
    queryKey: ["donations"],
    queryFn: async (): Promise<DonationType[]> => {
      return await axios.get("/api/donation").then((res) => res.data.data);
    },
  });
  return (
    <main>
      <div className="flex mb-3 gap-2 bg-primary p-2 sticky top-0 z-10">
        <Button isIconOnly>
          <AdjustmentsHorizontalIcon className="w-6 h-6" />
        </Button>
        <Input
          placeholder="Temukan Donasi Yang Diiginkan"
          variant="flat"
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
          {data?.map((item) => (
            <DonationCard data={item} key={"donation-" + item.id} />
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
