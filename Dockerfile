FROM golang:alpine
RUN mkdir /app
WORKDIR /app/server
ENV GO111MODULE=on
COPY /server/go.sum .
COPY /server/go.mod .
RUN go mod download 
ADD /server /app/server
RUN go build main.go
EXPOSE 8000
CMD ["go","run", "main.go"]