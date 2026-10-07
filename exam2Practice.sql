drop database if exists exam2Practice;
drop user if exists 'exam2user'@'localhost';

create database exam2Practice;
use exam2Practice;
create user 'exam2user'@'localhost' identified by 'exam2pass';
grant all privileges on exam2Practice.* to 'exam2user'@'localhost';


CREATE TABLE orders (
    orderID INT AUTO_INCREMENT PRIMARY KEY,
    orderDesc VARCHAR(255),
    quantity INT NOT NULL DEFAULT 1,
    unitCost DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO orders (orderDesc, quantity, unitCost) VALUES
('Wireless Ergonomic Mouse', 2, 29.99),
('Mechanical Gaming Keyboard', 1, 89.50),
('27-Inch 4K Monitor', 1, 329.99),
('USB-C Dual HDMI Docking Station', 3, 75.00),
('Noise-Canceling Headphones', 1, 199.99),
('1TB External NVMe SSD', 2, 119.00),
('Cat7 Ethernet Cable 15ft', 5, 12.49),
('HD Web Camera 1080p', 2, 45.99),
('Adjustable Laptop Stand', 4, 34.50),
('Large Desk Pad Mat', 3, 18.99),
('Smart LED Desk Lamp', 1, 39.99),
('Bluetooth Speaker', 2, 54.25),
('Uninterruptible Power Supply 1500VA', 1, 189.95),
('Ergonomic Office Chair Cushion', 2, 27.80),
('Wireless Charging Pad', 4, 19.99),
('1080p Stream Webcam with Light', 1, 64.99),
('Cable Management Sleeve Kit', 6, 14.99),
('USB 3.0 Flash Drive 128GB', 10, 11.50),
('Vertical Laptop Holder', 2, 22.90),
('Screen Cleaning Kit', 8, 9.99),
('Dual Monitor Mount Arm', 1, 69.99),
('Microphone Boom Arm Stand', 2, 31.50),
('USB Condenser Studio Microphone', 1, 79.99),
('Blue Light Blocking Glasses', 3, 16.99),
('Portable Monitor 15.6 Inch', 1, 149.99),
('Wireless Presenter Clicker', 2, 18.50),
('Surge Protector Power Strip', 5, 24.99),
('Smart Plug Outlet 4-Pack', 2, 29.99),
('Thermal Label Printer', 1, 129.00),
('Thermal Label Paper Roll 6-Pack', 3, 19.50),
('Wireless Graphics Tablet', 1, 68.00),
('Compact Bluetooth Keyboard', 2, 32.99),
('High-Speed HDMI Cable 6ft', 10, 8.99),
('DisplayPort to HDMI Adapter', 4, 12.99),
('Magnetic Phone Mount for Laptop', 3, 15.00),
('USB-C Multi-port Adapter', 2, 38.50),
('Rechargeable AA Batteries 8-Pack', 4, 21.99),
('Smart Band Fitness Tracker', 1, 49.95),
('Foldable Bluetooth Headphones', 2, 42.00),
('Desk Fan Silent USB', 3, 17.50),
('Hard Drive Enclosure USB-C', 2, 25.99),
('Multi-Angle Phone Stand', 5, 10.99),
('USB-C Fast Charging Cable 6ft', 8, 9.50),
('65W GaN USB-C Wall Charger', 3, 35.99),
('Privacy Screen Filter 24-Inch', 1, 44.50),
('Under Desk Cable Tray', 2, 23.00),
('Footrest Cushion for Office Desk', 1, 29.99),
('Wi-Fi 6 PCIe Adapter Card', 2, 39.99),
('Computer Tool Repair Kit', 1, 26.50),
('Anti-Static Grounding Mat', 2, 21.00);