export function Sleep(delay: number) {
    let start: number = new Date().getTime();
    while (new Date().getTime() < start + delay);
}