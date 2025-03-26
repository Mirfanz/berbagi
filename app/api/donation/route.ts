import prisma from "@/lib/prisma";
import { Donation } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const result = await prisma.donations.findMany({
      orderBy: { createdAt: "desc" },
      where: {
        active: true,
      },
    });
    console.log("result", result);
    const data: Donation[] = [];
    result.forEach((item) => {
      data.push({
        id: item.id,
        amount: {
          target: item.target,
          collected: item.collected,
          sended: 0,
        },
        createdAt: item.createdAt.toISOString(),
        updatedAt: item.updatedAt.toISOString(),
        active: item.active,
        deadline: item.deadline?.toISOString() || null,
        title: item.title,
        description: item.description,
        imageUrl: item.imageUrl,
      });
    });
    return NextResponse.json({
      message: "GET /api/donation",
      data,
      total: data.length,
    });
  } catch (error) {
    return NextResponse.json({ message: "GET /api/donation" }, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
}
