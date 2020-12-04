FROM rust:latest

RUN mkdir /code
WORKDIR /code
COPY ./ /code/
RUN cargo build --release


