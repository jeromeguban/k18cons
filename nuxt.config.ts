// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/scss/style.scss", "swiper/css", "swiper/css/effect-fade", "swiper/css/pagination"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./assets/scss/_variables.scss";'
                },
            },
        },
    },
    runtimeConfig: {
            public : {
                apiBaseUrl : process.env.CMS_API_URL,
            } 
      },
    nitro: {
        devServer: {
          watch: ['./src']
        }
    }
})
