import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.email("Enter a valid work email"),
  company: z.string().trim().min(1, "Company is required"),
  service: z.string().min(1, "Please choose a service"),
  // Budget is optional — forcing it is a known B2B conversion killer.
  budget: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a bit more — at least 10 characters")
    .max(2000, "That's a little long — keep it under 2000 characters"),
  // Honeypot: bots fill this, humans never see it. A filled value is allowed
  // through schema validation so the API can silently fake success for bots.
  website: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
