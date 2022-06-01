docker-compose -f "docker-compose.yml" up -d --build
sleep 1
db-migrate up --env=dev