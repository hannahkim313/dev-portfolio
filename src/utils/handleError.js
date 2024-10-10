const statusMessages = {
  400: 'Oops! It seems there was a problem with your request. Please check the information you provided and try again.',
  401: 'You need to be logged in to access this resource. Please log in and try again.',
  403: 'You do not have permission to access this resource.',
  500: 'Oops! Something went wrong on our end. Please try again later.',
};

const handleError = (error) => {
  const status = error.status;

  return statusMessages[status] || statusMessages[500];
};

export default handleError;
