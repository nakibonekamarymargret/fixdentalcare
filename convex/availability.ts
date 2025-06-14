import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const setAvailability = mutation({
  args: {
    dentistId: v.id("users"),
    day: v.string(),
    startTime: v.string(),
    endTime: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("availability", {
      dentistId: args.dentistId,
      day: args.day,
      startTime: args.startTime,
      endTime: args.endTime,
      createdAt: Date.now(),
    });
  },
});

export const getAvailability = query({
  args: { dentistId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("availability")
      .filter((q) => q.eq(q.field("dentistId"), args.dentistId))
      .collect();
  },
});
