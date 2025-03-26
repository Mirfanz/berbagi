"use client";

import { countDateLess, formatCurrency } from "@/lib/utils";
import { Donation } from "@/types";
import { Progress } from "@heroui/progress";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  data: Donation;
};

const DonationCard = ({ data }: Props) => {
  return (
    <Link href={"/donation/tes"} className="flex gap-2">
      <div className="bg-gray-100 rounded-md h-24 aspect-video">
        <Image
          src={data.imageUrl}
          width={500}
          height={200}
          alt="donasi"
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col w-full">
        <h3 className="text-xs line-clamp-2 mb-auto font-medium">
          {data.title}
        </h3>
        <Progress
          value={(data.amount.collected / data.amount.target) * 100}
          size="sm"
          className="mb-2"
        />
        <div className="flex justify-between mb-1">
          <small className="text-xs">Terkumpul</small>
          <small className="text-xs">Sisa Hari</small>
        </div>
        <div className="flex justify-between">
          <h5 className="text-sm font-semibold">
            {formatCurrency(data.amount.collected)}
          </h5>
          <small className="text-sm font-medium">
            {data.deadline ? countDateLess(new Date(data.deadline)) : "-"}
          </small>
        </div>
      </div>
    </Link>
  );
};

export default DonationCard;
