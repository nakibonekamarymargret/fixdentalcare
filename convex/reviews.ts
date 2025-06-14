import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createReview = mutation({
  args: {
    patientId: v.id("users"),
    dentistId: v.id("users"),
    rating: v.number(), // 1 to 5
    comment: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("reviews", {
      patientId: args.patientId,
      dentistId: args.dentistId,
      rating: args.rating,
      comment: args.comment,
      createdAt: Date.now(),
    });
  },
});

export const getReviews = query({
  args: { dentistId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("reviews")
      .filter((q) => q.eq(q.field("dentistId"), args.dentistId))
      .collect();
  },
});
