//-----FETCHES INFORMATION USER FROM GITHUB AND LOGS AN OBJECT-------------------------------->
let usersInput = $("#input").val()

function getUserData(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': `token ${GITHUB_PROMISES_TOKEN}`
        }
    }).then(response => response.json())
        .then(events => {
            console.log(events)
        console.log(events[0].created_at)
        console.log(events[0].actor.login)})
        .catch(error => console.error(error));

}

getUserData(usersInput);