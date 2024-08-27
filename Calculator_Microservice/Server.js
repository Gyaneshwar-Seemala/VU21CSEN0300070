const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 8081;

class NumberProcessor {
    constructor() {
        this.windowSize = Math.floor(Math.random() * 10) + 5; // Randomly set the window size between 5 and 14
        this.windowCurrstat = []; // Keeps track of the current numbers in the window
        this.windowPrevState = []; // Stores previous window states for reference
        this.fetchHelper = {
            prime: "http://20.244.56.144/test/primes",
            fibonacci: "http://20.244.56.144/test/fibo",
            even: "http://20.244.56.144/test/even",
            random: "http://20.244.56.144/test/rand"
        };
        this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0NzM3MDc3LCJpYXQiOjE3MjQ3MzY3NzcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjA1ZjA4N2VmLWM4OWMtNGUxYy05MWVkLTk1ZTIxNWExMGVmMSIsInN1YiI6ImdzZWVtYWxhQGdpdGFtLmluIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkbWVkIiwiY2xpZW50SUQiOiIwNWYwODdlZi1jODljLTRlMWMtOTFlZC05NWUyMTVhMTBlZjEiLCJjbGllbnRTZWNyZXQiOiJZTWtHd2JhTVBtaEdxV2Z6Iiwib3duZXJOYW1lIjoiU2VlbWFsYSBHeWFuZXNod2FyIFJhbyIsIm93bmVyRW1haWwiOiJnc2VlbWFsYUBnaXRhbS5pbiIsInJvbGxObyI6IlZVMjFDU0VOMDMwMDA3MCJ9.0MRHYQo9DsuD-0c4oz5KB9H2jrt8F1elHwa9WT9ChlA"; // Your API token
    }

    async fetchNumbersWithTimeout(id, timeout = 500) {
        let apiUrl;
        switch (id) {
            case 'p': apiUrl = this.fetchHelper.prime; break;
            case 'f': apiUrl = this.fetchHelper.fibonacci; break;
            case 'e': apiUrl = this.fetchHelper.even; break;
            case 'r': apiUrl = this.fetchHelper.random; break;
            default: throw new Error("Invalid ID"); // Handle invalid ID error
        }

        const controller = new AbortController(); // For handling timeouts
        const signal = controller.signal;
        const timeoutId = setTimeout(() => controller.abort(), timeout); // Set a timeout for the API request

        try {
            const response = await fetch(apiUrl, {
                signal,
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
            clearTimeout(timeoutId); // Clear the timeout if the request is successful

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`API error: ${errorText}`);
                throw new Error(`Network response was not ok: ${response.statusText}`); // Handle API errors
            }

            const data = await response.json(); // Parse the response
            const numbers = data.numbers || []; // Get numbers from the response
            this.addNumbers(numbers); // Add the numbers to the current window
            return numbers;
        } catch (error) {
            console.error('Error or timeout fetching number:', error);
            return []; // Return an empty array if there's an error or timeout
        }
    }

    addNumbers(numbers) {
        if (Array.isArray(numbers)) {
            if (this.windowCurrstat.length >= this.windowSize) {
                this.windowPrevState.push([...this.windowCurrstat]); // Save the current state to previous states
                this.windowCurrstat.shift(); // Remove the oldest number from the current window
            }
            this.windowCurrstat.push(...numbers); // Add new numbers to the current window
        }
    }

    calculateAverage() {
        const allNumbers = this.windowCurrstat.flat(); // Flatten the current window state
        const sum = allNumbers.reduce((a, b) => a + b, 0); // Sum up all the numbers
        const avg = allNumbers.length > 0 ? sum / allNumbers.length : null; // Calculate the average if there are numbers

        return {
            windowprevstate: this.windowPrevState.flat(), // Flatten previous states for output
            windowCurrstat: this.windowCurrstat.flat(), // Flatten current state for output
            numbers: allNumbers, // The numbers used in this calculation
            average: avg // The calculated average
        };
    }
}

const processor = new NumberProcessor();

app.get('/:id', async (req, res) => {
    const id = req.params.id;

    if (!['p', 'f', 'e', 'r'].includes(id)) {
        return res.status(400).json({ error: "Invalid ID" }); // Handle invalid ID in the request
    }

    const numbers = await processor.fetchNumbersWithTimeout(id);

    if (numbers.length === 0) {
        console.log('Using stored state due to timeout'); // Log when using stored state
    }

    const response = processor.calculateAverage(); // Get the current average and other data
    res.json(response); // Send the data back to the client
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`); // Start the server
});
