function generateItemQuestions() {
    const count = parseInt(document.getElementById("itemCount").value);
    const container = document.getElementById("itemQuestions");
    container.innerHTML = ''; // Clear previous questions

    if (isNaN(count) || count < 1) {
        alert("Please enter a number greater than 1");
        return;
    }

    for (let i = 1; i <= count; i++) {
        const group = document.createElement('div');
        group.className = 'item-group';
        group.innerHTML = `
        <h3>Item ${i}</h3>
        <label>Type of Shirt:
            <select name=item${i}_type" required>
            <option value="">Select Type</option>
            <option>T-Shirt</option>
            <option>Sweatshirt</option>
            </select>
        <label><br>
        <label>Size:
            <select name="item${i}_size" required>
            <option value="">Select Size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>XL</option>
            <option>XXL</option>
            <option>XXXL</option>
            <option>XXXXL</option>
            </select>
        </label><br>
        <label>Color:
            <input type="text" name="item${i}_color" required>
        </label><br>
        <label>Design:
            <input type="text" name="item${i}_design" required>
        </label><br>
        `;
        container.appendChild(group);
    }
}