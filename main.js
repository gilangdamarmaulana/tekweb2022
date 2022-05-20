Vue.createApp({
    data() {
        return {
            navbar:{
                sk:"Skills",
                ar:"My Articles",
            },
            header: {
                nama: "GilangDamarMaulana.",
                d: "College Student",
                deskripsi: "My name is Gilang Damar Maulana. I'm a college student in Ahmad Dahlan University. My hobby is playing music like bass and trying new things.",

            },
            skill: {
                judul: "Skills",
                sk :[
                    {
                        Kemampuan:"Adobe Premiere",
                        skill:"Beginner"
                    },
                    {
                        Kemampuan:"Adobe Photoshop",
                        skill:"Beginner"
                    },
                    {
                        Kemampuan:"Adobe Illustrator",
                        skill:"Beginner"
                    }
                ],
            },





            artikel: {},
            article: null,
        };
    },
    methods: {
        getArticle() {
            axios
                .get(
                    src="./artikel/artikel.json"
                )
                .then((res) => {
                    console.log(res.data);  
                    this.artikel = res.data;  
                })
                .catch((error) => {
                    console.log(error);  
                });
        },
        getDataMarkdown() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const article = urlParams.get('article');
            var converter = new showdown.Converter();
            console.log(article);
            axios
                .get(
                    src = "./artikel/" + article
                )
                .then((res) => {
                    var html = converter.makeHtml(res.data);
                    this.article = html;
                    console.log(html);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    beforeMount() {
        this.getArticle(),
            this.getDataMarkdown()
    },
}).mount("#app");

