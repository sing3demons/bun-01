package main

import "github.com/gofiber/fiber/v2"

func main() {
	app := fiber.New()
	app.Get("/", func(c *fiber.Ctx) error {
		c.Status(200)
		return c.JSON(fiber.Map{
			"message": "Hello, World!",
			"version": "1.0.0",
			"service": "go-app",
		})
	})

	app.Get("/ping", func(c *fiber.Ctx) error {
		c.Status(200)
		return c.JSON(fiber.Map{
			"message": "pong",
		})
	})
	app.Listen(":8080")
}
