-- CreateTable
CREATE TABLE "Flow" (
    "stationId" VARCHAR(50) NOT NULL,
    "volume" DOUBLE PRECISION NOT NULL,
    "time" TIMESTAMPTZ(6) NOT NULL
);

-- CreateTable
CREATE TABLE "Station" (
    "id" VARCHAR(50) NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Flow_stationId_time_key" ON "Flow"("stationId", "time");

-- AddForeignKey
ALTER TABLE "Flow" ADD CONSTRAINT "Flow_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
