export async function load({request}) {
    return {
        browser_user_agent: request.headers.get("user-agent"),
        public_goatcounter_url: process.env.PUBLIC_GOATCOUNTER_URL || null,
        goatcounter_allow_local: process.env.GOATCOUNTER_ALLOW_LOCAL || "false",
        public_plausible_url: process.env.PUBLIC_PLAUSIBLE_URL || null,
        public_plausible_domain: process.env.PUBLIC_PLAUSIBLE_DOMAIN || null
    };
}
