import { pgTable, text, integer, boolean, timestamp, decimal, uuid } from 'drizzle-orm/pg-core'

// Products table
export const products = pgTable('products', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    description: text('description').notNull(),
    price: decimal('price', { precision: 10, scale: 2 }).notNull(),
    images: text('images').array().notNull().default([]),
    category: text('category').notNull(),
    inStock: boolean('in_stock').notNull().default(true),
    featured: boolean('featured').notNull().default(false),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Categories table
export const categories = pgTable('categories', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull().unique(),
    description: text('description'),
    image: text('image'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})

// Orders table
export const orders = pgTable('orders', {
    id: uuid('id').primaryKey().defaultRandom(),
    customerEmail: text('customer_email').notNull(),
    customerName: text('customer_name').notNull(),
    customerPhone: text('customer_phone'),
    shippingAddress: text('shipping_address').notNull(),
    billingAddress: text('billing_address'),
    total: decimal('total', { precision: 10, scale: 2 }).notNull(),
    status: text('status').notNull().default('pending'), // pending, processing, shipped, delivered, cancelled
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Order items table
export const orderItems = pgTable('order_items', {
    id: uuid('id').primaryKey().defaultRandom(),
    orderId: uuid('order_id').notNull().references(() => orders.id),
    productId: uuid('product_id').notNull().references(() => products.id),
    quantity: integer('quantity').notNull(),
    price: decimal('price', { precision: 10, scale: 2 }).notNull(),
})

// Type exports for TypeScript
export type Product = typeof products.$inferSelect
export type NewProduct = typeof products.$inferInsert
export type Category = typeof categories.$inferSelect
export type NewCategory = typeof categories.$inferInsert
export type Order = typeof orders.$inferSelect
export type NewOrder = typeof orders.$inferInsert
export type OrderItem = typeof orderItems.$inferSelect
export type NewOrderItem = typeof orderItems.$inferInsert