class funnel {
    buy(total, grid, hold) {
        return parseInt(grid / 100 * (total - hold));
    }

    sale(total, grid, hold) {
        return parseInt(grid / 100 * hold);
    }
}

module.exports = funnel;