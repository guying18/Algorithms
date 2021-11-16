// 使用栈实现 十进制转二进制函数
function toBinary (num) {
  const stack = []
  while (num > 0) {
    let res = num % 2
    // console.log(res)
    stack.push(res)
    num = Math.floor(num / 2)
  }

  let str = ''
  while (stack.length) {
    const n = stack.pop()
    str += n
  }
  console.log(str)
  return str
}

toBinary(35)

console.log(parseInt(35, 10).toString(2))
console.log(parseInt('100011', 2))