FROM golang:1.20.3

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN CGO_ENABLED=0 
RUN GOOS=linux 
RUN go build ./cmd/api

USER root

EXPOSE 5000

CMD ["./api"]