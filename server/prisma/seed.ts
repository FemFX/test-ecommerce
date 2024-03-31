import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const category1 = await prisma.category.create({
    data: {
      name: 'Category 1',
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: 'Category 2',
    },
  });

  const attribute1 = await prisma.attribute.create({
    data: {
      name: 'Color',
      value: 'Red',
    },
  });

  const attribute2 = await prisma.attribute.create({
    data: {
      name: 'Size',
      value: 'Small',
    },
  });

  const attribute3 = await prisma.attribute.create({
    data: {
      name: 'Color',
      value: 'Blue',
    },
  });

  const attribute4 = await prisma.attribute.create({
    data: {
      name: 'Size',
      value: 'Large',
    },
  });

  const productsData = [
    {
      name: 'Product 1',
      imageId: '1',
      categoryId: category1.id,
      attributes: { connect: [{ id: attribute1.id }, { id: attribute2.id }] },
    },
    {
      name: 'Product 2',
      imageId: '1',
      categoryId: category2.id,
      attributes: { connect: [{ id: attribute3.id }, { id: attribute4.id }] },
    },
  ];

  for (const productData of productsData) {
    await prisma.product.create({
      data: productData,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
