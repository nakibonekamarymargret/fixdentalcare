import { query } from "../../_generated/server";


export const getDentists = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("role"), "dentist"))
      .collect();
  },
});