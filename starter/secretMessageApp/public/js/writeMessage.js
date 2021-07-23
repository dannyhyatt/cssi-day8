document.querySelector('#sendMsgBtn').addEventListener('click', (e) => {


    const password = new buffer.SlowBuffer(document.querySelector('#passcode').value.normalize('NFKC'));
    const salt = new buffer.SlowBuffer("someSalt".normalize('NFKC'));

    const N = 1024, r = 8, p = 1;
    const dkLen = 32;

    const res = firebase.database().ref().push().set({
        "message" : document.querySelector('#message').value,
        "passcode" : scrypt.syncScrypt(password, salt, N, r, p, dkLen)
    });
    console.log(res);
});

