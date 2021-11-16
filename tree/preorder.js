const bt = require('./bt');

// 先序遍历二叉树(递归版)
const preorder = (root) => {
  if (!root) { return; }
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}

// 先序遍历二叉树(非递归版)
const preorder = (root) => {
  if (!root) { return; }
  const stack = [root];
  while (stack.length) {
    // 根节点出栈并访问
    const n = stack.pop()
    console.log(n.val);
    // 因为栈是后进先出，为了先访问 left，需将 right 先进栈
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }
}

preorder(bt);