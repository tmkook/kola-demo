class pyramid {
    buy(total, grid, hold) {
        let funds = 0;
        let amount = 0;
        for (let k = 1; k <= grid; k++) {
            let item = parseInt((2 * k - 1) / 100 * total);
            funds += item;
            if (funds > hold) {
                amount = item;
                break;
            }
        }
        return parseInt(amount);
    }

    sale(total, grid, hold) {
        let funds = total;
        let amount = 0;
        for (let k = grid; k > 0; k--) {
            let item = parseInt((2 * k - 1) / 100 * total);
            funds -= item;
            if (funds < hold) {
                amount = item;
                break;
            }
        }
        return amount;
    }
}

module.exports = pyramid;
