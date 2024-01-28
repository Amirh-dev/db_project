import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <div>
        <Link href="/seller">Seller</Link>
      </div>
      <div>
        <Link href="/customer">Customer</Link>
      </div>
    </div>
  );
};

export default HomePage;
