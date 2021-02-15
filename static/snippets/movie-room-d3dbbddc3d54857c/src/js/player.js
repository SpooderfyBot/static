export function setPlayerListeners(onerror, onmeta) {
    let flvPlayer = window.flvPlayer;
    if (flvPlayer === undefined) { return false }

    flvPlayer.on('error', function (e) {
        onerror();
    });
    flvPlayer.on('METADATA_ARRIVED', onmeta);

    return true
}


export function tryReloadVideo() {
    let flvPlayer = window.flvPlayer;
    if (flvPlayer === null) { return }
    flvPlayer.unload();
    flvPlayer.load();
}
