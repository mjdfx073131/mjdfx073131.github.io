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
        "social_media": "Find me on LinkedIn & GitHub",
        "project_title": "Projects",
        "bss": "A small Domain Specific Language(DSL) compiler that compiles BSS into CSS so that it allows front-end developers to write CSS with nested style rules, variables, functions, control flow, mathematical operations & inheritance.",
        "bloggy": "A Single Page React Application which allows users to share blogs, and allows staff to filter articles by tags, monitor comments and visualize users’ statistics.",
        "messageList": "A MERN (MongoDB + Express + React + Node.js) app which also uses Redux to monitor states and deploy to Heroku. MessageList allows user to add/edit/delete messages." + '<a href="https://quiet-mountain-30375.herokuapp.com" >Link</a>',
        "read_more": "Read More",
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
        "bloggy": "单页React应用程序，使用户可以共享博客，并允许后台按标签过滤文章，监视评论并可视化用户的统计信息。",
        "messageList": "一个MERN（MongoDB + Express + React + Node.js）应用程序，它也使用Redux监视状态并部署到Heroku。 MessageList允许用户添加/编辑/删除消息。" + '<a href="https://quiet-mountain-30375.herokuapp.com" >链接</a>',
        "read_more": "戳这里",

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
        "bloggy": "單頁React應用程序，使用戶可以共享博客，並允許後台按標籤過濾文章，監視評論並可視化用戶的統計信息。",
        "messageList": "一個MERN（MongoDB + Express + React + Node.js）應用程序，它也使用Redux監視狀態並部署到Heroku。 MessageList允許用戶添加/編輯/刪除消息。" + '<a href="https://quiet-mountain-30375.herokuapp.com" >鏈接</a>',
        "read_more": "了解更多",
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
        "bloggy": "単一ページのReactアプリケーションを使用すると、ユーザーはブログを共有でき、背景で記事をタグでフィルタリングしたり、コメントを監視したり、ユーザー統計を視覚化したりできます。",
        "messageList": "MERN（MongoDB + Express + React + Node.js）アプリケーション。これも、Reduxを使用してステータスを監視し、Herokuにデプロイします。 MessageListを使用すると、ユーザーはメッセージを追加/編集/削除できます。" + '<a href="https://quiet-mountain-30375.herokuapp.com" >リンク</a>',
        "read_more": "詳しくは"
    },
    "kr": {
        "name": "주정혁", //소프트웨어 공학자
        "contact": "연락처",
        "bgc": "테마 색상 설정",
        "quote": "사람들이 당신에 대해 생각하는 것과 당신에 대해 어떻게 생각하는지 통제 할 수 없습니다. 불운에 대비할 수 없습니다. 최선을 다하고 정직해야합니다. 마지막으로 가장 중요한 것은 열심히 일하는 것입니다. 나머지는 통제 할 수 없습니다. ― 마리아 샤라포바, “멈출 수없는 : 오늘의 내 삶”",
        "description_title": "개인 정보",
        "description": "저는 풀 스택 소프트웨어 엔지니어입니다.",
        "about_me_title": "나에 대해서",
        "self_introduction": "브리티시 컬럼비아 대학교의 컴퓨터 학부생. 자기 관리, 완벽 추구, 강한 스트레스 내성 및 기대 이상의 열정에 능합니다.",
        "soccer": "저는 레알 마드리드 팬입니다! 영원히 Madridist!",
        "tech_skills": "전문 기술",
        "download_resume": "이력서",
        "social_media": "소셜 미디어",
        "project_title": "오픈 소스 프로젝트",
        "bss": "프런트 엔드 개발자가 중첩 스타일 규칙, 변수, 함수, 제어 흐름, 수학적 연산 및 상속을 사용하여 CSS를 작성할 수 있도록 BSS를 CSS로 컴파일하는 DSL (Small Domain Specific Language) 컴파일러입니다.",
        "bloggy": "단일 페이지 React 애플리케이션을 사용하면 사용자가 블로그를 공유 할 수 있으며 배경에서 태그별로 기사를 필터링하고 댓글을 모니터링하며 사용자 통계를 시각화 할 수 있습니다.",
        "messageList": "Redux를 사용하여 상태를 모니터링하고 Heroku에 배포하는 MERN (MongoDB + Express + React + Node.js) 애플리케이션입니다. MessageList는 사용자가 메시지를 추가 / 편집 / 삭제할 수 있도록합니다." + '<a href="https://quiet-mountain-30375.herokuapp.com" >링크</a>',
        "read_more": "추가 정보"
    },
    "es": {
        "name": "Gabriel Zhou",
        "contact": "Detalles de contacto",
        "bgc": "Establecer el color del tema",
        "quote": "No puedes controlar lo que la gente dice de ti y lo que piensan de ti. No puedes planear para la mala suerte. Solo puedes esforzarte al máximo y hacer tu mejor esfuerzo y decir la verdad. Al final, lo que importa es el esfuerzo. El resto está fuera de tu control. - Maria Sharapova, Imparable: mi vida hasta ahora",
        "description_title": "Perfil personal",
        "description": "Soy un ingeniero de pila completa que crea aplicaciones modernas",
        "about_me_title": "Sobre mí",
        "self_introduction": "Estudiante de grado superior en informática en la Universidad de Columbia Británica. Bueno en autogestión, búsqueda de la perfección, fuerte tolerancia al estrés y entusiasmo más allá de las expectativas.",
        "soccer": "¡Soy hincha del Real Madrid! ¡Madridista por siempre!",
        "tech_skills": "Habilidad profesional",
        "download_resume": "Currículum",
        "social_media": "Encuéntrame en LinkedIn y GitHub",
        "project_title": "Proyecto",
        "bss": "Un pequeño compilador de Lenguaje Específico de Dominio (DSL) que compila BSS en CSS para que permita a los desarrolladores de front-end escribir CSS con reglas de estilo anidadas, variables, funciones, flujo de control, operaciones matemáticas y herencia.",
        "bloggy": "Una aplicación React de una sola página que permite a los usuarios compartir blogs y permite al personal filtrar artículos por etiquetas, monitorear comentarios y visualizar las estadísticas de los usuarios.",
        "messageList": "Una aplicación MERN (MongoDB + Express + React + Node.js) que también usa Redux para monitorear estados y desplegar en Heroku. MessageList permite a los usuarios agregar / editar / eliminar mensajes." + '<a href="https://quiet-mountain-30375.herokuapp.com" >enlace</a>',
        "read_more": "Detalles"
    },
    "fr": {
        "name": "Jean-Jacques Zhou",
        "contact": "détails du contact",
        "bgc": "détails du contact",
        "quote": "Vous ne pouvez pas contrôler ce que les gens disent de vous et ce qu’ils pensent de vous. Vous ne pouvez pas prévoir la malchance. Vous ne pouvez que travailler dur, faire de votre mieux et dire la vérité. En fin de compte, c’est l’effort qui compte. Le reste est hors de votre contrôle. - Maria Sharapova, imparable: ma vie jusqu'ici",
        "description_title": "Profil personnel",
        "description": "Je suis ingénieur logiciel full stack",
        "about_me_title": "À propos de moi",
        "self_introduction": "Un étudiant de premier cycle en informatique à l'Université de la Colombie-Britannique. Bonne gestion de soi, recherche de la perfection, forte tolérance au stress et enthousiasme au-delà des attentes.",
        "soccer": "Je suis fan du Real Madrid! Madridiste à jamais!",
        "tech_skills": "Compétence professionnelle",
        "download_resume": "CV",
        "social_media": "Retrouvez-moi sur LinkedIn et GitHub",
        "project_title": "Projets",
        "bss": "Un petit compilateur DSL (Domain Specific Language) qui compile BSS en CSS afin de permettre aux développeurs frontaux d'écrire du CSS avec des règles de style imbriquées, des variables, des fonctions, un flux de contrôle, des opérations mathématiques et un héritage.",
        "bloggy": "Une application React à page unique qui permet aux utilisateurs de partager des blogs et permet au personnel de filtrer les articles par balises, de surveiller les commentaires et de visualiser les statistiques des utilisateurs.",
        "messageList": "Une application MERN (MongoDB + Express + React + Node.js) qui utilise également Redux pour surveiller les états et déployer sur Heroku. MessageList permet aux utilisateurs d'ajouter / modifier / supprimer des messages." + '<a href="https://quiet-mountain-30375.herokuapp.com" >lien</a>',
        "read_more": "Détails"
    },
    "ae": {
        "name": "عبد الكريم", //Abd al Karim
        "contact": "بيانات المتصل",
        "bgc": "تعيين لون المظهر",
        "quote": "لا يمكنك التحكم في ما يعتقده الناس عنك وما يفكرون فيه. لا يمكنك الاستعداد لسوء الحظ. يمكنك فقط أن تفعل أفضل ما لديك وأن تكون صادقًا أخيرًا ، أهم شيء هو العمل الجاد. الباقي خارج عن إرادتك. - ماريا شارابوفا",
        "description_title": "الملف الشخصي",
        "description": "أنا مهندس برمجيات مكدس كامل",
        "about_me_title": "عني",
        "self_introduction": "طالب جامعي كبير في الكمبيوتر بجامعة كولومبيا البريطانية. جيد في الإدارة الذاتية ، والسعي لتحقيق الكمال ، وتحمل قوي للتوتر ، وحماس يفوق التوقعات.",
        "soccer": "أنا من مشجعي ريال مدريد! مدريدي إلى الأبد!",
        "tech_skills": "مهارة إحترافية",
        "download_resume": "استئنف",
        "social_media": "وسائل التواصل الاجتماعي",
        "project_title": "مشروع مفتوح المصدر",
        "bss": "مترجم لغة صغير (DSL) يقوم بتجميع BSS إلى CSS بحيث يمكن لمطوري الواجهة الأمامية استخدام قواعد الأنماط المتداخلة والمتغيرات والوظائف وتدفق التحكم والعمليات الرياضية والوراثة لكتابة CSS.",
        "bloggy": "يتيح تطبيق React أحادي الصفحة للمستخدمين مشاركة المدونات ، ويسمح للخلفية بتصفية المقالات حسب العلامات ، ومراقبة التعليقات ، وتصور إحصاءات المستخدم.",
        "messageList": "تطبيق MERN (MongoDB + Express + React + Node.js) يستخدم أيضًا Redux لمراقبة الحالة ونشرها في Heroku. يتيح MessageList للمستخدمين إضافة / تحرير / حذف الرسائل." + '<a href="https://quiet-mountain-30375.herokuapp.com" >حلقة الوصل</a>',
        "read_more": "تفاصيل",
    }
}
const langEl = document.getElementsByClassName('language');
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
const social_media = document.getElementById('social-media');
const project_title = document.getElementById('project-title');
const bss = document.getElementById('bss');
const bloggy = document.getElementById('bloggy');
const messageList = document.getElementById('messageList');
const read_more = document.getElementsByClassName('read-more');
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
        project_title.textContent = data[langEl[i].getAttribute("id")]["project_title"];
        bss.textContent = data[langEl[i].getAttribute("id")]["bss"];
        bloggy.textContent = data[langEl[i].getAttribute("id")]["bloggy"];
        messageList.innerHTML = data[langEl[i].getAttribute("id")]["messageList"];
        read_more[0].textContent = data[langEl[i].getAttribute("id")]["read_more"];
        read_more[1].textContent = data[langEl[i].getAttribute("id")]["read_more"];
        read_more[2].textContent = data[langEl[i].getAttribute("id")]["read_more"];
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