import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const addUser = mutation({
  args: {
    firstname: v.string(),
    lastname: v.string(),
    username: v.string(),
    email: v.optional(v.string()),
    password: v.optional(v.string()),
    phone: v.string(),
    address: v.optional(v.string()),
    role: v.union(v.literal("patient"), v.literal("dentist")),
    specialty: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("users", {
      ...args,
      createdAt: Date.now(),
    });
  },
});
