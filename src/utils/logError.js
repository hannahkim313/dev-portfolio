const logError = (message, error) => {
  const isProduction = import.meta.env.VITE_API_NODE_ENV === 'production';

  if (!isProduction) {
    console.error(message);
  }

  throw error;
};

export default logError;
