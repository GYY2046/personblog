module.exports = {
    title: '顽石',
    description: '顽石个人博客',
    head: [
        ['link',
            { rel: 'icon', href: '/imgs/miao.jpg' }
        ]
    ],
    themeConfig: {
        logo: '/imgs/miao.jpg',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '分类',
                ariaLabel: '分类',
                items: [
                    { text: '文章', link: '/pages/article/article1.md' },
                    { text: '言语', link: '/pages/something/something1.md' }
                ]
            }
        ],
        sidebar: {
            '/pages/article/': [{
                title: '文章菜单1',
                // collapsable: false,
                // sidebarDepth: 1,
                children: [
                    ['article1.md', '文章1'],
                    ['article2.md', '文章2']
                ]
            }, ],
            '/pages/something/': [{
                title: '文章菜单2',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    ['something1.md', '文章1'],
                    ['something2.md', '文章2']

                ]
            }, ]
        }
    },

}