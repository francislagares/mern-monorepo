import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  /* Load all your entities here 
      
  await prisma.user.deleteMany({});
  await prisma.user.createMany({
    data: users,
  });
  
  */
}

main()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
