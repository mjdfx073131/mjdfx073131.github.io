const themeDots = document.getElementsByClassName('theme-dot');

var data = {
    "ca": {
        "name": "Hongkaiyue(Kerry) Zhou",
        "contact": "Contact",
        "bgc": '*Change the theme you'+ '<br/>'+ 'prefer',
        "quote": "“You can’t control what people say about you and what they think about you. You can’t plan for bad luck. You can only work your hardest and do your best and tell the truth. In the end, it’s the effort that matters. The rest is beyond your control.”" +' &nbsp'+ ' ― Maria Sharapova, Unstoppable: My Life So Far',
        "description_title": "What I Do",
        "description": "I am a full stack engineer that builds modern apps",
        "about_me_title": "About me",
        "self_introduction": "A fourth-year Computer Science student at University of British Columbia. Self-managed, motivated, and consistently devoting efforts into works to achieve the best result. A fast learner with great stress-tolerance and the enthusiasm of exceeding expectations.",
        "soccer": "I love Real Madrid! I am a 100% MADRIDISTA! Hala Madrid!",
        "tech_skills": "Technical skills",
        "download_resume": "Download Resume",
        "social_media": "Find me on LinkedIn & Github",
        "project_title": "Projects",
        "bss": "A small Domain Specific Language(DSL) compiler that compiles BSS into CSS so that it allows front-end developers to write CSS with nested style rules, variables, functions, control flow, mathematical operations & inheritance.",
        "bloggy": "A Single Page React Application which allows users to share blogs, and allows staff to filter articles by tags, monitor comments and visualize users’ statistics."
    },
    "cn": {
        "name": "周洪凯悦",
        "contact": "联系方式",
        "bgc": "设置主题颜色",
        "quote": "你无法控制人们对你的评价和他们对你的想法。你无法为厄运做好准备。你只能尽力而为，说实话。最后，最重要的是努力。其余的超出你的控制范围。 ― 玛丽亚·莎拉波娃（Maria Sharapova），《不可阻挡：我的人生至今》",
        "description_title": "个人简介",
        "description": "我是一个全栈软件工程师",
        "about_me_title": "关于我",
        "self_introduction": "英属哥伦比亚大学大四计算机在读本科生。善于自我管理，追求完美，具有很强的压力承受能力和超乎预期的热情。",
        "soccer": "我是皇家马德里铁粉！永远的马德里主义者！",
        "tech_skills": "专业技能",
        "download_resume": "个人简历",
        "social_media": "社交媒体",
        "project_title": "开源项目",
        "bss": "小型领域特定语言（DSL）编译器，它将BSS编译为CSS，以便前端开发人员可以使用嵌套的样式规则，变量，函数，控制流，数学运算和继承来编写CSS。",
        "bloggy": "单页React应用程序，使用户可以共享博客，并允许后台按标签过滤文章，监视评论并可视化用户的统计信息。"

    },
    "hk": {
        "name": "周洪凱悅",
        "contact": "聯繫方式",
        "bgc": "設置主題顏色",
        "quote": "你無法控制人們對你的評價和他們對你的想法。你無法為厄運做好準備。你只能盡力而為，說實話。最後，最重要的是努力。其餘的超出你的控制範圍。 ― 瑪麗亞·莎拉波娃（Maria Sharapova），《不可阻擋：我的人生至今》",
        "description_title": "個人簡介",
        "description": "我是一個全棧軟件工程師",
        "about_me_title": "關於我",
        "self_introduction": "英屬哥倫比亞大學大四計算機在讀本科生。善於自我管理，追求完美，具有很強的壓力承受能力和超乎預期的熱情。",
        "soccer": "我是皇家馬德里球迷！永遠的馬德里主義者！",
        "tech_skills": "專業技能",
        "download_resume": "個人簡歷",
        "social_media": "社交媒體",
        "project_title": "開源項目",
        "bss": "小型領域特定語言（DSL）編譯器，它將BSS編譯為CSS，以便前端開發人員可以使用嵌套的樣式規則，變量，函數，控制流，數學運算和繼承來編寫CSS。",
        "bloggy": "單頁React應用程序，使用戶可以共享博客，並允許後台按標籤過濾文章，監視評論並可視化用戶的統計信息。"
    },
    "jp": {
        "name": "川端春樹 かわばたはるき",
        "contact": "連絡先の詳細",
        "bgc": "テーマカラーを設定",
        "quote": "人々があなたをどう思うか、彼らがあなたをどう思うかを制御することはできません。不運に備えることはできません。あなたは最善を尽くして正直になることしかできません。最後に、最も重要なことはハードワークです。残りはあなたのコントロールを超えています。 ―マリア・シャラポワ、「止められない：今日の私の人生」",
        "description_title": "個人プロフィール",
        "description": "私はフルスタックソフトウェア開発エンジニアです",
        "about_me_title": "私について",
        "self_introduction": "ブリティッシュコロンビア大学の上級コンピューター学部生。自己管理、完璧の追求、強いストレス耐性、期待を超える熱意が得意です。",
        "soccer": "私はレアルマドリードのファンです！永遠のマドリディスト！",
        "tech_skills": "プロのスキル",
        "download_resume": "履歴書",
        "social_media": "ソーシャルメディア",
        "project_title": "オープンソースプロジェクト",
        "bss": "BSSをCSSにコンパイルする小さなドメイン固有言語（DSL）コンパイラ。これにより、フロントエンド開発者はネストされたスタイルのルール、変数、関数、制御フロー、数学演算、継承を使用してCSSを記述できます。",
        "bloggy": "単一ページのReactアプリケーションを使用すると、ユーザーはブログを共有でき、背景で記事をタグでフィルタリングしたり、コメントを監視したり、ユーザー統計を視覚化したりできます。"
    },
    "kr": {
        "name": "주정혁" //소프트웨어 공학자
    },
    "es": {
        "name": "Gabriel Zhou"
    },
    "fr": {
        "name": "Jean-Jacques Zhou"
    },
    "ae": {
        "name": "عبد الكريم" //Abd al Karim
    }
}
const langEl = document.getElementsByClassName('language');
// // const link = 
// langEl.forEach(el => {
//     el.addEventListener('click', function(){
//         console.log(el.getAttribute("id"))
//     })
// });
const title = document.getElementById('name');
const contact = document.getElementById('contact');
const bgc = document.getElementById('settings-note');
const description_title = document.getElementById('what-i-do');
const description = document.getElementById('description');
const quote = document.getElementById('quote');
const about_me_title = document.getElementById('about-me-title');
const self_intro = document.getElementById('self-introduction');
const soccer = document.getElementById('soccer');
const tech_skills = document.getElementById('technical-skills');
const resume = document.getElementById('download-resume');
const social_media = document.getElementById('social-media')
for (let i=0; langEl.length>i; i++) {
    langEl[i].addEventListener('click', function(){
        console.log(langEl[i].getAttribute("id"));
        title.textContent = data[langEl[i].getAttribute("id")]["name"];
        contact.textContent = data[langEl[i].getAttribute("id")]["contact"];
        bgc.innerHTML = data[langEl[i].getAttribute("id")]["bgc"];
        description_title.textContent = data[langEl[i].getAttribute("id")]["description_title"];
        description.textContent = data[langEl[i].getAttribute("id")]["description"];
        quote.innerHTML = data[langEl[i].getAttribute("id")]["quote"];
        about_me_title.textContent = data[langEl[i].getAttribute("id")]["about_me_title"];
        self_intro.textContent = data[langEl[i].getAttribute("id")]["self_introduction"];
        soccer.textContent = data[langEl[i].getAttribute("id")]["soccer"];
        tech_skills.textContent = data[langEl[i].getAttribute("id")]["tech_skills"];
        resume.textContent = data[langEl[i].getAttribute("id")]["download_resume"];
        social_media.textContent = data[langEl[i].getAttribute("id")]["social_media"];
    })
}
let theme = localStorage.getItem('theme')

if(theme === null) {
    setTheme('light')
} else {
    setTheme(theme)
}


for (let i=0; themeDots.length >i ; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTheme(mode)
    })
}


function setTheme(mode){
    if (mode === 'light'){
        document.getElementById('theme-style').href = "style.css"
    }

    if (mode === 'blue') {
        document.getElementById('theme-style').href = "blue.css"
    }

    if (mode === 'green') {
        document.getElementById('theme-style').href = "green.css"
    }

    if (mode === 'purple') {
        document.getElementById('theme-style').href = "purple.css"
    }

    localStorage.setItem('theme',mode);
}