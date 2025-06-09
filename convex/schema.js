import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    firstname: v.string({ description: "The user's name" }),
    lastname: v.string({ description: "The user's surname" }),
    username: v.string({ description: "The user's unique username" }),
    email: v.optional(v.string({ description: "The user's email address" })),
    password: v.optional(v.string({ description: "The user's password" })),
    phone: v.string({ description: "The user's phone number" }),
    address: v.optional(v.string({ description: "The user's address" })),
    role: v.union(v.literal("patient"), v.literal("dentist")),
    specialty: v.optional(v.string()),
    createdAt: v.number({
      description: "Timestamp of when the user was created",
    }),
  }),
  appointments: defineTable({
    patientId: v.id("users"),
    dentistId: v.id("users"),
    date: v.string(),
    time: v.string(),
    status: v.string(),
  }),
  treatments: defineTable({
    appointmentId: v.id("appointments"),
    description: v.string(),
    cost: v.number(),
    status: v.string(),
    createdAt: v.number(),
  }),
  reviews: defineTable({
    patientId: v.id("users"),
    dentistId: v.id("users"),
    rating: v.number(),
    comment: v.optional(v.string()),
    createdAt: v.number(),
  }),
});
