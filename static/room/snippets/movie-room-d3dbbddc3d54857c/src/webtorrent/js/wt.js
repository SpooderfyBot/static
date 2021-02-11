let client = new window.WebTorrent();


export function extractFiles(torrentId, submit) {
    client.add(torrentId, function (torrent) {
        let files = torrent.files;

        torrent.on('error', function (err) {
            console.log(`Got exception: ${err}`)
        })


        const validFormats = [".mp4", ".webm", ".m4v", ".mkv"]
        let filtered_files = [];
        let file;
        for (let i = 0;i<files.length;i++) {
            file = files[i];
            console.log(`Checking file name: ${file.name}`)
            for (let y = 0;y<validFormats.length;y++) {
                if (file.name.endsWith(validFormats[y])) {
                    file.name = file.name.replace(validFormats[y], "");
                    filtered_files.push(file);
                    break;
                }
            }

        }

        submit(filtered_files);
    })
}

export function extractTitle(file) {
    return file.name
}

export function sendToVideoInN(elm_id, file, n) {
    setTimeout(() => {
        file.renderTo(`#${elm_id}`, {autoplay: false, controls: false})
    }, n)
}
