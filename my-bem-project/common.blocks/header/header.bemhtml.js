block('header').content()(function() {
    return[
        {
            block: 'wrapper',
            content: [
                {
                    block: 'header',
                    elem: 'top',
                    content: [
                        {
                            tag: 'a',
                            attrs:{href: "#"},
                            content: [
                                {
                                    tag: 'img',
                                    block: 'logo',
                                    attrs:{src: 'img/socials.png', alt: 'socials'}
                                }
                            ]

                        },
                        {
                            tag: 'form',
                            elem: 'form',
                            mix: {block: 'search-form'},
                            content: [
                                {
                                    tag: 'input',
                                    elem: 'search',
                                    attrs: {type: 'search', name: 'search'},
                                    mix: {block: 'search-form', elem: 'input'}
                                },
                                {
                                    tag: 'button',
                                    elem: 'button',
                                    mix: {block: 'button'},
                                    content: "Поиск"
                                }
                            ]
                        },
                        {
                            tag: 'a',
                            elem: 'telephone-icon',
                            mix: {block: 'link'},
                            attr: {href: 'tel:+78005353535'},
                            content: [
                                {
                                    tag: 'img',
                                    elem: 'icon',
                                    mix: {block: 'telephone-icon'},
                                    attrs:{src: 'img/tel.png', alt: 'tel'}
                                }
                            ]
                        },
                        {
                            tag: 'a',
                            elem: 'telephone-numb',
                            mix: {block: 'link'},
                            attrs:{href: 'tel:+78005353535'},
                            content: '+7 (800) 535-35-35'
                        }
                    ]
                },
                {
                    block: 'header',
                    elem: 'down',
                    content: [
                        {
                            tag: 'ul',
                            elem: 'menu-list',
                            mix: {block: 'list'},
                            content: [
                                {
                                    tag: 'li',
                                    elem: 'menu-item',
                                    content: [
                                        {
                                            tag: 'a',
                                            elem: 'link',
                                            mix: {block: 'link'},
                                            content: [
                                                    'Новости'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    tag: 'li',
                                    elem: 'menu-item',
                                    content: [
                                        {
                                            tag: 'a',
                                            elem: 'link',
                                            mix: {block: 'link'},
                                            content: 'Общение'
                                        }
                                    ]
                                },
                                {
                                    tag: 'li',
                                    elem: 'menu-item',
                                    content: [
                                        {
                                            tag: 'a',
                                            elem: 'link',
                                            mix: {block: 'link'},
                                            content: 'Помощь'
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]

        }
    ];
})
