// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
  users: defineTable({
    firstname: v.string(),
    lastname: v.string(),
    username: v.string(),
    email: v.optional(v.string()),
    password: v.optional(v.string()),
    phoneNumber: v.string(),
    address: v.optional(v.string()),
    role: v.union(v.literal("patient"), v.literal("dentist")),
    specialty: v.optional(v.string()), // Only for dentists
    createdAt: v.number(),
  }),

  services: defineTable({
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
  }),

  appointments: defineTable({
    patientId: v.id("users"),
    dentistId: v.id("users"),
    serviceId: v.id("services"),
    appointmentTime: v.string(), // ISO string or timestamp
    notes: v.optional(v.string()),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("cancelled"),
      v.literal("completed")
    ),
    createdAt: v.number(),
  }),

  availability: defineTable({
    dentistId: v.id("users"),
    day: v.string(), // e.g., "Monday"
    startTime: v.string(), // "09:00"
    endTime: v.string(), // "17:00"
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
