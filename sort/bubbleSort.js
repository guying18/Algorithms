// 冒泡排序
Array.prototype.bubbleSort = function () {
  // console.log(this);
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      // console.log(this[j], this[j + 1]);
      if (this[j] > this[j + 1]) {
        const temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
    // console.log(this);
  }
}

const arr = [5, 4, 3, 2, 1];
arr.bubbleSort();