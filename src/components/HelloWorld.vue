<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{sayHello}}</h2>
  </div>
</template>

<script>import { httpGet } from '@/assets/js/getUrl'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sayHello: ''
    }
  },
  mounted: function () {
    this.initData()
  },
  methods: {
    initData () {
      httpGet.$get('hello').then((res) => {
        this.sayHello = res.result
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
