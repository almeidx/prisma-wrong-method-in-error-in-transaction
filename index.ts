import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["error", "info", "query", "warn"],
});

await prisma.$transaction([
  prisma.model1.deleteMany({}),
  prisma.model2.create({
    data: {
      field2: "value",
      // @ts-expect-error: Showcase
      faultyField: "value",
    },
  }),
  prisma.model1.create({
    data: {
      field: "value",
    },
  }),
]);
