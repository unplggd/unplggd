<template>
    <div>
        <h1>Hello from {{ name }}</h1>
        <p>{{ post }}</p>
        <nuxt-link to="/">Home</nuxt-link>
        <br/>
        <nuxt-link to="/about">About</nuxt-link>
    </div>
</template>


<script>
    import axios from 'axios'

    export default {
        asyncData({req, params}) {
            // We can return a Promise instead of calling the callback
            let name = req ? 'server' : 'client'
            return axios.get('https://raw.githubusercontent.com/unplggd/unplggd-source/master/posts/2017/05/one/index.md')
                .then((res) => {
                    return {
                        post: res.data,
                        name: name
                    }
                })
        }
    }
</script>