import { prisma } from "../lib/prisma";
import bcrypt from 'bcrypt';

interface CreateUserParams {
    name: string
    email: string
    password: string
}

async function createUser({ name, email, password }: CreateUserParams) {

    const userWithSameEmail = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (userWithSameEmail) throw new Error('Email alredy exist.')

    const password_hash = await bcrypt.hash(password, 8);

    await prisma.user.create({
        data: {
            name,
            email,
            password_hash
        },
    });
};

export default {
    createUser
}