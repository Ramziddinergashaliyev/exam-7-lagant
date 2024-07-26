import React from "react";
import Product from "../product/Product";
import { useGetProductsQuery } from "../../context/api/productApi";
import { GoArrowRight } from "react-icons/go";
import "../product/product.scss";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loading from "../loading/Loading";

const ProductWrapper = ({ isBool }) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const { data, isLoading } = useGetProductsQuery({ limit: 8, page: page });
  return (
    <div className="product container">
      <div className="product__top">
        <h3 className="product__top__title">New Arrivals</h3>
        <p className="product__top__text">
          More Products
          <GoArrowRight />
        </p>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="product__cards">
            {data?.map((el) => (
              <Product isBool={isBool} data={el} key={el.id} />
            ))}
          </div>
        </>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginTop: "20px",
        }}
        className="paroduct__pegination"
      >
        <Stack spacing={2}>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
      </div>
    </div>
  );
};

export default ProductWrapper;
