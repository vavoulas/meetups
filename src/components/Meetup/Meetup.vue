<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    
                       <v-card-title primary-title>
                           <h4 class="primary--text">{{ meetup.title }}</h4>
                       </v-card-title>
                       <v-card-media
                            :src="meetup.imageUrl"
                            height="400px"
                           
                       >
                           
                       </v-card-media>
                       <v-card-text>
                           <div class="info--text">{{ meetup.date }}</div>
                           <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci id neque delectus iure qui enim. Voluptate dicta magnam dolores, ea molestias veniam! Provident facilis recusandae consequuntur laborum cum consectetur veritatis?</div>
                       </v-card-text>
                       <v-card-actions>
                           <v-spacer></v-spacer>
                           <v-btn color="primary">Register</v-btn>
                       </v-card-actions>
                    
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    props: ['id'],
    computed: {
        meetup () {
            return this.$store.getters.loadedMeetup(this.id)
        }
    }
}
</script>
