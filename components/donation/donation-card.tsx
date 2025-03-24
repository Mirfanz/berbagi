"use client";

import { Progress } from "@heroui/progress";
import Image from "next/image";
import React from "react";

type Props = {};

const DonationCard = (props: Props) => {
  return (
    <div className="flex gap-2">
      <div className="bg-gray-100 h-24 aspect-video">
        <Image
          src={"/134.webp"}
          width={500}
          height={200}
          alt="donasi"
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xs line-clamp-2 mb-auto font-medium">
          Amal Jariyah Bantu Wujudkan Sumber Mata Air
        </h3>
        <Progress value={27} size="sm" className="mb-2" />
        <div className="flex justify-between mb-1">
          <small className="text-xs">Terkumpul</small>
          <small className="text-xs">Sisa Hari</small>
        </div>
        <div className="flex justify-between">
          <h5 className="text-sm font-semibold">Rp 435.000</h5>
          <small className="text-sm font-medium">20</small>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
