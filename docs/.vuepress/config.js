const path = require('path');
const fs = require('fs');
module.exports = {
  title: '博客',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '技术', link: '/learning-notes/' },
      { text: '读书', link: '/reading/' },
      { text: '组件', link: '/component/' },
      { text: '面试题', link: '/interview/' },
      { text: '关于', link: '/about/' }
    ],
    sidebar: {
      '/learning-notes/': [
        {
          title: "Node.js",
          collapsable: true,
          children: genSidebarConfig("learning-notes/node", true)
        },
        {
          title: "Vue",
          collapsable: true,
          children: genSidebarConfig("learning-notes/vue", true)
        }, {
          title: "JS",
          collapsable: true,
          children: genSidebarConfig("learning-notes/js", true)
        },
        {
          title: "微信小程序",
          collapsable: true,
          children: []
        }
      ],
      '/interview/': [
        {
          title: "Vue面试题",
          collapsable: true,
          children: genSidebarConfig("interview/vue", true)
        },
        {
          title: "慕课网前端跳槽面试必备技巧",
          collapsable: true,
          children: genSidebarConfig("interview/muke", true)
        },
      ],
      '/reading/': [
        {
          title: "读书笔记",
          collapsable: true,
          children: genSidebarConfig("reading/reading-notes", true)
        }
      ]
    }

  }
}

function genSidebarConfig(dir, hasSub) {
  let p = path.join(__dirname, '../', dir);
  let files = fs.readdirSync(p);
  let subDir = hasSub ? dir.split('/')[1] : '';
  files = files.map(item => {
    item = subDir ? subDir + '/' + path.basename(item, '.md') : path.basename(item, '.md');
    return item;
  });
  return files;
}
console.log(genSidebarConfig("learning-notes/js", true))