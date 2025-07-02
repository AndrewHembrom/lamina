import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from 'zod';

export const projectRouter = createTRPCRouter({
    createProject: protectedProcedure.input(
        z.object({
            name: z.string(),
            githubUrl: z.string(),
            githubToken: z.string().optional()
        })
    ).mutation(async ({ ctx, input }) => {
        console.log("Input", input);
        return true;
    })
})