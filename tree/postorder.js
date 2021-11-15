const bt = require('./bt');

// 后序遍历二叉树
const postorder = (root) => {
  if (!root) { return; }
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}

postorder(bt);