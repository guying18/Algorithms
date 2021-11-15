const bt = require('./bt');

// 先序遍历二叉树
const preorder = (root) => {
  if (!root) { return; }
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}

preorder(bt);