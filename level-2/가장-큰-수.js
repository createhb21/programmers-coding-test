//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(numbers) {
    var answer = '';
    numbers.sort(sortFunc)
    answer = numbers.join('')
    if (answer[0] === '0') return '0'
    return answer;
}

const sortFunc = (a, b) => {
    const compareA = parseInt(a.toString() + b.toString())
    const compareB = parseInt(b.toString() + a.toString())
    return compareB - compareA
}


// 정담 2 - createhb21
function solution(numbers) {
    let stringNum = 
      numbers.map((el) => el + '').sort((a,b) => (b+a) - (a+b));
  
    return stringNum[0] === '0' ? '0' : stringNum.join('');
}