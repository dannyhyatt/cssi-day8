
const getMessages = () => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        for(let key in data) {
            const message = data[key];
            console.log(message.passcode);
        }
    });
}

const findMessages = (myPass) => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        for(let key in data) {
            const message = data[key];
            if(myPass == message.passcode) {
                console.log(message.passcode);
                renderMessage(message);
            }
        }
    });
}


findMessages(1234);