function queroCafe (N, L, D) {
    try {
        let a = N*D;
        let b = a/1000;
        let c = b/L;
        let d = Math.ceil(c)*L
        return d;
    } catch (err) {
        return err.message
    }
}

console.log(queroCafe(4, 12, 11000));