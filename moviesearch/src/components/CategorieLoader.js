import React, { useEffect } from "react";
import { fetchCategories } from "../features/category/categorySlice";
import { useDispatch } from "react-redux";

const CategorieLoader = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return <></>;
};

export default CategorieLoader;
