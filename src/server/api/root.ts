import { z } from 'zod';
import { publicProcedure, router } from './trpc';
import { sleep } from '@/utils/utils';

export const trpcRouter = router({
  getHello: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .query(async ({ input }) => {
      await sleep(500); // simulate a delay
      return {
        greeting: `Hello, ${input.name}!`,
      };
    }),
  postHello: publicProcedure
    .input(
      z.object({
        name: z.string(),
        fruit: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      await sleep(500); // simulate a delay
      return {
        greeting: `Hello ${input.name}, here's your ${input.fruit}!`,
      };
    }),
});

export type TrpcRouter = typeof trpcRouter;
