const formPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({status:"success"})
    },5000)
})

export { formPromise };