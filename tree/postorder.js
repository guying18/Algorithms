const bt = require('./bt');

// 后序遍历二叉树(递归版)
const postorder = (root) => {
  if (!root) { return; }
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}

// 后序遍历二叉树(非递归版)
// 后序遍历顺序为：左→右→根，其反向为：根→右→左
const postorder = (root) => {
  if (!root) { return; }
  // outputStack 用于将先序遍历的结果反向输出
  const outputStack = [];
  const stack = [root];
  while (stack.length) {
    // 根节点出栈 stack，并入栈 outputStack
    const n = stack.pop();
    outputStack.push(n);
    // 因为栈是后进先出，为了先访问 right ，需将 left 先进栈
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  while (outputStack.length) {
    const n = outputStack.pop();
    console.log(n.val);
  }
}

postorder(bt);