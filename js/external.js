    alert("Welcome to my Website!")

    let favoriteColor = prompt ("What's your favortie color?");

    alert("Great " + favoriteColor + " is my favorite color too!")



    let price = prompt ("What is the price per day")
    let movie1 = prompt("How many day are you keeping Movie 1?")
    let movie2 = prompt("How many day are you keeping Movie 2?")
    let movie3 = prompt("How many day are you keeping Movie 3?")
    let totalCost = (movie1 * price) + (movie2 * price) + (movie3 * price)
    alert("Your total is " + totalCost);

    let hoursAtGoogle = prompt("How many hours did you work at Google?")
    let googlePay = prompt("What is your hourly rate at Google?")
    let hoursAtAmazon = prompt("How many hours did you work at Amazon?")
    let amazonPay = prompt("What is your hourly rate at Amazon?")
    let hoursAtFacebook = prompt("How many hours did you work at Facebook?")
    let facebookPay = prompt("What is your hourly rate at Facebook?")
    let totalPay = (hoursAtGoogle * googlePay) + (hoursAtAmazon * amazonPay)+ (hoursAtFacebook * facebookPay)
    alert("Your total pay is:" + totalPay)


    let classNotFull = confirm("Does the class have openings?");
    let noScheduleConflict = confirm("Are there no conflicts in your schedule?");
    let canEnroll =  classNotFull && noScheduleConflict

    if (canEnroll){
        alert("You can enroll!")
    } else {
        alert("You can not enroll :(")
    }


    let numberOfItems = prompt("How many items did the customer buy?")
    let offerExpired = confirm (" is the offer expired?")
    let premiumMember = confirm ("Is the member a Premium Member?")
    let productOffer = (premiumMember || numberOfItems > 2) && !offerExpired;

    if (productOffer) {
        alert("You get offer")
    } else {
        alert("You are a third class customer")
    }