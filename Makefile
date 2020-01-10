.phony: build
build:
	docker build -t atechnohazard/riviera_frontend:latest .
	docker push atechnohazard/riviera_frontend
