import prisma from "@/db/prisma";

export const getData = async () => {
   await prisma?.service.findMany();
   return getData;
};
