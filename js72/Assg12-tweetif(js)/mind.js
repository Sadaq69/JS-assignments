
let tweet = prompt("Enter tweet:");

if( tweet.length <= 140) {
    console.log(`That ${tweet.length} char  tweet will work!`)
} else {
    console.log(`your ${tweet.length} char tweet is ${tweet.length - 140} char too long`)
}