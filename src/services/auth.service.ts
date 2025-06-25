import { compare } from "bcrypt";
import prisma from "../configs/prisma";
import { createToken } from "../utils/createToken";
import { sendVerifyEmail } from "../utils/email/sendEmail";
import { hashPassword } from "../utils/hashPassword";
import { sendResetLinkEmail } from "../utils/email/sendEmail";

interface CreateUserInput {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
}

export const createUserService = async ({
  first_name,
  last_name,
  phone,
  email,
  password,
}: CreateUserInput) => {
  const isExist = await prisma.users.findFirst({
    where: {
      email,
      is_deleted: false,
    },
  });

  if (isExist) {
    throw new Error(`User with email ${email} already exist`);
  }

  const newPassword = await hashPassword(password);

  const createAuth = await prisma.users.create({
    data: {
      email,
      password_hash: newPassword,
    },
  });

  const rawPhone = String(phone);
  const normalizedPhone = rawPhone.startsWith("62")
    ? rawPhone
    : `62${rawPhone}`;

  const createUser = await prisma.user_profiles.create({
    data: {
      first_name,
      last_name,
      phone: normalizedPhone,
      user_id: createAuth.id,
    },
  });

  const token = createToken({
    id: createAuth.id,
    password: createAuth.password_hash,
  });

  await sendVerifyEmail(email, "Verify Email", null, {
    email,
    token,
  });

  return {
    user: createUser,
    auth: createAuth,
  };
};

export const loginService = async (email: string, password: string) => {
  const account = await prisma.users.findUnique({
    where: { email },
  });

  if (!account || account.is_deleted) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await compare(password, account.password_hash);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const user = await prisma.user_profiles.findFirst({
    where: { user_id: account.id },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const token = createToken(
    {
      id: account.id,
      is_verified: account.is_verified,
    },
    "24h"
  );

  return {
    first_name: user.first_name,
    last_name: user.last_name,
    email: account.email,
    is_verified: account.is_verified,
    phone: user.phone,
    profile_img: user.profile_img,
    token,
  };
};

export const keepLoginService = async (userId: number) => {
  const account = await prisma.users.findUnique({
    where: { id: userId },
  });

  if (!account || account.is_deleted) {
    throw new Error("Account not found");
  }

  const user = await prisma.user_profiles.findFirst({
    where: { user_id: account.id },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const token = createToken(
    {
      id: account.id,
      is_verified: account.is_verified,
    },
    "1h"
  );

  return {
    first_name: user.first_name,
    last_name: user.last_name,
    email: account.email,
    is_verified: account.is_verified,
    phone: user.phone,
    profile_img: user.profile_img,
    token,
  };
};

export const verifyEmailService = async (userId: number) => {
  const user = await prisma.users.findUnique({
    where: { id: userId },
  });

  if (!user || user.is_deleted) {
    throw new Error("User not found");
  }

  await prisma.users.update({
    where: { id: userId },
    data: { is_verified: true },
  });
};


export const forgotPasswordService = async (email: string) => {
  const account = await prisma.users.findUnique({
    where: { email },
  });

  if (!account || account.is_deleted) {
    throw new Error("Account not found");
  }

  const token = createToken({
    id: account.id,
    password: account.password_hash,
  });

  await sendResetLinkEmail(email, "Reset Password", null, {
    email,
    token,
  });
};

export const sendVerifyLinkService = async (userId: number, email: string) => {
  const user = await prisma.users.findFirst({
    where: {
      id: userId,
      is_deleted: false,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const token = createToken({
    id: user.id,
  });

  await sendVerifyEmail(email, "Verify Email", null, {
    email,
    token,
  });
};

export const sendResetLinkService = async (userId: number, email: string) => {
  const user = await prisma.users.findFirst({
    where: {
      id: userId,
      is_deleted: false,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const token = createToken({
    id: user.id,
  });

  await sendResetLinkEmail(email, "Reset Password", null, {
    email,
    token,
  });
};


export const resetPasswordService = async (userId: number, password: string) => {
  const user = await prisma.users.findUnique({
    where: { id: userId },
  });

  if (!user || user.is_deleted) {
    throw new Error("User not found");
  }

  const newPassword = await hashPassword(password);

  await prisma.users.update({
    where: { id: userId },
    data: { password_hash: newPassword },
  });
};
