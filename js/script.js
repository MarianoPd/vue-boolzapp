var app = new Vue({
    el: '#app',

    data: {
      contacts: [
          {
              name: 'Michele',
              avatar: '_1',
              visibile: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      text: 'Hai portato a spasso il cane?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      text: 'Ricordati di dargli da mangiare',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 16:15:22',
                      text: 'Tutto fatto?',
                      status: 'received'
                  },
              ],
          },
          {
              name: 'Michele',
              avatar: '_2',
              visibile: false,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      text: 'Hai portato a spasso il cane?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      text: 'Ricordati di dargli da mangiare',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 16:15:22',
                      text: 'Tutto fatto?',
                      status: 'received'
                  },
              ],
          },
          {
              name: 'Michele',
              avatar: '_3',
              visibile: false,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      text: 'Hai portato a spasso il cane?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      text: 'Ricordati di dargli da mangiare',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 16:15:22',
                      text: 'Tutto fatto?',
                      status: 'received'
                  },
              ],
          },
      ]
    },


    methods:{

    },
  })