import React from 'react'

class MHF extends React.Component {
    constructor() {
        super()
        this.state = {
            style1: {},
            style2: {},
            hkhfs: [
                {
                    name: "邪", time: 1980, sort: ["惊悚", "恐怖", "犯罪"], actress: ["恬妮", "尤翠玲", "陈家奇", "曹达华"], director: "桂治洪", length: "82", region: "香港", language: "粤语", source: ["bilibili"], introduction: `
                桂治洪“邪”三部曲之首。民国初年，广州西关陈家家道已中落到，只剩陈秀英（恬妮）、其入赘的丈夫杨振宇（王戎）及服侍秀英的丫环。秀英体弱多病，稍一走动便会连咳不止，振宇是赌徒加酒徒，在外一遇不顺心事，便会对秀英及丫环拳打脚踢，丫环无法再忍，别秀英归家。
　　这日秀英迎来自称陈府仆人之女的梁绮华（陈思佳）。见秀英身虚体弱，绮华表示愿留下将她照料，秀英将振宇恶习说明，绮华仍毫无犹豫，秀英感激不尽。对这位新来的丫环，振宇自没给予特殊优待，但绮华也非“善类”，某日她瞅准机会联合秀英将振宇杀害。秀英从此陷入恐慌，终被振宇的“鬼魂”吓死。她至死不知的是，绮华原是振宇的情人，而振宇与绮华亦没想到，秀英竟然“阴魂不散”。
                `},
                {
                    name: "魔", time: 1980, sort: ["剧情", "恐怖", "奇幻"], actress: ["高飞", "王龙威", "林晓燕", "徐锦江"],director: "桂治洪", length: "105",region: "香港",language: "粤语", introduction: `
                    黑道分子陈雄（高飞 饰）也是一名拳场高手，其弟与一名泰拳王交手，不辛被对方贱招暗算致残。陈雄本人也遇上了麻烦：大陆帮派将他诱入埋伏，幸而一红光幻象中的高僧出现，解了陈雄之围。陈雄为了给亲弟报仇，远赴泰国与泰拳王约战，期间陈雄偶然经过一座寺院，恰似红光幻象中的情形。院方僧人竟然早知陈雄身份与来意，原来这里的清照大师（徐锦江 饰）收服了一名降头师，召来其师傅的复仇，清照大师接近修成的金身被破，唯有与清照大师前世为孪生兄弟的陈雄有希望助大师完成金身，清除一众降头师。自此陈雄出家，苦修佛法，与多名降头师展开连串惊心动魄、超出凡人知识的斗法。
                    `
                },
                {
                    name: "油鬼子", time: 1980, sort: ["剧情", "恐怖", "奇幻"], actress: ["高飞", "王龙威", "林晓燕", "徐锦江"],director: "桂治洪", length: "105",region: "香港",language: "粤语", introduction: `
                    本片由蔡澜编剧，何梦华导演在南洋拍摄的灵异电影。故事发生在南洋，青年沈元的亡父与林亚峇为生死之交。沈父曾在林的背上刺有神秘图案；后林为保护女儿中月而杀了人，被判死刑。林被处死前，让沈把图案描下，此图案实际是一道有特殊功能的符。按图文指示，就会变成威力无穷的油鬼子；沈元变作油鬼子后，救了心仪女子亦杀了不少坏人，但最后却陷入疯狂状态……
                    `
                },
                {
                    name: "蛊", time: 1981, sort: ["剧情", "奇幻", "恐怖"], actress: ["黄锦乐", "艾飞", "徐建华"], director: "桂治洪", length: "102",region: "香港",language: "粤语", introduction: `
                    中國西南深山部落謠傳著古老巫術「蠱」。女孩用它守護愛情，讓愛郎永不變心。蠱蟲養在鼓囊沉睡，在鼓聲中驚醒互食，杵搗與女孩滴血浸濡，摻和巫術咒語，將造一縷縷永恆堅定的千古信念……。
                    `
                },
                {
                    name: "尸妖", time: 1981, sort: ["悬疑", "惊悚", "恐怖"], actress: ["恬妮", "王戎", "尤翠玲", "陈家奇"],director: "桂治洪", length: "82",region: "香港",language: "粤语", introduction: `
                    广州地方上搬来了一对儿怪异情侣，他们居住的荒僻院落绝少有人出入且传出恶臭，不堪忍受的邻居们破门而入，发现此时已不见踪影的李姓男子居然奸尸。广州警察总局刑侦处张处长（王戎 饰）为调查奸尸案前往佛山，始知两年前当地富家公子李正元（陈家奇 饰）从醉红轩兰姑（恬妮 饰）手中买下重病妓女红眉，在红眉去世后奸尸多日，案发后被关入疯人院。张处长料想最近的奸尸案亦为李正元所做，而李家祖宅内的新女尸和被刺死的巡警证明李正元已经返回佛山。不久张处长发现李正元似乎有意针对醉红轩的妓女下手，经调查发现兰姑曾经从李正元手中诈骗巨款。而此时，获悉李正元从疯人院出院消息的兰姑等人惶惶不可终日……
                    `
                },
                {
                    name: "降头", time: 1975, sort: ["惊悚", "恐怖", "奇幻"], actress: ["罗烈", "狄龙", "李丽丽", "恬妮"], director: "何梦华", length: "93",region: "香港",language: "普通话", introduction: `
                    许洛（狄龙 饰）和未婚妻王菊英（李丽丽 饰）交往多年，彼此之间感情十分要好，终于，两人决定步入婚姻的殿堂，然而，就在婚礼的当天，许洛竟然抛弃了王菊英，和名叫罗茵（恬妮 饰）的寡妇走到了一起。原来，罗茵一直苦苦单恋着许洛，无奈流水无情，于是，罗茵找到了一位邪恶的降头师（谷峰 饰），让降头师在许洛身上施法。
　　                 王菊英在偶然之中知道了事件的真相，并且震惊得知自己已经被下了致命的“死降”，愤怒的她找到了另一位降头师，想要和罗茵对抗。与此同时，罗茵的前男友梁家杰（罗烈 饰）亦加入了战局之中想要夺回自己的爱人，一场混战即将拉开序幕。
                    `
                },
                {
                    name: "飞尸", time: 1975, sort: ["动作", "恐怖"], actress: ["罗烈", "谷峰", "白彪"], director: "孙仲", length: "92",region: "香港",language: "粤语", introduction: `
                    本片为邵氏一部很经典的早期恐怖作品,导演孙仲把一个普通的冤鬼复仇的故事拍得百转千回扣人心弦.不光极尽恐怖惊悚邪异奇幻之能事,还几乎都是打着讽喻人世间情仇爱恨的招魂幡做警示恒言,这也增加了影片在故事上的可看度以及现实感.本片挂靠着尸变,红衣厉鬼,僵尸的元素上演了一段复仇戏码,小镇就几乎像是当时香港社会的缩影
                    `
                },
                {
                    name: "鬼眼", time: 1974, sort: ["恐怖", "奇幻"], actress: ["陈思佳", "思维", "夏萍"], director: "桂治洪", length: "98",region: "香港",language: "普通话", introduction: `
                    由澳门赴港工作的美容师王宝玲（陈思佳 饰）这天遇到一位风度翩翩的男客人，对方自称史仲杰（思维 饰），似乎对宝玲有意并以隐形眼镜相赠。但宝玲戴上眼镜之后频频见鬼，日渐憔悴，史仲杰更露出了真面目，三番五次迷诱宝玲，宝玲欲挣脱史仲杰的鬼上身控制但为时已晚，沉迷恐怖小说的男友（林伟图 饰）亦不相信宝玲所言。举目无援之下，宝玲沦为鬼仆，哄骗自己同事供史仲杰摧残。男友在史仲杰住处潜伏一夜后终于明白事情真相，与宝玲求得道士出山降鬼，岂料史仲杰手段更高一筹，反借宝玲之手杀死道士，宝玲男友也受连累身死。宝玲无依无靠只得避居乡下，史仲杰却步步紧逼……
                    `
                },
                {
                    name: "脑魔", time: 1983, sort: ["恐怖"], actress: [" 陳觀泰", "余安安", "楚湘雲", "羅烈", "金燕玲"],  director: "罗烈", length: "94",region: "香港",language: "普通话", introduction: `
                    印尼降头术与泰国四面佛大斗法
                    `
                },
                {
                    name: "灵魔", time: 1975, sort: ["恐怖"], actress: [" 苗可秀", "慕思成", "关山", "林嘉"],  director: "麦鹏展", length: "78",region: "香港",language: "粤语", introduction: `
                    天网灰灰，疏而不漏，无论你的恶毒阴谋设计得如何精密，冥冥中的主宰，是不会叫你好受，可能是出于良心作崇，杀妻者何志刚与新婚妻子蜜月期间，接连发生怪事，四围似乎鬼影重重，怪声阵阵，令到他太太神志恍惚，精神大受打击，愈来愈憔悴，最后，女鬼现形，狂追不舍，迫得志刚走投无路，不打自招使杀妻秘密披露，女鬼原来乃志刚亡妻，冤魂不散，俟机报复。
                    `
                },
                {
                    name: "鸦魔", time: 1975, sort: ["剧情", "恐怖"], actress: ["柯俊雄", "温柳媚", "宗由"], director: "王星磊", length: "102",region: "台湾",language: "普通话", introduction: `
                    中国民间传说在古代，成千上万的乌鸦随机攻击和杀害居民峰村外的长城。主丰合城的长老寻求更多的计划辩护惨败后企图通过当地的一个乐队的人，自己动手杀乌鸦。一个村民王茂胜分离自己从暴徒乞讨一著名的隐士捕鸟人东圣地址和镇压攻击。王先生和他的妹妹几乎失去生命后，董建华第一次灾难性的对抗。同时，希望村里的长老们借助东的叔叔建议有针对性的狩猎寻找并杀死乌鸦的头。村里庆祝胜利后通杀领袖乌鸦然而他很快就意识到，他们的死亡只不过是一个物理和精神，主后，冯的孙子突然被一股神秘的力量，来自邪恶的羊。现在其余的羊群双打在规模和实力与即将来临的恐惧更多的伤亡来。一心维护家庭的荣誉和完成他的任务，桐现在必须面对属灵的挑战和前景的物理殉难粉碎乌鸦和恢复平衡自然村。
                    `
                },
                {
                    name: "车魂", time: 1983, sort: ["恐怖"], actress: [" 郑则仕", "魏秋烨", "艾迪", "王克"],  director: "卢宝伦", length: "90",region: "香港",language: "粤语/英语", introduction: `
                    敘述一個出門幫媽媽買藥的小女孩被車撞死. 然後變成鬼魂復仇的故事
                    `
                },
                {
                    name: "凌晨晚餐", time: 1983, sort: ["剧情", "恐怖"], actress: [" 郑则仕", "朱宝意", "关朝聪", "黄柏文", "午马"],  director: "王钟", length: "86",region: "香港",language: "粤语", introduction: `
                    接连出现的凶杀案让警方陷入了焦头烂额之中，他们一边要寻找案件的真凶，一边要提防着媒体报道这些看上去十分诡异的案件。寥直彪（郑则仕 饰）是一名记者，对案件十分好奇，无意之中遇见了目击证人林安芝（朱宝意 饰），林安芝的口供证实了寥直彪对案件的种种猜测，他怀疑，背后的真凶很有可能是凶残的吸血鬼。
　　其实，吸血鬼一直都潜伏在寥直彪的身边，寥直彪拍下了它的照片刊登在报纸上，却遭到了警方的投诉。之后，寥直彪数次遭遇吸血鬼，却屡屡被后者逃脱。寥直彪发现吸血鬼盯上了林安芝，遂前去保护，双方一番恶战，幸运的是，正义最终战胜了邪恶。
                    `
                },

            ],
            jiangshi: [
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
　　                令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
                　　令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
　　                令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
                　　令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
                　　令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
                　　令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
　　                令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
　　                令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
            ],
            sangshi: [
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
　　                令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
                　　令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
　　                令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
                　　令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
                　　令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
                　　令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
　　                令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
                {name: "僵尸道长", director: "刘观伟", actress: "元彪/李赛凤/林正英/楼南光", sort: "惊悚/喜剧", length: "89", region: "香港", language: "粤语", introduction:`
                毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
　　                令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。`},
            ],
        }
    }
    getThird = (e) => {
        // document.getElementById("firstSort").click()
        // document.getElementById("firstSort").click()
    }
    render() {
        return <div>
            <p>
            <a id="firstSort" className="btn btn-primary" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                香港经典恐怖片
            </a>
            <button id="secondSort" className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                日韩恐怖片
            </button>
            <button onClick={this.getThird} className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                僵尸vs丧尸
            </button>
            </p>
            <div className="collapse" id="collapseExample1">
            <div className="card card-body">
                {this.state.hkhfs.map(val => {
                    return <div className="hk" key={this.state.hkhfs.indexOf(val)}> 
                        <div className="media">
                        <img src={`http://127.0.0.1:3200/public/hkhf/${val.name}.jpg`} className="mr-3 hkhf" alt="..." />
                        <div className="media-body">
                        <h4 className="mt-0">{val.name}({val.time})</h4>
                        <p>导演: {val.director}</p>
                        <p>主演: {val.actress.map(valu => {
                            if (val.actress[val.actress.indexOf(valu) + 1]) {
                                return valu + "/"
                            } else {
                                return valu
                            }
                        })}</p>
                        <p>类型: {val.sort.map(valu => {
                            if (val.sort[val.sort.indexOf(valu) + 1]) {
                                return valu + "/"
                            } else {
                                return valu
                            }
                            
                        })}</p>
                        <p>地区: {val.region}</p>
                        <p>片长: {val.length}</p>
                        <p>语言: {val.language}</p>
                        </div>
                        </div>
                        <div className="jj">
                            <p>{val.name}的剧情简介：</p>
                            <p>&emsp;{val.introduction}</p>
                        </div>
                        <div className="alert alert-success">
                            <p>影片资源地址：</p>
                            <a href="#">https://movie.douban.com/subject/4325960/?from=subject-page</a>&emsp;&emsp;&emsp;<a href="#">https://movie.douban.com/subject/4325960/?from=subject-page</a>
                        </div>
                        <hr className="my-4"></hr>
                    </div>
                })}
            </div>
            </div>
            <div className="collapse" id="collapseExample2">
            <div className="card card-body">
                2Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
            </div>
            <div className="collapse" id="collapseExample3">
                <div className="card card-body jsss">
                    <div>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                <img src="http://127.0.0.1:3200/public/js/僵尸道长.jpg" className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                <div className="card-body jsc">
                                    <h5 className="card-title">僵尸道长</h5>
                                    <p className="card-text">导演：刘观伟</p>
                                    <p className="card-text">主演：元彪/李赛凤/林正英/楼南光</p>
                                    <p className="card-text">类型：惊悚/喜剧</p>
                                    <p className="card-text">片长：89分钟</p>
                                    <p className="card-text">地区：香港</p>
                                    <p className="card-text">语言：粤语/普通话</p>
                                    <p className="card-text">上映日期：1986-08-15</p>
                                    <p className="card-text">剧情简介：毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
　　令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="http://127.0.0.1:3200/public/js/僵尸家族.jpg" className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                <div className="card-body jsc">
                                    <h5 className="card-title">僵尸家族</h5>
                                    <p className="card-text">导演：刘观伟</p>
                                    <p className="card-text">主演：元彪/李赛凤/林正英/楼南光</p>
                                    <p className="card-text">类型：惊悚/喜剧</p>
                                    <p className="card-text">片长：89分钟</p>
                                    <p className="card-text">地区：香港</p>
                                    <p className="card-text">语言：粤语/普通话</p>
                                    <p className="card-text">上映日期：1986-08-15</p>
                                    <p className="card-text">剧情简介：一次偶然中，古董商人郭敦煌（钟发 饰）和其徒弟发现了一座古墓，墓中躺着三具额头上贴有符纸的僵尸，在僵尸的身上，郭敦煌发现了生财之道，却在无意之中将镇压僵尸的符纸弄掉，引得僵尸复活，他的徒弟亦因为和僵尸搏斗而身负重伤。
　　郭敦煌一行人找到了林医生（林正英 饰），求其救治，林医生告诉三人，僵尸十分危险，必须将其彻底消灭。然而，郭敦煌却并不愿意放弃好不容易弄到手的摇钱树，与此同时，警方亦闻风而动，情势十分混乱。男僵尸（张荣祥 饰）和女僵尸（王玉环 饰）千方百计寻找逃脱的办法，小僵尸（何建成 饰）却和人类小孩交起了朋友。</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                <img src="http://127.0.0.1:3200/public/js/僵尸道长.jpg" className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                <div className="card-body jsc">
                                    <h5 className="card-title">丧尸出笼</h5>
                                    <p className="card-text">导演：刘观伟</p>
                                    <p className="card-text">主演：元彪/李赛凤/林正英/楼南光</p>
                                    <p className="card-text">类型：惊悚/喜剧</p>
                                    <p className="card-text">片长：89分钟</p>
                                    <p className="card-text">地区：香港</p>
                                    <p className="card-text">语言：粤语/普通话</p>
                                    <p className="card-text">上映日期：1986-08-15</p>
                                    <p className="card-text">剧情简介：毛小方（林正英 饰）和七姊妹堂堂主钟君（苑琼丹 饰）之间的矛盾由来已久人尽皆知，然而，钟君的弟弟钟邦（王书麒 饰）实则五世奇人，毛小方得知此时后十分想要收他为徒。一次偶然中，毛小方结识了名为杨飞云（徐少强 饰）的男子，两人相见恨晚，相谈甚欢，很快便成为了好友。
　　令毛小方没有想到的是，杨飞云人面兽心，他设计陷害毛小方，使得毛小方与钟邦反目成仇。就在毛小方最失落的时候，是钟君一直陪伴在他身旁，两人之间的矛盾和误会烟消云散。杨飞云和僵尸王（李道洪 饰）同流合污，企图祸害人间，毛小方决心阻止此事，一场大战即将拉开序幕。</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="http://127.0.0.1:3200/public/js/僵尸家族.jpg" className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                <div className="card-body jsc">
                                    <h5 className="card-title">我是传奇</h5>
                                    <p className="card-text">导演：弗朗西斯·劳伦斯</p>
                                    <p className="card-text">主演： 威尔·史密斯/艾莉丝·布拉加/查理·塔汉/莎莉·理查德森/薇洛·史密斯 </p>
                                    <p className="card-text">类型：剧情/科幻/惊悚</p>
                                    <p className="card-text">片长：101分钟</p>
                                    <p className="card-text">地区：美国</p>
                                    <p className="card-text">语言：英语</p>
                                    <p className="card-text">上映日期：1986-08-15</p>
                                    <p className="card-text">2012年，人类被不知名病毒感染，纽约成为一座空城。Robert Neville（Will Smith 饰）是为军方服务的科学家，也是对病毒有免疫力的幸存者。白天，他带着狗Sam在街道上寻找食物，用广播寻找幸存者，在实验室里研究治愈病毒的方法；晚上，他只能躲在屋子里，因为那些感染病毒而没有死亡的人们，成为了“夜魔”只能夜晚出来活动，丧失理智，会攻击所有的人。
　　某天，Sam也感染病毒死去，Robert Neville陷入了前所未有的孤独。当他准备和“夜魔”们同归于尽的时候，另外一个幸存者Anna(Alice Braga 饰)救了他。Anna相信山上的隔离区还有幸存者，但是固执的Robert Neville却坚持守在纽约。</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="changeGroup btn btn-success">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    }
}


export default MHF