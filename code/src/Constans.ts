export const webUrl = {
    index: "/",
    applications: {
        url: "/applications"
    },
    application: {
        url: "/applications/:applicationId",
        resolve: (number: number) => "/applications/:applicationId".replace(":applicationId", number.toString())
    },
}