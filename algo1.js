const algo1 = (n, a) => {
    let result = Array(n).fill(0);
    let max = 0;
    let maxA = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= result.length) {
            if (result[a[i] - 1] < maxA) result[a[i] - 1] = maxA;
            result[a[i] - 1]++;
            max = Math.max(result[a[i] - 1], max);
        }
        else maxA = max
    }
    if (maxA) result = result.map(p => p < maxA ? maxA : p)
    return result;
}