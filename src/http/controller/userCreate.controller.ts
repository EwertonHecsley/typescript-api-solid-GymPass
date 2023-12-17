import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import userService from '../../useCase/useCreate.service';


const createUser = async (request: FastifyRequest, reply: FastifyReply) => {

    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(4)
    });

    const { name, email, password } = registerBodySchema.parse(request.body);

    try {
        await userService.createUser({ name, email, password });
    } catch (error) {
        return reply.status(409).send();
    }

    return reply.status(201).send();
};

export default {
    createUser
}