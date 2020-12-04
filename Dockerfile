FROM rust:latest

RUN mkdir /code
WORKDIR /code
COPY ./ /code/
RUN apt install cmake
RUN cargo build --release


