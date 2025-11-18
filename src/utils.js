// Utility functions for MoodTracker

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    return data;
}

function validateInput(value) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    return true;
}

// Update 9
function newFunction9() {
    return 9;
}

module.exports = { formatData, validateInput };
