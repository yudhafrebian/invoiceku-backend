import { PaymentMethod } from "../../prisma/generated/client";
import { cloudUpload } from "../configs/cloudinary";
import prisma from "../configs/prisma";
import { CreatePaymentMethodInput } from "../types/user.type";

export const getUserService = async (userId: number) => {
  const user = await prisma.users.findFirst({
    where: {
      id: userId,
      is_deleted: false,
    },
    select: {
      email: true,
      is_verified: true,
    },
  });

  const user_profile = await prisma.user_profiles.findFirst({
    where: {
      user_id: userId,
    },
  });

  return { user, user_profile };
};

export const updateUserService = async (
  userId: number,
  data: {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    file?: Express.Multer.File;
  }
) => {
  const { first_name, last_name, phone, email, file } = data;

  let profileImage: string | undefined;

  if (file) {
    const upload = await cloudUpload(file);
    profileImage = upload.secure_url;
  }

  const userProfile = await prisma.user_profiles.findFirst({
    where: { user_id: userId },
  });

  if (!userProfile) {
    throw "User profile not found";
  }

  const currentUser = await prisma.users.findFirst({
    where: { id: userId, is_deleted: false },
  });

  if (!currentUser) {
    throw "User not found";
  }

  if (email !== currentUser.email) {
    const checkEmail = await prisma.users.findFirst({
      where: { email, is_deleted: false },
    });

    if (checkEmail) {
      throw `Email ${email} already exists`;
    }
  }

  const updateUser = await prisma.users.update({
    where: { id: userId },
    data: {
      email,
      ...(email !== currentUser.email && { is_verified: false }),
    },
    select: {
      email: true,
      is_verified: true,
    },
  });

  const updateUserProfile = await prisma.user_profiles.update({
    where: { id: userProfile.id },
    data: {
      first_name,
      last_name,
      phone,
      ...(profileImage && { profile_img: profileImage }),
    },
  });

  return {
    updateUser,
    updateUserProfile,
  };
};

export const getUserPaymentMethodsService = async (userId: number) => {
  const userPaymentMethod = await prisma.user_payment_method.findMany({
    where: { user_id: userId },
  });

  return userPaymentMethod;
};

export const createPaymentMethodService = async (
  input: CreatePaymentMethodInput
) => {
  const { user_id, account_name, account_number, payment_method, file } = input;

  const isExist = await prisma.user_payment_method.findFirst({
    where: {
      user_id,
      payment_method,
    },
  });

  if (isExist) {
    throw `Payment method ${payment_method} already exists`;
  }

  let paymentMethodImage: string | undefined;

  if (file) {
    const upload = await cloudUpload(file);
    paymentMethodImage = upload.secure_url;
  }

  const created = await prisma.user_payment_method.create({
    data: {
      user_id,
      account_name,
      account_number,
      payment_method,
      ...(paymentMethodImage && { qris_image_url: paymentMethodImage }),
    },
  });

  return created;
};

export const getSinglePaymentMethodService = async (id: number) => {
  const paymentMethod = await prisma.user_payment_method.findUnique({
    where: { id },
  });

  if (!paymentMethod) {
    throw "Payment method not found";
  }

  return paymentMethod;
};

export const updatePaymentMethodService = async (
  id: number,
  data: {
    payment_method: string;
    account_name: string;
    account_number: string;
    file?: Express.Multer.File;
  }
) => {
  const current = await prisma.user_payment_method.findUnique({
    where: { id },
  });

  if (!current) {
    throw "Payment method not found";
  }

  let paymentMethodImage: string | undefined;

  if (data.file) {
    const upload = await cloudUpload(data.file);
    paymentMethodImage = upload.secure_url;
  }

  const updated = await prisma.user_payment_method.update({
    where: { id },
    data: {
      payment_method: data.payment_method as PaymentMethod,
      account_name: data.account_name,
      account_number: data.account_number,
      ...(paymentMethodImage && { qris_image_url: paymentMethodImage }),
    },
  });

  return updated;
};

export const switchPaymentMethodStatusService = async (id: number) => {
    const current = await prisma.user_payment_method.findUnique({
      where: { id },
    });
  
    if (!current) {
      throw "Payment method not found";
    }
  
    const updated = await prisma.user_payment_method.update({
      where: { id },
      data: {
        is_active: !current.is_active,
      },
    });
  
    return updated;
  };
  
  export const deleteUserService = async (userId: number) => {
    const user = await prisma.users.findFirst({
      where: {
        id: userId,
        is_deleted: false,
      },
    });
  
    if (!user) {
      throw "User not found";
    }
  
    const deleted = await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        is_deleted: true,
      },
    });
  
    return deleted;
  };
  