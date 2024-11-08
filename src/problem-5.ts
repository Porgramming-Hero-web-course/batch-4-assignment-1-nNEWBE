{
    const getProperty = <X, Y extends keyof X>(obj: X, key: Y): X[Y] => {
        return obj[key];
    }

}