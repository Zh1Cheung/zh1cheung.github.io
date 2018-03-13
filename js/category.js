$(function() {
    var bookcase = {
        html: function (category, name, url) {
            var html = '<li title="'+ name +'" data-pile="'+ category +'">' +
                '<a href="###">' +
                '<span class="tp-info">' +
                '<span>'+ name +'</span>' +
                '</span>' +
                '<img src="'+ url +'?imageView2/2/w/120/interlace/1" />' +
                '</a>' +
                '</li>';
            return html;
        },

        add: function (category, book) {
            var _this = this;
            var html = _this.html(category, book.name, book.url);
            $('#tp-grid').append(html);
        },

        init: function (books) {
            var _this = this;
            // 生成列表
            $.each(books, function (k ,v) {
                // 正在看 和 准备看
                switch (v.reading) {
                    case 1:
                        _this.add('正在看', v);
                        break;

                    case 2:
                        _this.add('准备看', v);
                        break;
                    default :
                    //
                }

                // 分类
                switch (v.type) {
                    case '前端':
                        _this.add('前端', v);
                        break;
                    case '后端':
                        _this.add('后端', v);
                        break;
                    case '数据库':
                        _this.add('数据库', v);
                        break;
                    case '人物传记':
                        _this.add('人物传记', v);
                        break;
                    case '运动健身':
                        _this.add('运动健身', v);
                        break;
                    case '小说':
                        _this.add('小说', v);
                        break;
                    case '散文':
                        _this.add('散文', v);
                        break;
                    case '两性':
                        _this.add('两性', v);
                        break;
                    case '其他':
                        _this.add('其他', v);
                        break;
                    default :
                    //
                }
            });

            // 排序
            $('[data-pile="正在看"]').appendTo('#tp-grid');
            $('[data-pile="准备看"]').appendTo('#tp-grid');
            $('[data-pile="后端"]').appendTo('#tp-grid');
            $('[data-pile="数据库"]').appendTo('#tp-grid');
            $('[data-pile="前端"]').appendTo('#tp-grid');
            $('[data-pile="人物传记"]').appendTo('#tp-grid');
            $('[data-pile="运动健身"]').appendTo('#tp-grid');
            $('[data-pile="小说"]').appendTo('#tp-grid');
            $('[data-pile="散文"]').appendTo('#tp-grid');
            $('[data-pile="两性"]').appendTo('#tp-grid');
            $('[data-pile="其他"]').appendTo('#tp-grid');

        }
    }

    bookcase.init(window.books);
    var $grid = $('#tp-grid'),
        $name = $('#name'),
        $close = $('#close');

    var stapel = $grid.stapel({
        delay: 10,
        onLoad: function () {
            $('.fa-spinner').fadeOut();
        },
        onBeforeOpen: function (pileName) {
            $name.html(pileName);
        },
        onAfterOpen: function () {
            $close.fadeIn();
        }
    });

    $close.on('click', function () {
        $close.hide();
        $name.empty();
        stapel.closePile();
    });

} );