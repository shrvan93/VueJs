try {
    //consolew.logg('this should not happen');

    //throw new TypeError ('Hi there');

    //throw ['I thow this error..!']

    throw Error('This is error');
} catch (error) {
    console.log('type: ' + error.name);
    console.log('there was an error: ' + error.message);
}




consolew.logg('this should not happen');

console.log('helolo');