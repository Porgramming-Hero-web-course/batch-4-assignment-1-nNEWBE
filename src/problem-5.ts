{
    const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

}