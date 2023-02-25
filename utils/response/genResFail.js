import errCode from "./errCode.json"

export default function genResFail(code, context) {

    var reason = errCode[code] || ""
    console.log(reason, context)

    return {
        status: "failed",
        reason: {
            code: code,
            description: reason
        },
        context: context
    }
}