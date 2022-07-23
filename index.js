async function init() {
    try {
        const result = await fetch("https://restcountries.com/")
        console.log(result)
    } catch (ex) {
        console.log("error")
        Promise.reject(ex)
    }

}

init().then(() => {
    console.log("Resolved!!")
}).catch(() => { console.log("Rejected!!") })




