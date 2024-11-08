{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    const updateProfile = (obj: Profile, updates: Partial<Profile>): Profile => {
        Object.assign(obj, updates);
        return obj;
    }

}