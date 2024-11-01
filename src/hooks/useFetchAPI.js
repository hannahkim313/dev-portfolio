import { useEffect, useState } from 'react';
import axios from '../configs/axiosConfig';
import handleError from '../utils/handleError';
import logError from '../utils/logError';

const useFetchAPI = (url, method = 'GET', body = null, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios({
          url,
          method,
          data: body,
          ...options,
          signal,
        });
        setData(response.data);
        setFetchError(null);
      } catch (err) {
        if (err.code !== 'ERR_CANCELED') {
          if (err.response?.data?.error) {
            setFetchError(err.response.data.error);
          } else {
            setFetchError(handleError(err));
          }

          logError('Error during API request:', err);
        }
      } finally {
        setLoading(false);
      }
    };

    if (url && body) {
      fetchData();
    }

    return () => {
      controller.abort();
    };
  }, [url, body]);

  return { data, loading, fetchError };
};

export default useFetchAPI;
