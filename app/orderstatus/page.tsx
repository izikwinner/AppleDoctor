'use client';
import { useEffect } from 'react';

const OrderStatusWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://web.remonline.app/static/dist/js/order-status-widget.js";
    script.setAttribute("data-widget-key", "cd713c08bdc2f803f609952ffde73c1e");
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <button className="my_btn" onClick={() => window.__statusWidget?.open()}>
      Check order status
    </button>
  );
};

export default OrderStatusWidget;

