const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

// Función que simula el tiempo de preparación usando Promise y setTimeout
function simulatePreparationTime() {
    const preparationTime = Math.floor(Math.random() * 5000) + 2000; // Entre 2s y 7s
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, preparationTime);
    });
}

// Procesa el pedido de forma asincrónica
async function processOrder(order) {
    await simulatePreparationTime();
    order.status = 'Completado';
    updateOrderStatus(order, order.status);
}
