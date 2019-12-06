new Vue({
    el: '#polls',
    delimiters: ['${','}'],
    data: {
        latest_question_list: [],
        loading: false,
        currentQuestion: {},
        message: null,
        newQuestion:{ 'question_text': null}
    },
    mounted: function(){
        this.getQuestions();
    },
    methods: {
        getQuestions: function() {
            this.loading = true;
            this.$http.get('/api/poll/').then((response) => {
                this.latest_question_list = response.data;
                this.loading = false;
                console.log("Its working")
                console.log(response.data)
                
            }).catch((err) => {
                this.loading = false;
                console.log(err);
            })
        },
        getQuestion: function(id) {
            this.loading = true;
            this.$http.get('/api/article/'+id+'/').then((response) => {
                console.log(response.data)
                this.currentQuestion = response.data;
                // $('#editArticleModal').modal('show');
                this.loading = false;
            }).catch((err) => {
                this.loading = false;
                console.log(err);
            })
        },
        getResult: function(id) {
            this.loading = true;
            this.$http.get('/api/article/'+id+'/').then((response) => {
                console.log(response.data)
                // this.currentArticle = response.data;
                // $('#editArticleModal').modal('show');
                this.loading = false;
            }).catch((err) => {
                this.loading = false;
                console.log(err);
            })
        },
        addArticle: function() {
            this.loading = true;
            this.$http.post('/api/article/', this.newArticle).then((response) => {
                this.loading = false;
                this.getArticles();
            }).catch((err) => {
                this.loading = false;
                console.log(err);
            })
        },
        updateArticle: function() {
            this.loading = true;
            this.$http.put('/api/article/'+this.currentArticle.article_id+'/', this.currentArticle).then((response) => {
                this.loading = false;
                this.currentArticle = response.data;
                this.getArticles();
            }).catch((err) => {
                this.loading = false;
                console.log(err);
            })

        },
        deleteArticle: function(id) {
            this.loading = true;
            this.$http.delete('/api/article/'+id+'/').then((response) => {
                this.loading = false;
                this.getArticles();
            }).catch((err) => {
                this.loading = false;
                console.log(err)
            })
        }
    },
});