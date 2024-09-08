import SendNotification from "$lib/server/gotify";

export async function load({request}) {
    SendNotification(
        request,
        {
            title: "sklein.xyz availability-and-pricing page visited",
            message: "sklein.xyz availability-and-pricing visited"
        }
    );
    return {};
}
