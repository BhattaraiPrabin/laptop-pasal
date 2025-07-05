import * as z from "zod"

export const laptopDetailsSchema = z.object({
  brand: z.string({
    required_error: "Please select a brand",
  }),
  model: z.string().min(2, {
    message: "Model must be at least 2 characters",
  }),
  processor: z.string({
    required_error: "Please select a processor",
  }),
  ram: z.string({
    required_error: "Please select RAM capacity",
  }),
  storageType: z.string({
    required_error: "Please select storage type",
  }),
  storageCapacity: z.string({
    required_error: "Please select storage capacity",
  }),
  graphics: z.string().optional(),
})

export const laptopConditionSchema = z.object({
  age: z.string({
    required_error: "Please select the age of your laptop",
  }),
  physicalCondition: z.string({
    required_error: "Please select the physical condition",
  }),
  functionalCondition: z.string({
    required_error: "Please select the functional condition",
  }),
  batteryHealth: z.string({
    required_error: "Please select the battery health",
  }),
  additionalInfo: z.string().optional(),
  photos: z.array(z.any()).optional(),
})

export const contactInfoSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number",
  }),
  location: z.string({
    required_error: "Please select your location",
  }),
  preferredContact: z.string({
    required_error: "Please select your preferred contact method",
  }),
  preferredPayment: z.string({
    required_error: "Please select your preferred payment method",
  }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
})

export const sellLaptopSchema = z.object({
  laptopDetails: laptopDetailsSchema,
  laptopCondition: laptopConditionSchema,
  contactInfo: contactInfoSchema,
})

export type LaptopDetailsFormValues = z.infer<typeof laptopDetailsSchema>
export type LaptopConditionFormValues = z.infer<typeof laptopConditionSchema>
export type ContactInfoFormValues = z.infer<typeof contactInfoSchema>
export type SellLaptopFormValues = z.infer<typeof sellLaptopSchema>
