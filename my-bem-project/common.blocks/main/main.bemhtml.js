block('main').content()(function() {
    return[
        {
            block: 'wrapper',
            content: [
                {
                    block: 'promo',
                    mix: {block: 'main', elem: 'promo-desktop'},
                    content: [
                        {
                            elem: 'left',
                            mix: {block: 'text', mods: {height: 'more'}},
                            content: [
                                {
                                    tag: 'h3',
                                    content: 'Добрые новости!'
                                },
                                {
                                    tag: 'p',
                                    content: 'У нас на сайте вы не найдете плохих новостей. Наш сайт призван бороться с негативом в интернете и заставит вас улыбаться. Прочитайте наши новости и убедитесь сами!'
                                }
                            ]
                        },
                        {
                            tag: 'img',
                            elem: 'picture',
                            mix: 'picture',
                            attrs: {src: 'img/cat.png', alt: 'cat'}
                        }
                    ]
                },
                {
                    block: 'promo',
                    mix: {block: 'main', elem: 'promo-mobile'},
                    content: [
                        {
                            tag: 'h3',
                            content: 'Добрые новости!'
                        },
                        {
                            tag: 'img',
                            elem: 'picture',
                            mix: {block: 'picture'},
                            attrs: {src: 'img/cat.png', alt: 'cat'}
                        },
                        {
                            tag: 'p',
                            content: 'У нас на сайте вы не найдете плохих новостей. Наш сайт призван бороться с негативом в интернете и заставит вас улыбаться. Прочитайте наши новости и убедитесь сами!'
                        }
                    ]
                },
                {
                    block: 'info',
                    content: [
                        {
                            elem: 'category',
                            content: [
                                {
                                    tag: 'h3',
                                    content: 'Наши категории:'
                                },
                                {
                                    tag: 'ul',
                                    elem: 'list',
                                    mix: {block: 'list'},
                                    content: [
                                        {
                                            tag: 'li',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    block: 'link',
                                                    attrs: {href: '#'},
                                                    content: 'Коты'
                                                }
                                            ]
                                        },
                                        {
                                            tag: 'li',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    block: 'link',
                                                    attrs: {href: '#'},
                                                    content: 'Хвосты'
                                                }
                                            ]
                                        },
                                        {
                                            tag: 'li',
                                            content: [
                                                {
                                                    tag: 'a',
                                                    block: 'link',
                                                    attrs: {href: '#'},
                                                    content: 'И остальное'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'news',
                            mix: {block: 'text', mods: {height: 'more'}},
                            content: [
                                {
                                    elem: 'title',
                                    content: [
                                        {
                                            tag: 'h3',
                                            content: 'Поговорим о пчёлах'
                                        },
                                        {
                                            tag: 'img',
                                            elem: 'picture',
                                            mix: {block: 'picture'},
                                            attrs: {src: 'img/bee.png', alt: 'bee'}
                                        }
                                    ]
                                },
                                {
                                    tag: 'p',
                                    content: 'Согласно последнему отчету эколгов из Швейцарии, инновационные методы ухода за пчелами, разработанные в рамках многостороннего сотрудничества между учеными, пчеловодами и правительственными агентствами, привели к улучшению ситуации с этими поллинизаторами.'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
})
