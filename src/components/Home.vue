<template>
    <v-container>
        <v-layout row wrap class="mb-2">
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="/meetups"  class="info">Explore the Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center   text-sm-left">
                <v-btn large router to="/meetups/new" class="info ">Organize Meetups</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
           <v-flex xs12>
                <v-carousel style="cursor: pointer;">
                    <v-carousel-item v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id"  v-on:click="onLoadMeetup(meetup.id)">
                        <div class="title">
                            <h2>{{ meetup.title }}</h2>
                        </div>
                    
                    
                    
                    </v-carousel-item>
                </v-carousel>
            </v-flex> 
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <p>Join our Meetups</p>
            </v-flex>
            
        </v-layout>
    </v-container>
</template>


<script>
    export default {
        computed: {
            meetups () {
                return this.$store.getters.featuredMeetups
            }
        },
        methods: {
            onLoadMeetup (id) {
                this.$router.push('/meetups/' + id)
            }    
        }
    }

</script>

<style scoped>
    .title {
        position: absolute;
        top: 50px;
        left: 35vw;
        color: beige;
        margin: 0 auto;
        text-align: center;
        padding: 5px;
        background: lightgray;
        opacity: 0.4;

    }
         

</style>


