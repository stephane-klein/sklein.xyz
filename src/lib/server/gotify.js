export default function SendNotification(body) {
    if (process.env?.GOTIFY_KEY) {
        fetch("https://gotify.sklein.xyz/message", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "X-Gotify-Key": process.env.GOTIFY_KEY,
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(body)
        }).then(
            (response) => {
                if (response.status !== 200) {
                    return response.text();
                }
            }
        ).then(
            (text) => {
                if (text) {
                    console.log(text);
                }
            }
        );
    }
}
