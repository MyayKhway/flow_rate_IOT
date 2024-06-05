# Water Management System

###### Khant Nyi Lynn (66011541) 30th May 2024

This system, written in Typescript, is for prototyping the front-end side for water management system, which is a system for receiving data from multiple sensors and display them on  a dashboard. This system implements the dashboard as well as a relational database for keeping sample data.

## Tech Stack

The UI is mainly React, with Nextjs framework supporting the routing and server-side rendering. Tailwind for style management, and postgres for backend SQL servers. The required dependencies and packages with their versions can be seen at *package.json*. Almost everything is written in Typescript

``` json 
"dependencies": {
    "@headlessui/react": "^1.7.19",
    "@headlessui/tailwindcss": "^0.2.0",
    "@heroicons/react": "^2.1.3",
    "@internationalized/date": "^3.5.3",
    "@prisma/client": "^5.14.0",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-slot": "^1.0.2",
    "@react-aria/datepicker": "^3.10.0",
    "@react-stately/datepicker": "^3.9.3",
    "@remixicon/react": "^4.2.0",
    "@tremor/react": "^3.16.2",
    "@vis.gl/react-google-maps": "^0.9.0",
    "chart.js": "^4.4.2",
    "date-fns": "^3.6.0",
    "dotenv": "^16.4.5",
    "next": "14.2.3",
    "pg": "^8.11.5",
    "prisma": "^5.14.0",
    "react": "^18",
    "react-chartjs-2": "^5.2.0",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18",
    "tailwind-variants": "^0.2.1",
    "use-places-autocomplete": "^4.0.1",
    "uuid": "^9.0.1"
  },
  "devDependencies": {
    "@tailwindcss/forms": "^0.5.7",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/uuid": "^9.0.8",
    "eslint": "^8",
    "eslint-config-next": "14.2.3",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
    }
    ```


## Project Structure

Since Nextjs version 14 is being used, the recommended folder structure for organizing different routes are used. the tree of the project folder at level 2 depth can be seen below.

```bash
.
├── app
│   ├── details
│   ├── globals.css
│   ├── icon.ico
│   ├── layout.tsx
│   ├── lib
│   ├── livefeed
│   ├── page.tsx
│   └── ui
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── docker-compose.yml
├── prisma
│   ├── migrations
│   ├── schema.prisma
│   └── seed.ts
├── public
│   ├── cropped-kmitl-logoThai-300x300.png
│   ├── next.svg
│   ├── placeholder-logo.png
│   └── vercel.svg
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

The details folder and live feed folder represents two routes to details page and live feed page respectively; folder structure for routing. They contain page.tsx files for the page template. If no file is provided here, their page will directly inherit from page.tsx under the app directory.  

*global.css* has configuration for global css properties. Meanwhile. icon.ico is used for icon at the browser bar. layout.tsx represents layout for the whole website. It will be inherited by other routes if the routes do not define their own layout; this is true in this project.

**lib** directory includes important functionalities the project will need. They include functions for fetching data on the server side, type definitions, and utilities for tailwind css needed for some components taken from [tremor library.](https://tremor.so). It also has a file for exporting dummy data for testing purposes in the earlier stages of development but deprecated now. 

*next.config.mjs* and *postcss.config.mjs* are used for configuring the Nextjs but it is not used here. *tailwind.config.ts*, however, is of significant importance because everything tailwind class that are used in the project is defined here. It includes animations, colors, themes, and many more. *tsconfig.json* is for Typescript compiler.

**public** folder is self-explanatory, it is for public files, and assets. This project only has pictures and one short video(which will not be included in the git repository.)

### Prisma

The importance of this folder calls for a separate topic. Since the database is deployed as a Postgresql database on localhost, a Object-Relational-Mapping service like Prisma is needed so that we can hide the database implementation as well as make the queries type-safe. More about Prisma can be read at [Prisma documentations](https://www.prisma.io/docs). The general way Prisma works can be briefly understood from the following picture.

![Prisma Docs](https://github.com/MyayKhway/flow_rate_IOT/blob/main/pictures/PrismaPrinciple.png)

Prisma can be used to fetch data with REST API routes and expose that API to the front end but in this project the data fetching is done directly in Nextjs for prototyping purposes.

There are two ways to setup Prisma, the schema of the database can be pushed into a existing database according to the *schema.prisma* file in the folder with the command 
```bash
npx prisma db push
```
 or the existing database relational database can write its model by the command 
```bash
nps prisma db pull
```
The steps to setup so that it can be tested on localhost will be mentioned later.

There is also a seed.ts file in this directory. That is used for seeding the database; i.e, if the database has not been populated with SQL commands.

## Setups to run on localhost

### Setting up the environment
#### Install nodejs 

Install nodejs on Linux with Package manager as follows.
```bash
# installs fnm (Fast Node Manager)
curl -fsSL https://fnm.vercel.app/install | bash

