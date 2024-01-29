import React from "react";
import Link from "next/link";

const SellerPage = () => {
  return (
    <div>
      <h1>Seller Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/seller/activeRentals">
              <button>Active Rentals</button>
            </Link>
          </li>
          <li>
            <Link href="/seller/customerList">
              <button>Customer List</button>
            </Link>
          </li>
          <li>
            <Link href="/seller/list-movies-by-genre">
              <button>List Movies by Genre</button>
            </Link>
          </li>
          <li>
            <Link href="/seller/movieList">
              <button>Movie List</button>
            </Link>
          </li>
          <li>
            <Link href="/seller/MovieSearch">
              <button>Movie Search</button>
            </Link>
          </li>
          <li>
            <Link href="/seller/rental">
              <button>Rental</button>
            </Link>
          </li>
          <li>
            <Link href="/seller/reserve">
              <button>Reserve</button>
            </Link>
          </li>
          <li>
            <Link href="/seller/storeInfo">
              <button>Store Info</button>
            </Link>
          </li>
          <li>
            <Link href="/seller/totalPayments">
              <button>Total Payments</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SellerPage;
