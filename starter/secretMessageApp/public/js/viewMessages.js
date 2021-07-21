
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
         document.querySelector('#message').innerText == '';
        for(let key in data) {
            const message = data[key];
            if(myPass == message.passcode) {
                document.querySelector('#message').innerText += '\n' + message.message;
            }
        }
    });
}

document.querySelector('#viewMsg').addEventListener('click', (e) => findMessages(document.querySelector('#passcode').value));