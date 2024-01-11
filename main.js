let array = [];

function generateArray() {
    array = [];
    const arrayContainer = document.getElementById("array-container");
    arrayContainer.innerHTML = "";

    for (let i = 0; i < 50; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 3}px`;
        bar.className = "bar";
        arrayContainer.appendChild(bar);
    }
}

async function visualizeBubbleSort() {
    const bars = document.getElementsByClassName("bar");
    const n = bars.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Highlight bars being compared
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            // Wait for a short duration to visualize the comparison
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 100)
            );

            // Compare and swap if needed
            if (array[j] > array[j + 1]) {
                // Swap heights
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                // Update bar heights to reflect the swap
                bars[j].style.height = `${array[j] * 3}px`;
                bars[j + 1].style.height = `${array[j + 1] * 3}px`;
            }

            // Reset color after comparison
            bars[j].style.backgroundColor = "dodgerblue";
            bars[j + 1].style.backgroundColor = "dodgerblue";
        }

        // Mark the last bar as sorted
        bars[n - i - 1].style.backgroundColor = "green";
    }

    // Mark the first bar as sorted
    bars[0].style.backgroundColor = "green";
}

async function visualizeQuickSort() {
    // Implement quick sort visualization logic
    // Update the height of bars to show the progress
}

async function visualizeMergeSort() {
    // Implement merge sort visualization logic
    // Update the height of bars to show the progress
}

// Call generateArray() to initialize the array on page load
generateArray();