import { z } from 'zod';
import { publicProcedure, router } from './trpc';

export const trpcRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .query(async ({ input }) => {
      return {
        greeting: `Hello, ${input.name}!`,
      };
    }),
});

export type TrpcRouter = typeof trpcRouter;
