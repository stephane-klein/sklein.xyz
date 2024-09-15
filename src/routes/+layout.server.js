export async function load({request}) {
    return {
        browser_user_agent: request.headers.get("user-agent"),
        public_goatcounter_url: process.env.PUBLIC_GOATCOUNTER_URL || null,
        goatcounter_allow_local: process.env.GOATCOUNTER_ALLOW_LOCAL || "false",
        gibbon_replay_url: process.env.GIBBON_REPLAY_URL || null
    };
}
