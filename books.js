var imgUrl = 'http://mingmings.qiniudn.com/book/';
/* 1：在看 2：待看 3 归档 */

var books = [
    //{ name: '',
    //    url: imgUrl + '', reading: 2 },
    { name: 'Redis 设计与实现',
        url: imgUrl + 'redis 设计与实现.jpg', type: '数据库', reading: 1 },
    { name: 'Redis cookbook',
        url: imgUrl + 'redis cookbook.jpg', type: '数据库', reading: 1 },
    { name: '深入云计算 Mongodb 管理与开发实战详解',
        url: imgUrl + '深入云计算 mongodb 管理与开发实战详解.jpg', type: '数据库', reading: 1 },
    { name: 'HTML与CSS入门经典（第8版）',
        url: imgUrl + 'HTML与CSS入门经典（第8版）.jpg', type: '前端', reading: 1 },


    { name: '高性能MySQL',
        url: imgUrl + '高性能MySQL.jpg', reading: 2 },
    { name: 'Redis in Action',
        url: imgUrl + 'redis in action.jpg', reading: 2 },
    { name: 'Mongodb in Action',
        url: imgUrl + 'mongodb实战.jpg', reading: 2 },
    { name: 'Mongodb 权威指南',
        url: imgUrl + 'mongodb权威指南.jpg', reading: 2 },
    { name: '挪威的森林',
        url: imgUrl + '挪威的森林.jpg', reading: 2 },
    { name: '世界尽头与冷酷仙境',
        url: imgUrl + '世界尽头与冷酷仙境.jpg', reading: 2 },
    { name: '性史1926',
        url: imgUrl + '性史1926.jpg', reading: 2 },
    { name: '清教徒的礼物',
        url: imgUrl + '清教徒的礼物.jpg', reading: 2 },
    { name: '浪潮之巅',
        url: imgUrl + '浪潮之巅.jpg', reading: 2 },
    { name: '黑客与画家',
        url: imgUrl + '黑客与画家.jpg', reading: 2 },

    { name: 'Redis 入门指南',
        url: imgUrl + 'redis 入门指南.jpg', type: '数据库', reading: 3 },


    { name: '实战 linux shell 编程与服务器管理',
        url: imgUrl + '实战 linux shell 编程与服务器管理.jpg', type: '后端', reading: 3 },
    { name: '鸟哥的linux私房菜',
        url: imgUrl + '鸟哥的linux私房菜.jpg', type: '后端', reading: 3 },
    { name: 'AWS云端企业实战圣经',
        url: imgUrl + 'AWS云端企业实战圣经.jpg', type: '后端', reading: 3 },


    { name: 'head first html 与 css（第二版）',
        url: imgUrl + 'head first html 与 css（第二版）.jpg', type: '前端', reading: 3 },


    { name: '不在沉默的猪',
        url: imgUrl + '不在沉默的猪.jpg', type: '人物传记', reading: 3 },
    { name: '向前一步',
        url: imgUrl + '向前一步.jpg', type: '人物传记', reading: 3 },
    { name: '史蒂夫·乔布斯传',
        url: imgUrl + '斯蒂文乔布斯传.jpg', type: '人物传记', reading: 3 },
    { name: '看见',
        url: imgUrl + '看见.jpg', type: '人物传记', reading: 3 },
    { name: '我不要你死于一事无成',
        url: imgUrl + '我不要你死于一事无成.jpg', type: '人物传记', reading: 3 },


    { name: '不能承受的生命之轻',
        url: imgUrl + '不能承受的生命之轻.jpg', type: '小说', reading: 3 },
    { name: '源泉',
        url: imgUrl + '源泉.jpg', type: '小说', reading: 3 },
    { name: '疯狂的程序员',
        url: imgUrl + '疯狂的程序员.jpg', type: '小说', reading: 3 },


    { name: '轻风茗月品女人',
        url: imgUrl + '轻风茗月品女人.jpg', type: '散文', reading: 3 },


    { name: '波利泰里尼网球手册',
        url: imgUrl + '波利泰里尼网球手册.jpg', type: '运动健身', reading: 3 },
    { name: '健美肌肉功能图解',
        url: imgUrl + '健美肌肉功能图解.jpg', type: '运动健身', reading: 3 },
    { name: '力量与搏击训练',
        url: imgUrl + '力量与搏击训练.jpg', type: '运动健身', reading: 3 },
    { name: '家庭健美训练图解',
        url: imgUrl + '家庭健美训练图解.jpg', type: '运动健身', reading: 3 },
    { name: '手臂肌肉训练',
        url: imgUrl + '手臂肌肉训练.jpg', type: '运动健身', reading: 3 },
    { name: '腹部肌肉训练',
        url: imgUrl + '腹部肌肉训练.jpg', type: '运动健身', reading: 3 },
    { name: '肌肉健美图解',
        url: imgUrl + '肌肉健美图解.jpg', type: '运动健身', reading: 3 },

    { name: '罗织经',
        url: imgUrl + '罗织经.jpg', type: '其他', reading: 3 },
    { name: '没有任何借口',
        url: imgUrl + '没有任何借口.jpg', type: '其他', reading: 3 },
    { name: '高效能人士的七个习惯',
        url: imgUrl + '高效能人士的七个习惯.jpg', type: '其他', reading: 3 },
    { name: '这样读书就够了',
        url: imgUrl + '这样读书就够了.jpg', type: '其他', reading: 3 },
    { name: '如何阅读一本书',
        url: imgUrl + '如何阅读一本书.jpg', type: '其他', reading: 3 },
    { name: '时间管理',
        url: imgUrl + '时间管理.jpg', type: '其他', reading: 3 }
];
