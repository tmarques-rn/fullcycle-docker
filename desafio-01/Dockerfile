# Adaptado de: https://klotzandrew.com/blog/smallest-golang-docker-image
FROM golang:1.19-alpine as base

WORKDIR $GOPATH/src/smallest-golang/app/

COPY ./src/ .

RUN go mod download
RUN go mod verify

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /app .

FROM scratch

COPY --from=base /app .

CMD ["./app"]