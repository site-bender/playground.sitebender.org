import { defineConfig } from "vitest/config"

export default defineConfig({
	test: {
		coverage: {
			exclude: ["temp/**"],
			include: ["src/**"],
			provider: "v8",
		},
	},
})
