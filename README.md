# container-validation-lab

This repository contains a containerized web service.
The container starts successfully but the application does not respond correctly.
Your goal is to investigate the runtime signals and restore successful endpoint validation.

## Setup

Build and run the container using the following commands:

```bash
docker build -t validate-app .
docker run -d -p 8080:8080 --name app validate-app
```

## Investigation Commands

You can use the following commands to investigate the container:

```bash
docker ps
docker logs app
curl -i localhost:8080/health
docker inspect app
```
