FROM rust:latest

RUN mkdir /code
WORKDIR /code
COPY ./ /code/
RUN sudo apt install cmake
RUN cargo build --release


