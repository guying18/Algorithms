const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: []
        },
        {
          val: 'e',
          children: []
        }
      ]
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: []
        },
        {
          val: 'g',
          children: []
        }
      ]
    }
  ]
}

const dfs = (root) => {
  console.log(root.val);
  // forEach 接收一个函数作为参数， 因此以下回调函数可以简写
  // root.children.forEach(child => { dfs(child) });
  root.children.forEach(dfs);
}

dfs(tree)