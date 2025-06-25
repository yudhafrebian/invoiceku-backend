import { PaymentMethod } from "../../prisma/generated/client";
import prisma from "../configs/prisma";
import { CreateClientInput, GetAllClientParams, UpdateClientInput } from "../types/client.type";
  
  export const createClientService = async ({
    userId,
    name,
    email,
    phone,
    address,
    payment_ref,
  }: CreateClientInput) => {
    const rawPhone = String(phone);
    const normalizedPhone = rawPhone.startsWith("62")
      ? rawPhone
      : `62${rawPhone}`;
  
    const newClient = await prisma.clients.create({
      data: {
        user_id: userId,
        name,
        email,
        phone: normalizedPhone,
        address,
        payment_ref: payment_ref as PaymentMethod,
      },
    });
  
    return newClient;
  };
  

export const getAllClientService = async ({
  userId,
  page,
  limit,
  search,
  payment,
  sort,
}: GetAllClientParams) => {
  const skip = (page - 1) * limit;

  let orderByClause: any = { name: "asc" };

  if (sort === "name_asc") {
    orderByClause = { name: "asc" };
  } else if (sort === "name_desc") {
    orderByClause = { name: "desc" };
  } else if (sort === "email_asc") {
    orderByClause = { email: "asc" };
  } else if (sort === "email_desc") {
    orderByClause = { email: "desc" };
  } else if (sort === "phone_asc") {
    orderByClause = { phone: "asc" };
  } else if (sort === "phone_desc") {
    orderByClause = { phone: "desc" };
  } else if (sort === "address_asc") {
    orderByClause = { address: "asc" };
  } else if (sort === "address_desc") {
    orderByClause = { address: "desc" };
  }

  const whereClause: any = {
    user_id: userId,
    is_deleted: false,
  };

  if (search) {
    whereClause.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
      { phone: { contains: search, mode: "insensitive" } },
      { address: { contains: search, mode: "insensitive" } },
    ];
  }

  if (payment) {
    whereClause.payment_ref = payment;
  }

  const [clients, total] = await Promise.all([
    prisma.clients.findMany({
      where: whereClause,
      skip,
      take: limit,
      orderBy: orderByClause,
    }),
    prisma.clients.count({ where: whereClause }),
  ]);

  return {
    clients,
    pagination: {
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    },
  };
};

export const getSingleClientService = async (clientId: number) => {
    const client = await prisma.clients.findUnique({
      where: {
        id: clientId,
      },
    });
  
    if (!client || client.is_deleted) {
      throw new Error("Client not found");
    }
  
    return client;
  };
  
  export const updateClientService = async ({
    clientId,
    name,
    email,
    phone,
    address,
  }: UpdateClientInput) => {
    const rawPhone = String(phone);
    const normalizedPhone = rawPhone.startsWith("62")
      ? rawPhone
      : `62${rawPhone}`;
  
    const existingClient = await prisma.clients.findUnique({
      where: { id: clientId },
    });
  
    if (!existingClient || existingClient.is_deleted) {
      throw new Error("Client not found");
    }
  
    const updatedClient = await prisma.clients.update({
      where: { id: clientId },
      data: {
        name,
        email,
        phone: normalizedPhone,
        address,
      },
    });
  
    return updatedClient;
  };

  export const deleteClientService = async (clientId: number) => {
    const client = await prisma.clients.findUnique({
      where: { id: clientId },
    });
  
    if (!client || client.is_deleted) {
      throw new Error("Client not found or already deleted");
    }
  
    const deletedClient = await prisma.clients.update({
      where: { id: clientId },
      data: {
        is_deleted: true,
      },
    });
  
    return deletedClient;
  };
  