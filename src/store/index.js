import Vue from 'vue'
import Vuex from 'vuex'
/* eslint-disable */

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [{
            imageUrl: 'https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 'asws1234',
            title: 'Meetup in NewYork',
            date: '2017-07-17'
        }, {
            imageUrl: 'https://images.pexels.com/photos/811715/pexels-photo-811715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 'asws123f',
            title: 'Meetup in Paris',
            date: '2017-08-22'
        }],
        user: {
            id: 'nbjjdfcub',
            registeredMeetups: ['asws1234']
        }
    },
    mutations: {},
    actions: {},
    getters: {
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups(state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        }
    }
})