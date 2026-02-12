# Use zsh on macOS
SHELL := /bin/zsh -l

# Commands
PNPM := pnpm
RUN := $(PNPM) run
NVM := nvm

# Phony targets
.PHONY: help dev build preview lint fmt test clean

# Help: list available targets
help: ## Show available commands
    @grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

# Start dev server
dev: version ## Start Vite dev server
	$(RUN) dev

# Build production bundle
build: ## Build production bundle
	$(RUN) build

# Preview production build locally and open browser (macOS)
preview: build ## Preview production build on localhost and open browser
	$(RUN) preview --port 4173 & sleep 1 && open http://localhost:4173

# Lint (assumes lint script exists)
lint: ## Run linter
	$(PNPM) run lint

# Format (assumes format script exists)
fmt: ## Run formatter
	$(PNPM) run format

# Run tests (assumes test script exists)
test: ## Run tests
	$(PNPM) test

# Clean build artifacts
clean: ## Remove build artifacts and caches
	rm -rf dist .vite node_modules/.vite

# Use the required node version
version: ## Uses the required node version for this project
	@export NVM_DIR="$$HOME/.nvm"; \
	[ -s "$$NVM_DIR/nvm.sh" ] && . "$$NVM_DIR/nvm.sh"; \
	nvm use v22