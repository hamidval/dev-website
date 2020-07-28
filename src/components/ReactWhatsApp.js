import React, { Component } from 'react';
import Contacts from 'react-native-contacts';

// const accountSid = '';
//  const authToken = '';
// const client = require('twilio')(accountSid, authToken);







class ReactWhatsApp extends Component {
    constructor(props){
        super(props)
       
    }


    send = () =>{

            console.log('sent')


        // client.messages
        // .create({
        //    from: 'whatsapp:+447476095867',
        //    body: 'sent from app',
        //    to: 'whatsapp:+447479955062'
        //  })
        // .then(message => console.log(message.sid));

    }

    getContacts = ()=>{


        // Contacts.getAll((err, contacts) => {
        //     if (err) {
        //       throw err;
        //     }
        //     console.log(contacts)
        //   })


    }

    render(){
        return(
          <div >
        
                ReactWhatsApp



                <button onClick={()=>this.send()}>Send Message</button>
                <button onClick={()=>this.getContacts()}>get contacts Message</button>

          </div>

        )
    }
}

export default ReactWhatsApp