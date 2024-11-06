function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    let isKeyExist = true;
    keys.forEach(key => isKeyExist = isKeyExist && (key in obj) ? true : false)
    return isKeyExist;
}

