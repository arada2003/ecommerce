import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddToCartButton.css";

const AddToCartButton = () => {
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // แสดงการแจ้งเตือน
    setShowNotification(true);

    // ซ่อนการแจ้งเตือนหลังจาก 2 วินาที
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const handleBuyNow = () => {
    navigate("/cart"); // ลิ้งค์ไปหน้ารถเข็น
  };

  return (
    <div className="add-to-cart-container">
      <button onClick={handleAddToCart} className="add-to-cart-btn">
        เพิ่มสินค้าลงตะกร้า
      </button>
      <button onClick={handleBuyNow} className="buy-now-btn">
        ซื้อสินค้า
      </button>
      {showNotification && (
        <div className="notification">
          <span className="check-icon">✔</span>
          <p>คุณได้ทำการเพิ่มสินค้าในตะกร้าเรียบร้อยแล้ว</p>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
