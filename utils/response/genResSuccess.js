import successCode from "./successCode.json"

export default function genResSuccess(code, data) {

    var reason = successCode[code] || ""

    console.log(reason, data)

    return {
        status: "success",
        reason: {
            code: code,
            description: reason
        },
        data: data
    }
}