FROM gcc:latest

WORKDIR /app

COPY . .

RUN g++ main.cpp -o programa

CMD ["./programa"]
