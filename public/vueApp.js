const app = new Vue({
  el: '#app',
  data: {
    newComment: '',
    comments: [],
  },
  created: function () {},
  methods: {
    addComment() {
      this.comments.push({ title: this.newComment, upvotes: 0 });
      this.newComment = '';
    },
    incrementUpvotes(item) {
      item.upvotes = item.upvotes + 1;
    },
  },
  computed: {
    sortedComments() {
      return this.comments.sort((a, b) => {
        return b.upvotes - a.upvotes;
      });
    },
  },
});
