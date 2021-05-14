FROM golang:alpine
RUN mkdir /app
WORKDIR /app/server
ENV GO111MODULE=on
COPY /server/go.sum .
COPY /server/go.mod .
RUN go mod download 
ADD /server /app/server
RUN go build main.go
CMD ["go","run", "main.go"]