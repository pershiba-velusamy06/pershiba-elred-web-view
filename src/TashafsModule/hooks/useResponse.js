import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import instance from "../helpers/axios";

/**
 * Custom hook for handling API responses.
 * @param {string} url - The URL for the API endpoint.
 * @returns {object} response - The response object containing data, error, loading state, and data retrieval function.
 */
export const useResponse = (url) => {
  const [data, setData] = useState([]); // State for storing the retrieved data
  const [error, setError] = useState({}); // State for storing error information
  const [loading, setLoading] = useState(false); // State for tracking the loading state

  /**
   * Function to retrieve data from the API.
   */
  const getData = useCallback(() => {
    setLoading(true);
    axios
      .post(url)
      .then((res) => {
        if (res.data.success) {
          // Update the state with the retrieved data and reset the error state
          setData(res?.data?.result);
          setError({ error: false, message: "" });
        } else {
          // Update the error state with the error message
          setError({ error: true, message: res.message });
        }
        setLoading(false);
      })
      .catch((err) => {
        // Handle errors and update the error state
        setError({ error: true, message: "Something went wrong" });
        setLoading(false);
      });
  }, [url]);

  // Call the getData function when the component mounts or the URL changes
  useEffect(() => {
    getData();
  }, [getData]);

  // Return the response object
  return {
    data,
    error,
    setData,
    loading,
    getData,
  };
};
