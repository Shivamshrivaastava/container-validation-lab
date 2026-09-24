# container-validation-lab

This repository contains a containerized web service.
The container starts successfully but the application does not respond correctly.
Your goal is to investigate the runtime signals and restore successful endpoint validation.

## Root cause

The service listened only on the container loopback address (`127.0.0.1`), which
cannot receive traffic forwarded from Docker's published host port. The Node
process therefore kept the container **Up** even though `/health` was not
reachable from the host. It now listens on `0.0.0.0:8080`, allowing Docker to
forward requests to the service.

## Setup

Build and run the container using the following commands:

```bash
docker build -t validate-app .
docker run -d -p 8080:8080 --name app validate-app
docker inspect --format '{{.State.Health.Status}}' app
```

## Investigation Commands

You can use the following commands to investigate the container:

```bash
docker ps
docker logs app
curl -i localhost:8080/health
docker inspect app
```
