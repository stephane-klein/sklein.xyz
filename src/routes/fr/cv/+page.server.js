import SendNotification from "$lib/server/gotify";

export async function load({request}) {
    SendNotification(
        request,
        {
            title: "sklein.xyz cv page visited",
            message: "sklein.xyz cv visited"
        }
    );
    return {};
}
