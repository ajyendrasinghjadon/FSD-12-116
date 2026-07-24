import { EventEmitter } from "node:events";

class OrderSystem extends EventEmitter {
  placeOrder(order) {
    console.log(`\n📦 Order received: #${order.id} for ${order.customerName}`);

    console.log("Saving order to database...");

    this.emit("orderPlaced", order);
  }
}

const orderSystem = new OrderSystem();

orderSystem.on("orderPlaced", (order) => {
  console.log(`📧 Sending confirmation email to ${order.email}...`);
});

orderSystem.on("orderPlaced", (order) => {
  order.items.forEach((item) => {
    console.log(`📉 Reducing stock for "${item.name}" by ${item.qty}`);
  });
});

orderSystem.on("orderPlaced", (order) => {
  console.log(`🚚 Creating shipping label for order #${order.id}`);
});

orderSystem.on("orderPlaced", (order) => {
  console.log(`📊 Logging order #${order.id} — total: ₹${order.total}`);
});

orderSystem.on("error", (err) => {
  console.error("❌ Order system error:", err.message);
});

orderSystem.placeOrder({
  id: "ORD1001",
  customerName: "Dhanesh Kumar",
  email: "dhanesh@example.com",
  items: [
    { name: "Wireless Mouse", qty: 1 },
    { name: "Mechanical Keyboard", qty: 1 },
    { name: "Mechanical Mouse", qty: 2 }
  ],
  total: 2499,
});