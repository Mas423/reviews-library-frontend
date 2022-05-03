#development
dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml --env-file env/.dev.env up --build -d
#production
prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml --env-file env/.prod.env up --build -d
