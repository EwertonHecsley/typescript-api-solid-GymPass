import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";
import bcrypt from 'bcrypt';

const createUser = async (request: FastifyRequest, reply: FastifyReply) => {

    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(4)
    });

    const { name, email, password } = registerBodySchema.parse(request.body);

    const userWithSameEmail = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (userWithSameEmail) return reply.status(409).send();

    const password_hash = await bcrypt.hash(password, 8);

    await prisma.user.create({
        data: {
            name,
            email,
            password_hash
        },
    });

    return reply.status(201).send();
};

export default {
    createUser
}