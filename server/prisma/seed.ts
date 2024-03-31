import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.attribute.deleteMany({});
  const category1 = await prisma.category.create({
    data: {
      name: 'Laptops',
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: 'Headphones',
    },
  });

  const productsData = [
    {
      name: 'Laptop 1',
      imageId:
        'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16lN4?ver=46fe&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true',
      categoryId: category1.id,
      attributes: {
        create: [
          {
            name: 'ram',
            value: '8gb',
            categories: { connect: { id: category1.id } },
          },
          {
            name: 'freq',
            value: '60hz',
            categories: { connect: { id: category1.id } },
          },
        ],
      },
    },
    {
      name: 'Laptop 2',
      imageId:
        'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16lN4?ver=46fe&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true',
      categoryId: category1.id,
      attributes: {
        create: [
          {
            name: 'ram',
            value: '16gb',
            categories: { connect: { id: category1.id } },
          },
          {
            name: 'freq',
            value: '144hz',
            categories: { connect: { id: category1.id } },
          },
        ],
      },
    },
    {
      name: 'Headphones 1',
      imageId:
        'https://m.media-amazon.com/images/I/41tp0JPPlmL._AC_UF894,1000_QL80_.jpg',
      categoryId: category2.id,
      attributes: {
        create: [
          {
            name: 'wireless',
            value: 'yes',
            categories: { connect: { id: category2.id } },
          },
          {
            name: 'brand',
            value: 'sony',
            categories: { connect: { id: category2.id } },
          },
        ],
      },
    },
    {
      name: 'Headphones 2',
      imageId:
        'https://m.media-amazon.com/images/I/41tp0JPPlmL._AC_UF894,1000_QL80_.jpg',
      categoryId: category2.id,
      attributes: {
        create: [
          {
            name: 'wireless',
            value: 'no',
            categories: { connect: { id: category2.id } },
          },
          {
            name: 'brand',
            value: 'apple',
            categories: { connect: { id: category2.id } },
          },
        ],
      },
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
