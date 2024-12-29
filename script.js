const message = {
    greeting: ['Good Morning!', 'Good Afternoon!', 'Good Evening!'],
    smallTalk: ['Isn\'t this weather just crazy?', 'How was the weekend?', 'Did you look at the news?', 'How\'s your kid doing?', 'See any movies lately?', 
        'How was your date?', 'How was the surgery?'],
    gist: ['I just wanted to check where we are with that client.', 'I just wanted a quick update on the project.', 'I need help with the blocker.',
        'Can you review my code?', 'I needed to discuss my task.']
}

const createMessage = () => {
    return message.greeting[Math.floor(Math.random() * message.greeting.length)] + " " + message.smallTalk[Math.floor(Math.random() * message.smallTalk.length)] +
    " " + message.gist[Math.floor(Math.random() * message.gist.length)];
}

console.log(createMessage());