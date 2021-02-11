export function play_video(elm_id) {
    let elm = document.getElementById(elm_id);
    elm.play();
}

export function pause_video(elm_id) {
    let elm = document.getElementById(elm_id);
    elm.pause();
}

export function reload_video(elm_id) {
    let elm = document.getElementById(elm_id);
    elm.load();
}

export function seek_video(elm_id, pos) {
    let elm = document.getElementById(elm_id);
    elm.currentTime = pos;
}

export function mute_video(elm_id) {
    let elm = document.getElementById(elm_id);
    elm.muted = true;
}

export function unmute_video(elm_id) {
    let elm = document.getElementById(elm_id);
    elm.muted = false;
}

export function get_pct_done(elm_id) {
    let elm = document.getElementById(elm_id);
    let total = elm.duration;
    return Math.round((elm.currentTime / total) * 100);
}

export function get_duration(elm_id) {
    let elm = document.getElementById(elm_id);
    return elm.duration;
}

export function get_pos(elm_id) {
    let elm = document.getElementById(elm_id);
    return elm.currentTime;
}

export function set_vol(elm_id, vol_pct) {
    let elm = document.getElementById(elm_id);
    elm.volume = vol_pct;
}

export function maximise(elm_id) {
    let elm = document.getElementById(elm_id);
    elm.requestFullscreen().then(r => console.log("Failed to full screen"));
}

export function minimise(_elm_id) {
    document.exitFullscreen().then(r => console.log("Failed to full screen"));
}

export function get_state(elm_id) {
    let elm = document.getElementById(elm_id);
    return elm.readyState
}