# download and install Node.js
fnm use --install-if-missing 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.14.0`

# verifies the right NPM version is in the environment
npm -v # should print `10.7.0`
```

Install all the dependencies with npm i.
```bash
npm i
```
Windows and Mac install instructions can be seen at [Nodejs website](https://nodejs.org/en/download/package-manager).

### Install Docker Engine 

For Linux, follow the instructions on [docker official website](https://docs.docker.com/desktop/install/ubuntu/).

Set up the environment variables. use `.env.development` for development.

```env.development
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY= Google Map API key
NEXT_PUBLIC_MAP_ID= Map ID can be accessed from Google Console


DATABASE_URL="postgresql://postgres:123@localhost:5434/water-management?schema=public"
```
DATABASE_URL must be in accordance with the `docker-compose.yml`.

After that, run 
```bash
docker compose dev-db -d
```

After that, migrate the database, it automatically seeds the database.

```bash
npx prisma migrate dev
```

To check if the database is seeded, run

```bash
npx prisma studio
```
This will open a graphical interface for managing the database on port 5555.

If the database is not found to be seeded, seed it with the command.
```bash
npx prisma db seed
```

### Seeding

There is two ways to go about seeding in the database.
1. **Using the Prisma ORM**
2. **Populate the SQL relations with SQL itself**
***PLEASE USE THIS METHOD ONLY IF ALL ELSE FAIL***

#### Using the Prisma ORM

Before reading the following code and steps, it is suggested to visit the  [official website](https://www.prisma.io/docs/orm/prisma-migrate/getting-started).

After setting up the *schema.prisma* with either `npx prisma db push` or `npx prisma db pull`, you will need to seed the data. This can be easily done by running a seed script kept in the prisma directory. However, to run `npx prisma seed`, it needs to be configured in package.json like below.

Instead of running database pull or push, `npx prisma db migrate` [migrate commands](https://www.prisma.io/docs/orm/prisma-migrate/getting-started) can be run first, this will implicitly run the seed command in package.json and seed the database as well.

Firstly, the relations are established as models on prisma.schema in prisma folder at root. One to many relationships can be represented as follows.
```schema
generator client {
  provider = "prisma-client-js"
  previewFeatures = ["relationJoins"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  relationMode = "foreignKeys"
}

model Flow {
  stationFrom   Station     @relation(fields: [stationId], references: [id])
  stationId     String      @db.VarChar(50)
  volume        Float
  time          DateTime   @db.Timestamptz(6)
  
  @@unique([stationId, time])
}

model Station {
  id        String      @id @db.VarChar(50)
  lat       Float
  lng       Float
  name      String     @db.VarChar(255)
  volumes   Flow[]
}
```

From this the ORM will deduce the schema of the relations(tables) as follows. The schemas can be checked by changing into postgres user, typing in psql command and \\dt {table}.
```psql
\d+ "Flow"
```
gives the following.
![[Pasted image 20240601180350.png]]
```psql
\d+ "Station"
```
gives the following.
![[Pasted image 20240601180443.png]]
After running the `npx prisma migrate dev --name init` , Flow and Station tables will be created in the database. After that, the tables will be populated with the SQL statements.


```json
{
  "name": "flow-rate-iot",
  "version": "0.1.0",
  "prisma": {
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
  },
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```

The seed.ts is written with Prisma, however, due to the nature of data being difficult to simulate with ORM supported syntax. The raw SQL was executed by the ORM. This seed.ts file will be run whenever `npx prisma migrate` is run therefore whenever the project needs to be started in a new environment, the database can be readily migrated.

```typescript
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
```

Since the raw SQL is executed anyway, the second method is redundant.

### Populate the SQL relations with SQL itself 

Firstly, the relations are established as models on prisma.schema. One to many relationships can be represented as follows.
```schema
generator client {
  provider = "prisma-client-js"
  previewFeatures = ["relationJoins"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  relationMode = "foreignKeys"
}

model Flow {
  stationFrom   Station     @relation(fields: [stationId], references: [id])
  stationId     String      @db.VarChar(50)
  volume        Float
  time          DateTime   @db.Timestamptz(6)
  
  @@unique([stationId, time])
}

model Station {
  id        String      @id @db.VarChar(50)
  lat       Float
  lng       Float
  name      String     @db.VarChar(255)
  volumes   Flow[]
}
```

From this the ORM will deduce the schema of the relations(tables) as follows. The schemas can be checked by changing into postgres user, typing in psql command and \\dt {table}.
```psql
\d+ "Flow"
```
gives the following.
![[Pasted image 20240601180350.png]]
```psql
\d+ "Station"
```
gives the following.
![[Pasted image 20240601180443.png]]
After running the `npx prisma migrate dev --name init` , Flow and Station tables will be created in the database. After that, the tables will be populated with the SQL statements.

Change the user to the database user. (on Linux). Windows equivalent way of switching can be read [here](https://superuser.com/questions/1371922/switch-user-in-powershell-like-sudo-su-in-unix-linux) 

```bash
sudo -u {databaseuser} -i
```

After that navigate to the database created previously in Prisma schema.

```bash
psql water-management
```
Whether the tables are there can be checked by typing `\d` it will list all the relations(tables). Then, the above SQLs can be executed for each station in this json.

```json
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
}
```

```SQL
INSERT INTO "Station" ("id", "lat", "lng","name") VALUES (${station.id}, ${station.lat}, ${station.lng}, ${station.name}) ON CONFLICT DO NOTHING;

INSERT INTO "Flow" SELECT ${station.id} as stationId, random()*1000 as volume, time FROM generate_series('2024-01-01 00:00 +07:00'::timestamptz, '2024-05-14 00:00 +07:00'::timestamptz, '15 minutes'::interval) as t(time) ON CONFLICT DO NOTHING;
```
Programatically generate the SQLs first.

After database seeding, run 
```bash
npm run dev
```
and the website can be visited on http://localhost:3000.

## UI components organization

### Navbar

This component is the navbar common across all pages on the website. This is render on the client side. It uses @headlessui library and usePathname API from Nextjs to know which path the user is currently at so that it can change the style accordingly. The style changing is done by tertiary statements. (clsx is used in some components.)

### Dashboard

The Dashboard is implemented with five React components. Dashboard component take in MapComponent and StationList, meanwhile MapComponent is made up of *react-google-maps* by vis.gl, which is a Google-sponsored project and the StationList takes in Station components and render them dynamically according to the data fetched by page.tsx in *app/details* router. 
The components name and their roles can be viewed as so.

![dashboard](https://github.com/MyayKhway/flow_rate_IOT/blob/main/pictures/water-management-dashboard-edited.png)

### Details

The details page displays the control panel for searching data and displaying them as a line chart. The changes made in the query(date range and selected stations) are reflected in the URL.

![details](https://github.com/MyayKhway/flow_rate_IOT/blob/main/pictures/water-management-details-edited.png)
It should be noted that the DateRangePicker, MultiSelect and LineChart, they are all from tremor raw components which can be included from [tremor raw](https://raw.tremor.so/docs/getting-started/installation).

### Live Feed

This page displays live video feed from the sensors. Since a video server or the cameras are not installed yet, a short mp4 file with the name `Background1.mp4` needs to be prepared in the `/public` folder. 

The clickable icon can be clicked to add more VideoPlayer components to the VideoWrapper component.

![livefeed](https://github.com/MyayKhway/flow_rate_IOT/blob/main/pictures/water-management-livefeed-edited.png)


## Further Development 
There is always room for improvement. This projects also needs some new inputs for progress. The immediate improvements can be achieved from
- the center of the map being found dynamically from the stations data gained from *fetchStations* function.
- using useContext more instead of props drilling to propagate the server side data to the children components. (useServerSideProps by Nextjs is recommended.)
