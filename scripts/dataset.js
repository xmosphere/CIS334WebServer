export class Dataset {
    constructor(name, filePath, description) {
        this.name = name;
        this.filePath = filePath;
        this. description = description;
    };
    getName() {
        return this.name;       
    }
    setName(input) {
        this.name = $input;
    }
    getFilePath() {
        return this.filePath;
    }
    setFilePath(input) {
        this.filePath = input;
    }
    getDescription() {
        return this.description;
    }
    setDescription(input) {
        this.description = input;
    }
}