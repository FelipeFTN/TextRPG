export function Sleep(delay: number) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}