//-----FIRST SOLUTION-------------------------------->

function getLastPush(username) {
   return fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': `token ${GITHUB_PROMISES_TOKEN}`
        }
    }).then(response =>response.json())
        .then(events => {
            const dateOfLastPush = new Date(events[0].created_at).toDateString();
            return dateOfLastPush;
        });
}

const lastPushPromise = getLastPush('rodrigoM09')
lastPushPromise.then(value => console.log(value)).catch(error =>console.log(error));


//-----------------------JASONS SOLUTION USING AWAITS------------------>
async function getUserLastCommitAsync(username) {
    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        let events = await response.json();
        console.log(events);
    }
    catch(err) {
        console.log(err);
    }
}
getUserLastCommitAsync('rodrigoM09')