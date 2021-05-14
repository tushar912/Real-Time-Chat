# Real-Time-Chat

A real time chat built using Golang. This application uses Golang's Websocket and concurrency to broadcast a message sent by User
to all clients. Also redis is used as a Cache/Database to store previous messages and send them to users.

# Tech Stack

* Golang
* Redis
* JavaScript
* WebSockets

# Installation

## Without docker-compose
You must have Redis and Golang installed on your machine

```
git clone https://github.com/tushar912/Real-Time-Chat.git
cd server
go mod download
go build .
```
Then to Run
```
go run main.go
```
Visit ```localhost:8000``` to access the app.

## With docker-compose
You must have docker and docker-compose installed on your machine
```
docker-compose up --build
```

# ScreenShot

![Screenshot_2021-05-14_15-55-34](https://user-images.githubusercontent.com/59223034/118258703-daf95200-b4cd-11eb-90ba-3d8ff4268ab2.png)
