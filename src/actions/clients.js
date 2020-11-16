export function buy(num) {
    return {
        type: "cash",
        account: parseInt(num)
    }
}


export function sell(num) {
    return {
        type: "paybao",
        account: num
    }
}