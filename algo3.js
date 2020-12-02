const algo3 = (a) => {
    if (a.length == 0) return 0;
    let sum = 0;
    let max = 0;
    for (let i = 0; i < a.length; i++) {
        sum += Math.abs(a[i]);
        if (max < Math.abs(a[i])) {
            max = Math.abs(a[i]);
        }
        a[i] = Math.abs(a[i]);
    }
    let counts = new Array(max + 1).fill(0);
    for (let i = 0; i < a.length; i++) {
        let value = a[i];
        counts[value]++;
    }
    let r = new Array(sum + 1).fill(0);
    for (let i = 1; i < r.length; i++) {
        r[i] = -1;
    }
    for (let i = 1; i < counts.length; i++) {
        for (let j = 0; j < r.length; j++) {
            if (r[j] >= 0) {
                r[j] = counts[i];
            }
            else if (j - i >= 0 && r[j - i] > 0) {
                r[j] = r[j - i] - 1;
            }
        }
    }
    let result = sum;

    for (let i = 0; i < Math.trunc(r.length / 2) + 1; i++) {
        if (r[i] >= 0 && result > Math.abs(sum - 2 * i)) {
            result = Math.abs(sum - 2 * i);
        }
    }
    return result;
}