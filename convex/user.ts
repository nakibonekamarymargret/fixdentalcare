import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    firstname: v.string(),
    lastname: v.string(),
    username: v.string(),
    email: v.optional(v.string()),
    password: v.optional(v.string()),
    phoneNumber: v.string(),
    address: v.optional(v.string()),
    role: v.union(v.literal("patient"), v.literal("dentist")),
    specialty: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", {
      firstname: args.firstname,
      lastname: args.lastname,
      username: args.username,
      email: args.email,
      password: args.password,
      phoneNumber: args.phoneNumber,
      address: args.address,
      role: args.role,
      specialty: args.role === "dentist" ? args.specialty : undefined,
      createdAt: Date.now(),
    });
  },
});

export const getUsers = query({
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});
