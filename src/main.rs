use warp::Filter;
use warp::http::Uri;
use std::fs;
use std::net::SocketAddr;
use serde::{Deserialize, Serialize};
use chrono::Utc;


#[tokio::main]
async fn main() {
    let config = get_config();

    let home = warp::get()
        .and(warp::path::end())
        .map(|| warp::redirect(Uri::from_static("/home")));

    let home2 = warp::path("home")
        .and(warp::fs::file(config.home_dir));

    let home2 = warp::path("room")
        .and(warp::fs::file(config.room_dir));

    let static_files = warp::path("static")
        .and(warp::fs::dir(config.static_file_dir));

    println!(
        "[ {} ] Running @ http://{}",
        Utc::now().format("%D | %T"),
        &config.server_host
    );

    let server: SocketAddr = config.server_host
        .parse()
        .expect("Unable to parse socket address");

    let routes = home.or(home2).or(static_files);

    warp::serve(routes).run(server).await;
}

fn get_config() -> ServerConfig {
    let config = fs::read_to_string("./config.json")
        .expect("could not load config");
    let config: ServerConfig = serde_json::from_str(&config)
        .expect("could not parse json");

    config
}

#[derive(Serialize, Deserialize)]
struct ServerConfig {
    server_host: String,
    static_file_dir: String,
    home_dir: String,
    room_dir: String,
}