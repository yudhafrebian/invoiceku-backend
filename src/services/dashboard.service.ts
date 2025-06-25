import prisma from "../configs/prisma";

export const getSummaryService = async (userId: number) => {
    const [
      totalInvoice,
      paidInvoice,
      pendingInvoice,
      confirmatingInvoice,
      rejectedInvoice,
      overdueInvoice,
      clients,
      products,
      invoices,
    ] = await Promise.all([
      prisma.invoices.count({
        where: { user_id: userId },
      }),
      prisma.invoices.count({
        where: { user_id: userId, status: "Paid" },
      }),
      prisma.invoices.count({
        where: { user_id: userId, status: "Pending" },
      }),
      prisma.invoices.count({
        where: { user_id: userId, status: "Confirmating" },
      }),
      prisma.invoices.count({
        where: { user_id: userId, status: "Rejected" },
      }),
      prisma.invoices.count({
        where: { user_id: userId, status: "Overdue" },
      }),
      prisma.clients.findMany({
        where: { user_id: userId, is_deleted: false },
        take: 5,
      }),
      prisma.products_services.findMany({
        where: { user_id: userId, is_deleted: false },
        take: 5,
      }),
      prisma.invoices.findMany({
        where: { user_id: userId },
        include: { clients: true },
        take: 5,
      }),
    ]);
  
    return {
      invoiceSummary: {
        totalInvoice,
        paidInvoice,
        pendingInvoice,
        confirmatingInvoice,
        rejectedInvoice,
        overdueInvoice,
      },
      clients,
      products,
      invoices,
    };
  };
  