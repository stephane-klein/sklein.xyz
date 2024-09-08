import SendNotification from "$lib/server/gotify";

export async function load({request}) {
    SendNotification(
        request,
        {
            title: "sklein.xyz services-freelance page visited",
            message: "sklein.xyz services-freelance visited"
        }
    );
    return {};
}
