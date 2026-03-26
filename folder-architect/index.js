const fs = require('fs');
const path = require('path');

// Create Folder
function createFolder(dirPath) {
    try {
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
            console.log(`Folder created: ${dirPath}`);
        } else {
            console.log("Folder already exists");
        }
    } catch (err) {
        console.error("Error creating folder:", err);
    }
}

// Copy Folder with Retry
function copyFolder(src, dest, retries = 3) {
    try {
        fs.cpSync(src, dest, { recursive: true });
        console.log(`Folder copied from ${src} to ${dest}`);
    } catch (err) {
        if (retries > 0) {
            console.log("Copy error:", err.message);
            console.log("Retrying...");
            setTimeout(() => copyFolder(src, dest, retries - 1), 2000);
        } else {
            console.log("Failed after multiple attempts.");
        }
    }
}

// Move Folder with Retry
function moveFolder(src, dest, retries = 3) {
    try {
        fs.renameSync(src, dest);
        console.log(`Folder moved from ${src} to ${dest}`);
    } catch (err) {
        if (retries > 0) {
            console.log("Move error:", err.message);
            console.log("Retrying...");
            setTimeout(() => moveFolder(src, dest, retries - 1), 2000);
        } else {
            console.log("Failed after multiple attempts.");
        }
    }
}

// Delete Folder
function deleteFolder(dirPath) {
    try {
        fs.rmSync(dirPath, { recursive: true, force: true });
        console.log(`Folder deleted: ${dirPath}`);
    } catch (err) {
        console.error("Error deleting folder:", err);
    }
}

// Example Usage
const source = path.join(__dirname, "test_folder");
const destination = path.join(__dirname, "backup_folder");

// Create folder
createFolder(source);

// Create sample file
fs.writeFileSync(path.join(source, "sample.txt"), "Hello Folder Architect!");

// Copy folder
copyFolder(source, destination);

// Move folder
setTimeout(() => {
    moveFolder(destination, path.join(__dirname, "moved_folder"));
}, 3000);

// Delete folder
setTimeout(() => {
    deleteFolder(path.join(__dirname, "moved_folder"));
}, 6000);