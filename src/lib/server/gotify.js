// See list in https://github.com/monperrus/crawler-user-agents/blob/master/crawler-user-agents.json
const userAgentRegex = /bot|mastodon|feedspot|tiny|slackbot-linkexpanding|python-requests|revoltchat|apache-httpclient|redditbot|mj12bot|semrushbot|imagesiftbot|go-http-client|whatapp|stephane-klein|applebot|exabot|yandexbot|duckduckbot|bingbot|crawl|spider|slurp|yahoo|mediapartners|facebookexternalhit|linkedinbot|twitterbot|developers\.google\.com|googlebot|adsbot-google/i;

export default function SendNotification(request, body) {
    if (!userAgentRegex.test(request.headers.get("user-agent"))) {
        if (process.env?.GOTIFY_KEY) {
            const url = new URL(request.url);
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
        }
    }
}
