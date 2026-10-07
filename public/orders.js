const refreshButton = document.getElementById("refresh");

refreshButton.addEventListener("click", loadOrders);

async function loadOrders() {
    try {
        // FIXED: Using "response" consistently everywhere
        const response = await fetch("/api/orders");
        if (!response.ok) {
            throw new Error("Failed to retrieve orders");
        }

        // FIXED: This used to look for 'response' while the line above named it 'responce'
        const orders = await response.json();
        const data = orders.data;
        const table = document.getElementById("ordertable");

        table.innerHTML = `
            <thead>
                <tr>
                    <th>orderID</th>
                    <th>orderDesc</th>
                    <th>quantity</th>
                    <th>unitCost</th>
                    <th>created</th>                    
                </tr>
            </thead>
            <tbody></tbody>
        `;

        const tbody = table.querySelector("tbody");
   
        data.forEach(order => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${order.orderID || ''}</td>
                <td>${order.orderDesc || ''}</td>
                <td>${order.quantity || ''}</td>
                <td>${order.unitCost || ''}</td>
                <td>${order.created || ''}</td>               
            `;

            tbody.appendChild(row);
        });

    } catch (error) {
        console.error("Error loading orders:", error);
    }
}

// Trigger the initial page load exactly once when script parses
loadOrders();

const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const order = {      
        orderDesc: document.getElementById("orderDesc").value,
        quantity: document.getElementById("quantity").value,
        unitCost: document.getElementById("unitCost").value       
    };

    try {
        const response = await fetch("api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        });

        if (!response.ok) {
            throw new Error("Failed to add order");
        }

        // Clear the form
        orderForm.reset();

        // Call GET /users again
        loadOrders();

    } catch (error) {
        console.error("Error:", error);
    }
});

