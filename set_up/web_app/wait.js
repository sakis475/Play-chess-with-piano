var fs = require('fs');

var options = {
    persistent: true,
    interval: 500
};

function onChanged(current, previous, path, timer, clientCallback) {
    var type = 'File modified.';
    if (current.mode === 0 && previous.mode === 0) type = 'No file.';
    else if (current.mode > 0 && previous.mode === 0) type = 'File created.';
    else if (current.mode === 0 && previous.mode > 0) type = 'File deleted.';

    if (type !== 'No file.') {
        stopWaiting(path);
        clearTimeout(timer);
    }

    clientCallback(type, current, previous);
}

/**
 * Stop watching a given file.
 * @param  {string}   path     Full path to target file.
 * @return {undefined}
 */
function stopWaiting(path) {
    fs.unwatchFile(path, this);
}

/**
 * Start waiting for a file to change for a given amount of time.
 * Valid for a file, a direcotry or any other valid target of fs.watchFile.
 * @param  {string}   path     Full path to target file.
 * @param  {Function} callback Callback to be called on file change. Will be called on timeout, too.
 * @param  {number}   timeout  Time to keep watcher active. Give in ms.
 * @return {undefined}
 *
 * @example
 * ```javascript
 * function onChange(mode, current, previous){
 *     console.log("file changed. mode: " + mode);
 * }
 *
 * watcher.start('file.txt', onChange, 3000);
 * ```
 */
function startWaiting(path, callback, timeout) {
    var timer = setTimeout(function () {
            stopWaiting(path);
            callback('Timed out.');
    }, timeout);

    fs.watchFile(path, options, function (curr, prev) {
        onChanged(curr, prev, path, timer, callback);
    });
}

exports.start = startWaiting;
exports.stop = stopWaiting;

/* License
 * This article, along with any associated source code and files,
 * is licensed under The MIT License
 * https://opensource.org/licenses/mit-license.php
 */
