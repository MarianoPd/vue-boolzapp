var app = new Vue({
    el: '#app',

    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [ 
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:37:00',
                        message: 'Ma allora cosa me lo dici a fare "Ci vediamo?" ?!',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 17:15:22',
                        message: 'Dille che mi porta due lattughe',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_6',// sostituito perché Luisa con la barba non si poteva veder
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:55:00',
                        message: 'Non sei mai contenta! Statti a casa!',
                        status: 'sent'
                    },
                ],
            },
        ],
        //in questo caso lo zero va bene
        activeContact: 0,
        newMessage: '',
        defaultResponse: 'ok',
        searchedContact: '',
    },

    mounted(){
        //this.getDate();
        
    },


    methods:{
        setActive(contactIndex){ this.activeContact = contactIndex},
        
        getLastDate(contact){
            if(!(contact.messages.length === 0)){
                let date = contact.messages[contact.messages.length - 1].date;
                return date;
            }
            
        },

        getLastMessage(contact){
            if(!(contact.messages.length === 0)){
                let text = contact.messages[contact.messages.length - 1].message;
                if(text.length > 30){
                    let temp = text.slice(0,30);
                    text = temp;
                    text += '...';
                }   
                return text;
            }
            return 'Nessun Messaggio';
        },

        sendMessage(){
            const contact = this.contacts[this.activeContact];
            if(this.newMessage === '') return;
            contact.messages.push({
                date: this.getDate(),
                message: this.newMessage,
                status: 'sent',
            });
            this.newMessage = '';
            setTimeout(() =>{ this.getResponse()},1000);
        },

        getResponse(){
            const contact = this.contacts[this.activeContact];
            contact.messages.push({
                date: this.getDate(),
                message: this.defaultResponse,
                status: 'received',
            });
        },

        getDate(){
            const date = new Date;
            let retDate = date.getDate() +'/'+ date.getMonth() +'/'+ date.getFullYear();
            retDate += ' ' +date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            //console.log(date);
            //console.log(retDate);
            return retDate;
        },

        showRequest(contact){
            if(this.searchedContact === '' ) return true;
            let contName = contact.name.toLowerCase();
            let searCont = this.searchedContact.toLowerCase();
            if(contName.includes(searCont)) return true;
            return false;
        },

        showMenu(index){
            const message = document.getElementsByClassName("message");
            const dropDM = message[index].getElementsByClassName("drop-down-menu")[0];
            if(dropDM.classList.contains('show-menu')){
                dropDM.classList.remove('show-menu');
                return;
            }
            dropDM.classList.add('show-menu');
            //console.log(index);
            //console.log(dropDM);

            dropDM.addEventListener('mouseleave', ()=>{
                setTimeout(()=>{
                    dropDM.classList.remove('show-menu');
                },1000);
            });

        },

        removeMsg(index){
            console.log(index);
            const msgList = this.contacts[this.activeContact].messages;
            msgList.splice(index, 1);
            console.log(msgList);
            console.log(index);
        }

    },
  })