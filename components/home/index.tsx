"use client";

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import clsx from "clsx";
import {
  AcademicCapIcon,
  BanknotesIcon,
  GifIcon,
  GiftIcon,
  GlobeAltIcon,
  HomeModernIcon,
  SquaresPlusIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { Progress } from "@heroui/progress";
import DonationCard from "../donation/donation-card";
import { useQuery } from "@tanstack/react-query";
import { Donation } from "@/types";
import axios from "axios";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["donations"],
    queryFn: async (): Promise<Donation[]> => {
      return await axios.get("/api/donation").then((res) => res.data.data);
    },
  });

  const menu = [
    { icon: BanknotesIcon, label: "Zakat" },
    { icon: GiftIcon, label: "Infaq" },
    { icon: HomeModernIcon, label: "Project" },
    { icon: AcademicCapIcon, label: "Pendidikan" },
    { icon: UserGroupIcon, label: "Sosial" },
    { icon: GlobeAltIcon, label: "Bencana" },
    { icon: GiftIcon, label: "Hewan" },
    { icon: SquaresPlusIcon, label: "Lainnya" },
  ];
  return (
    <main className="flex flex-col">
      <div className="overflow-x-hidden overflow-y-visible relative">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            console.log("swiper", swiper);
          }}
          autoplay={{ delay: 3000 }}
          className="!overflow-visible"
        >
          {[
            "https://cnt-id-rn.imgix.net/web/image/cnt_cf.banner/22/image/22.pngupscale=true&auto=compress,format&parse=1741635904000",
            "https://cnt-id-rn.imgix.net/web/image/cnt_cf.banner/24/image/24.pngupscale=true&auto=compress,format&parse=1741635825000",
            "https://cnt-id-rn.imgix.net/web/image/cnt_cf.banner/23/image/23.pngupscale=true&auto=compress,format&parse=1742327908000",
            "https://cnt-id-rn.imgix.net/web/image/cnt_cf.banner/25/image/25.pngupscale=true&auto=compress,format&parse=1742328146000",
          ].map((i, id) => (
            <SwiperSlide key={"home-carousel-" + id} className="">
              <img
                alt="Foto Banner"
                src={i}
                className="aspect-video object-cover object-top"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <section className="px-2 my-4">
        <Card>
          <CardBody className="grid grid-cols-4">
            {menu.map((item) => (
              <div
                key={"menu-" + item.label}
                className="flex flex-col items-center justify-center h-20"
              >
                <item.icon className="w-8 h-8 text-secondary mb-1" />
                <small className="text-xs">{item.label}</small>
              </div>
            ))}
          </CardBody>
        </Card>
      </section>
      <section className="px-2 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h1 className="ms-1 text-lg font-semibold">Diutamakan</h1>
          <Button size="sm" variant="light" color="default">
            Lihat Semua
          </Button>
        </div>
        <div className="flex overflow-x-scroll overflow-y-visible gap-3 pb-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={"satu-" + i} className="min-w-72">
              <Image src={"/134.webp"} width={500} height={200} alt="donasi" />
              <CardBody>
                <h3 className="text-sm font-medium line-clamp-2 mb-3">
                  Mari Bersatu Menjadi Pahlawan Kemanusiaan
                </h3>
                <Progress value={36} size="sm" className="mb-2" />
                <small className="text-xs mb-1">Terkumpul</small>
                <h5 className="text-sm font-semibold">Rp 2.771.257</h5>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
      <section className="px-2 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h1 className="ms-1 text-lg font-semibold">Donasi Terbaru</h1>
          <Button size="sm" variant="light" color="default">
            Lihat Semua
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          {data?.map((item) => (
            <DonationCard data={item} key={"donation-latest-" + item.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
