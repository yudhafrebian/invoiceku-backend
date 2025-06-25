"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClientService = exports.updateClientService = exports.getSingleClientService = exports.getAllClientService = exports.createClientService = void 0;
const prisma_1 = __importDefault(require("../configs/prisma"));
const createClientService = async ({ userId, name, email, phone, address, payment_ref, }) => {
    const rawPhone = String(phone);
    const normalizedPhone = rawPhone.startsWith("62")
        ? rawPhone
        : `62${rawPhone}`;
    const newClient = await prisma_1.default.clients.create({
        data: {
            user_id: userId,
            name,
            email,
            phone: normalizedPhone,
            address,
            payment_ref: payment_ref,
        },
    });
    return newClient;
};
exports.createClientService = createClientService;
const getAllClientService = async ({ userId, page, limit, search, payment, sort, }) => {
    const skip = (page - 1) * limit;
    let orderByClause = { name: "asc" };
    if (sort === "name_asc") {
        orderByClause = { name: "asc" };
    }
    else if (sort === "name_desc") {
        orderByClause = { name: "desc" };
    }
    else if (sort === "email_asc") {
        orderByClause = { email: "asc" };
    }
    else if (sort === "email_desc") {
        orderByClause = { email: "desc" };
    }
    else if (sort === "phone_asc") {
        orderByClause = { phone: "asc" };
    }
    else if (sort === "phone_desc") {
        orderByClause = { phone: "desc" };
    }
    else if (sort === "address_asc") {
        orderByClause = { address: "asc" };
    }
    else if (sort === "address_desc") {
        orderByClause = { address: "desc" };
    }
    const whereClause = {
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
        prisma_1.default.clients.findMany({
            where: whereClause,
            skip,
            take: limit,
            orderBy: orderByClause,
        }),
        prisma_1.default.clients.count({ where: whereClause }),
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
exports.getAllClientService = getAllClientService;
const getSingleClientService = async (clientId) => {
    const client = await prisma_1.default.clients.findUnique({
        where: {
            id: clientId,
        },
    });
    if (!client || client.is_deleted) {
        throw new Error("Client not found");
    }
    return client;
};
exports.getSingleClientService = getSingleClientService;
const updateClientService = async ({ clientId, name, email, phone, address, }) => {
    const rawPhone = String(phone);
    const normalizedPhone = rawPhone.startsWith("62")
        ? rawPhone
        : `62${rawPhone}`;
    const existingClient = await prisma_1.default.clients.findUnique({
        where: { id: clientId },
    });
    if (!existingClient || existingClient.is_deleted) {
        throw new Error("Client not found");
    }
    const updatedClient = await prisma_1.default.clients.update({
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
exports.updateClientService = updateClientService;
const deleteClientService = async (clientId) => {
    const client = await prisma_1.default.clients.findUnique({
        where: { id: clientId },
    });
    if (!client || client.is_deleted) {
        throw new Error("Client not found or already deleted");
    }
    const deletedClient = await prisma_1.default.clients.update({
        where: { id: clientId },
        data: {
            is_deleted: true,
        },
    });
    return deletedClient;
};
exports.deleteClientService = deleteClientService;
