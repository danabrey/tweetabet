var vm = new Vue({
  el: '#app',
  data: {
    text: '',
    bookmakers: [
      {
        name: 'William Hill',
        website: 'https://www.willhill.com',
        handle: '@WilliamHill',
        hashtag: 'YourOdds'
      },
      {
        name: 'Paddy Power',
        website: 'https://www.paddypower.com',
        handle: '@AskPaddyPower',
        hashtag: ''
      },
      {
        name: 'Sky Bet',
        website: 'https://www.skybet.com',
        handle: '@RequestABet',
        hashtag: 'RequestABet'
      },
      {
        name: 'Coral',
        website: 'https://www.coral.co.uk',
        handle: '@Coral',
        hashtag: 'YourCall'
      },
      {
        name: 'Betfair',
        website: 'https://www.betfair.com',
        handle: '@Betfair',
        hashtag: 'OddsOnThat'
      },
      {
        name: 'Ladbrokes',
        website: 'https://www.ladbrokes.com',
        handle: '@Ladbrokes',
        hashtag: 'GetAPrice'
      }
    ]
  },
  methods: {
    handleChange() {
      console.log('hi);');
      twttr.widgets.load()
    }
  }
})
