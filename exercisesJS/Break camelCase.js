function solution(string) {
    return string.split(new RegExp(/(?=[A-Z])/)).join(' ');
}
console.log(solution('s'));