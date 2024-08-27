class NumberProcessor {
    constructor() {
        this.windowSize = Math.floor(Math.random() * 10) + 5; // Random window size between 5 and 14
        this.numbers = [];
        this.windowPrevState = [];
        this.apiEndpoint = "https://example.com/api/endpoint"; // Replace with your actual API endpoint
    }

    async fetchNumbers(id) {
        // Simulate API fetch based on id
        let number;
        switch (id) {
            case 'p': number = this.getPrime(); break;
            case 'f': number = this.getFibonacci(); break;
            case 'e': number = this.getEven(); break;
            case 'r': number = Math.floor(Math.random() * 100); break;
            default: throw new Error("Invalid ID");
        }
        this.addNumber(number);
    }

    getPrime() {
        // Return a random prime number for demonstration purposes
        const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
        return primes[Math.floor(Math.random() * primes.length)];
    }

    getFibonacci() {
        // Return a random Fibonacci number for demonstration purposes
        const fibs = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
        return fibs[Math.floor(Math.random() * fibs.length)];
    }

    getEven() {
        // Return a random even number for demonstration purposes
        const even = Math.floor(Math.random() * 50) * 2;
        return even;
    }

    addNumber(number) {
        if (this.numbers.length >= this.windowSize) {
            this.windowPrevState.push([...this.numbers]);
            this.numbers.shift(); // Remove the oldest number
        }
        this.numbers.push(number);
        this.calculateAverage();
    }

    calculateAverage() {
        const sum = this.numbers.reduce((a, b) => a + b, 0);
        const avg = sum / this.numbers.length;
        console.log(`Current Numbers: ${this.numbers}`);
        console.log(`Average: ${avg}`);
        this.postResponse(avg);
    }

    async postResponse(average) {
        const data = {
            currentNumbers: this.numbers,
            average: average,
            windowPrevState: this.windowPrevState
        };
        
        try {
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('Response posted:', responseData);
        } catch (error) {
            console.error('Error posting response:', error);
        }
    }
}

// Example usage
(async () => {
    const processor = new NumberProcessor();

    await processor.fetchNumbers('p');
    await processor.fetchNumbers('f');
    await processor.fetchNumbers('e');
    await processor.fetchNumbers('r');

    console.log(`Previous States: ${JSON.stringify(processor.windowPrevState)}`);
})();
