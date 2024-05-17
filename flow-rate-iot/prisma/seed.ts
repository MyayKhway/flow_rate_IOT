import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// should have just used createMany by Prisma
async function main() {
    const stations = [
        {
            id: "0000",
            lat: 13.730580,
            lng: 100.769327,
            name: "Station0",
        },
        {
            id: "0001",
            lat: 13.729734,
            lng: 100.769034,
            name: "Station1",
        },
        {
            id: "0002",
            lat: 13.730900,
            lng: 100.769317,
            name: "Station 2",
        },
        {
            id: "0003",
            lat: 13.729000,
            lng: 100.769202,
            name: "Station 3",
        },
        {
            id: "0004",
            lat: 13.731377,
            lng: 100.769254,
            name: "Station 4",
        },
        {
            id: "0005",
            lat: 13.727821,
            lng: 100.769229,
            name: "Station 5",
        },
        {
            id: "0006",
            lat: 13.7274,
            lng: 100.769229,
            name: "Station 6",
        },
    ];
    for (const station of stations) {
        await prisma.$executeRaw`INSERT INTO "Station" ("id", "lat", "lng","name") VALUES (${station.id}, ${station.lat}, ${station.lng}, ${station.name}) ON CONFLICT DO NOTHING;`
        await prisma.$executeRaw`INSERT INTO "Flow" SELECT ${station.id} as stationId, random()*1000 as volume, time FROM generate_series('2024-01-01 00:00 +07:00'::timestamptz, '2024-05-14 00:00 +07:00'::timestamptz, '15 minutes'::interval) as t(time) ON CONFLICT DO NOTHING;`
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
