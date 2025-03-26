-- CreateTable
CREATE TABLE "Donations" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "active" BOOLEAN NOT NULL,
    "deadline" TIMESTAMP(3),
    "target" INTEGER NOT NULL,
    "collected" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Donations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonationsHistory" (
    "id" SERIAL NOT NULL,
    "donationId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT,
    "hidename" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DonationsHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DonationsHistory" ADD CONSTRAINT "DonationsHistory_donationId_fkey" FOREIGN KEY ("donationId") REFERENCES "Donations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
