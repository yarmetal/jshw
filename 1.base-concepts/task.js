"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    let d = b ** 2 - 4 * a * c;
    if (d > 0) {
        arr[0] = (-b + Math.sqrt(d)) / (2 * a);
        arr[1] = (-b - Math.sqrt(d)) / (2 * a);
    } else if (d === 0) {
        arr[0] = -b / (2 * a);
    } else {
        arr = [];
    }

    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let per = parseInt(percent) / 100 / 12;
    let cont = parseInt(contribution);
    let amm = parseInt(amount);
    let cm = parseInt(countMonths);

    if (isNaN(per) || per < 0) {
        return `Invalid percent "${percent}"`;
    } else if (isNaN(cont) || cont < 0) {
        return `Invalid contribution "${contribution}"`;
    } else if (isNaN(amm) || amm < 0) {
        return `Invalid amount "${amount}"`;
    } else {
        if (isNaN(cm) || cm < 0) {
            return `Invalid months ${countMonths}`;
        }
        let s = amm - cont;
        let pay = s * (per + per / (((1 + per) ** cm) - 1));
        let totalAmount = (pay * cm).toFixed(2);
        console.log(totalAmount);
        return +totalAmount;
    }
}