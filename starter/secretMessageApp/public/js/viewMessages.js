const findMessages = (myPass) => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        document.querySelector('#message').innerText = '';
        for (let key in data) {
            const message = data[key];
            console.log('1: ' + JSON.stringify(data[key]));
            if (myPass == message.passcode) {
                console.log('passcode: ' + message.passcode);
                document.querySelector('#message').innerText += '\n' + message.message;
            }
        }
    });
}

document.querySelector('#viewMsg').addEventListener('click', (_) => findMessages(document.querySelector('#passcode').value));