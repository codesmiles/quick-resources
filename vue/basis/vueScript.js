const app = Vue.createApp({ //creating vue apps
    // template:"<h2>I am a template now</h2>",
    data(){
        return{
            title:`final destination`,
            actor:"daughters of fate",
            thoseThatDied:2,
            showActMovie:true,
            x:0,
            y:0,
            books:[
                {title:"harry potter",author:"who fucken cares", isFav:true},
                {title:"class of titan",author:"who gives a fuck",isFav:false},
                {title:"wrath of titan",author:"fuck everyone",isFav:true}
            ],
            showBooks:true,
            web_google:"www.google.com",
            facebook:"www.facebook.com"
        }
    },
    methods:{
        changeActor(act){
        //   this.actor = "future dead people" //as a custom vaiable
        this.actor = act //as a paraameter
        },
        toggleShowMovie(){
            this.showActMovie = !this.showActMovie //the function when invoked changes
        },
        handleEvent(e,data){ //has an optional parameter you can use to get loads of event objects
            console.log(e) //useful should incase i want to handle more activity on the event
            console.log(e.type,data) 
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleBooks(){
            this.showBooks = !this.showBooks
        },
       toggleColor(obj){
        obj.isFav = !obj.isFav
       }
    }

})

app.mount("#app")