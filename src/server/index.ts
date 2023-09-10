import { publicProducer, router } from "./trpc";

export const appRouter = router({
  getUser: publicProducer.query(async () => {
    return [
      { id: 1, username: "David" },
      { id: 2, username: "Jhon" },
      { id: 3, username: "Jessica" },
    ];
  }),
});
export type AppRouter = typeof appRouter;
