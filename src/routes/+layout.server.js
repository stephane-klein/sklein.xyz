export async function load({request}) {
    return {
        browser_user_agent: request.headers.get("user-agent"),
        public_goatcounter_url: process.env.PUBLIC_GOATCOUNTER_URL || null
    }
}
