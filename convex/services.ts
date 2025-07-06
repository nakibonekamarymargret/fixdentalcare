import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createService = mutation({
  args: {
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    image1: v.optional(v.string()),
    image2: v.optional(v.string()),
    subservices: v.optional(
      v.array(
        v.object({
          name: v.string(),
          description: v.string(),
        })
      )
    ),
    createdAt: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("services", {
      name: args.name,
      slug: args.slug,
      description: args.description,
      image1: args.image1,
      image2: args.image2,
      subservices: args.subservices || [],
      createdAt: args.createdAt,
    });
  },
});

export const getServices = query({
  handler: async (ctx) => {
    return await ctx.db.query("services").collect();
  },
});
