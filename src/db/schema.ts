import { pgTable, serial, text, integer, timestamp, uuid, varchar, boolean } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const favorites = pgTable("favorites", {
	id: serial().primaryKey().notNull(),
	userId: text("user_id").notNull(),
	recipeId: integer("recipe_id").notNull(),
	title: text().notNull(),
	image: text(),
	cookTime: text("cook_time"),
	servings: text(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
});

export const items = pgTable("items", {
	id: uuid().primaryKey().notNull(),
	item: varchar().notNull(),
	done: boolean().default(false),
	tags: text().notNull(),
});

export const recipes = pgTable("recipes", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	title: text().notNull(),
	ingredients: text().notNull(),
	directions: text().notNull(),
});

export const events = pgTable("events", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	title: text().notNull(),
	date: text(),
	time: text(),
	location: text(),
	description: text(),
	normalizedDate: text(),
});
