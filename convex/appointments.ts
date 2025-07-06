import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createAppointment = mutation({
  args: {
    patientId: v.id("users"),
    dentistId: v.id("users"),
    serviceId: v.id("services"),
    appointmentTime: v.string(), // ISO or timestamp string
    notes: v.optional(v.string()),
    status: v.optional(
      v.union(
        v.literal("pending"),
        v.literal("confirmed"),
        v.literal("cancelled"),
        v.literal("completed")
      )
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("appointments", {
      patientId: args.patientId,
      dentistId: args.dentistId,
      serviceId: args.serviceId,
      appointmentTime: args.appointmentTime,
      notes: args.notes,
      status: args.status || "pending",
      createdAt: Date.now(),
    });
  },
});

export const getAppointments = query({
  handler: async (ctx) => {
    return await ctx.db.query("appointments").collect();
  },
});
