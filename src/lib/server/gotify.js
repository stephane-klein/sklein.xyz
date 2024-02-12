export default async function SendNotification(body) {
    if (process.env?.GOTIFY_KEY) {
        const response = await fetch("https://gotify.sklein.xyz/message", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "X-Gotify-Key": process.env.GOTIFY_KEY,
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(body)
        });
        if (response.status !== 200) {
            console.log(await response.text());
        }
    }
}
