{
    const countWordOccurrences = (sentence: string, word: string): number => {
        let count:number = 0;
        sentence.split(" ").forEach(element => (element.toLowerCase().includes(word.toLowerCase()) ? count += 1 : ""))
        return count;
    }

}