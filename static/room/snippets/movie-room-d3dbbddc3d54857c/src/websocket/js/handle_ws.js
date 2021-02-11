export function startWs(
    url,
    on_open,
    on_close,
    on_error,
    on_message,

) {
    let socket = new WebSocket(url);

    socket.onopen = on_open;
    socket.onclose = on_close;
    socket.onerror = on_error;

    socket.onmessage = function (event) {
        on_message(event.data)
    };

    return socket
}