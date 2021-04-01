const timeWait = (time:number) =>new Promise(resolve => setTimeout(resolve,time))


async function updateUserSpecs(user: string, updates: object) {
    // todo mimic this way
    await timeWait(5000);
// fail condition   
    console.log('saving data and stuff')
    return {user, ...updates}
    
}

export { updateUserSpecs };

