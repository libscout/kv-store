docker-compose -f "docker-compose.yml" up -d --build
sleep 3
db-migrate up --env=dev