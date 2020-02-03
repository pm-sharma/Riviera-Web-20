.phony: build
build:
	git pull origin master
	docker build -t atechnohazard/riviera_frontend:latest .
	docker push atechnohazard/riviera_frontend
