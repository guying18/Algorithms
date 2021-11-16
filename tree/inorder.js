const bt = require('./bt');

// 中序遍历二叉树(递归版)
const inorder = (root) => {
  if (!root) { return; }
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}

// 中序遍历二叉树(非递归版)
const inorder = (root) => {
  if (!root) { return; }
  const stack = [];
  // p 指针先指向根节点
  let p = root;
  while (stack.length || p) {
    // 将所有左节点入栈
    while (p) {
      stack.push(p);
      p = p.left;
    }
    // 将栈顶对应的左节点出栈并访问
    const n = stack.pop()
    console.log(n.val);
    // 指针指向右节点
    // (此时n的右节点为空，因此会再次出栈上一级的左节点，对其右节点进行中序遍历)
    p = n.right
  }
}

inorder(bt);