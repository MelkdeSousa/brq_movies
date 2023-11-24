export const simpleFetch = async <Response = {}>(url: string, options: RequestInit) => {
    const response = await fetch(url, options)

    const data = await response.json()

    return data as Response
}