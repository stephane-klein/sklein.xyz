import { isbot } from "isbot";

export default function SendNotification(request, body) {
    if (!isbot(request.headers.get("user-agent"))) {
        if (process.env?.GOTIFY_KEY) {
            const url = new URL(request.url);
            try {
                fetch(
                    process.env.GOTIFY_URL || "https://gotify.sklein.xyz/message",
                    {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "X-Gotify-Key": process.env.GOTIFY_KEY,
                            "Content-type": "application/json; charset=UTF-8"
                        },
                        body: JSON.stringify({
                            title: body.title,
                            message: `${body.message}

        User-Agent: ${request.headers.get("user-agent")}
        Accept-Language: ${request.headers.get("accept-language")}
        Remote-IP: ${request.headers.get("x-forwarded-for")}
        utm_source: ${url.searchParams.get("utm_source")}
                            `
                        })
                    }
                ).then(
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
            } catch (error) {
                console.error("Gotify fetch error:", error);
            }
        }
    }
}
