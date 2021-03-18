// Java: Exception
// JavaScript: Error

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
    if(fileName === 'fileName') {
        throw new Error(`${fileName} is not exist`)
    }
    return fileName;
}

function closeFile(fileName: string) {
    console.log(`close ${fileName}`);
}

const fileName:string = "fileName";

try {
    console.log(readFile(fileName));
}   catch(error) {
    console.log('not exist');
} finally {
    closeFile(fileName);
    console.log(`${fileName} is closed `);
}