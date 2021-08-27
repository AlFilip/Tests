export function printerError(s) {
    return s.split('').filter(i => !i.match(/[a-m]/g)).length + '/' + s.length
}


