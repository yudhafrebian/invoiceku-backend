import prisma from "../configs/prisma";
import { CreateProductInput, GetAllProductsInput, UpdateProductInput } from "../types/product.type";
  
  export const getAllProductsService = async ({
    userId,
    page,
    limit,
    search,
    type,
    unit,
    sort,
  }: GetAllProductsInput) => {
    const skip = (page - 1) * limit;
  
    let orderByClause: any = { name: "asc" };
  
    switch (sort) {
      case "name_asc":
        orderByClause = { name: "asc" };
        break;
      case "name_desc":
        orderByClause = { name: "desc" };
        break;
      case "price_asc":
        orderByClause = { price: "asc" };
        break;
      case "price_desc":
        orderByClause = { price: "desc" };
        break;
      case "type_asc":
        orderByClause = { type: "asc" };
        break;
      case "type_desc":
        orderByClause = { type: "desc" };
        break;
      case "unit_asc":
        orderByClause = { unit: "asc" };
        break;
      case "unit_desc":
        orderByClause = { unit: "desc" };
        break;
    }
  
    const whereClause: any = {
      user_id: userId,
      is_deleted: false,
    };
  
    if (search) {
      whereClause.OR = [
        {
          name: { contains: search, mode: "insensitive" },
        },
        {
          description: { contains: search, mode: "insensitive" },
        },
      ];
    }
  
    if (type) whereClause.type = type;
    if (unit) whereClause.unit = unit;
  
    const [products, total] = await Promise.all([
      prisma.products_services.findMany({
        where: whereClause,
        skip,
        take: limit,
        orderBy: orderByClause,
      }),
      prisma.products_services.count({ where: whereClause }),
    ]);
  
    return {
      products,
      pagination: {
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
      },
    };
  };
  
  export const getSingleProductService = async (id: number) => {
    const product = await prisma.products_services.findUnique({
      where: {
        id,
      },
    });
  
    return product;
  };
  
  export const createProductService = async (input: CreateProductInput) => {
    const newProduct = await prisma.products_services.create({
      data: input,
    });
    return newProduct;
  };

  export const updateProductService = async (input: UpdateProductInput) => {
    const updatedProduct = await prisma.products_services.update({
      where: { id: input.id },
      data: {
        name: input.name,
        price: input.price,
        type: input.type,
        unit: input.unit,
        description: input.description,
      },
    });
  
    return updatedProduct;
  };