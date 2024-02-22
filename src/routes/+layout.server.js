export async function load() {
    return {
        public_goatcounter_url: process.env.PUBLIC_GOATCOUNTER_URL || null
    }
}
