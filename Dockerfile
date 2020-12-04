FROM rust:latest

RUN mkdir /code
WORKDIR /code
RUN cargo build --release
COPY ./ /code/


