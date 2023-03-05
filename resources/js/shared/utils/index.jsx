import { notification } from 'antd';
import { toast } from 'sonner';

export const API_URL = `${window.location.origin}/api`;

export const setPageTitle = (title) => {
  window.document.title = title;
};

const showNotification = (
  message = 'Something went wrong',
  type = 'error',
  description = null
) => {
  toast[type](message, {
    description: description,
  });
  /* notification[type]({
    message: title ? title : type[0].toUpperCase() + type.slice(1),
    description: message,
    placement: 'bottomRight',
    duration: sticky ? 0 : 4.5,
  }); */
};

export const handleErrorResponse = (
  error,
  callback = null,
  errorMessage = null
) => {
  console.error(error);

  if (errorMessage) {
    showNotification(errorMessage, 'error');
  } else {
    errorMessage = 'Something went wrong';

    if (typeof error === 'string') {
      try {
        error = JSON.parse(error);
      } catch (error) {
        // do nothing
      }
    }

    if (error?.message) {
      errorMessage = error.message;
    }

    if (error?.response?.data?.message) {
      const status = error.response.data.status;
      const payload = error.response.data.payload;
      const message = error.response.data.message;

      if (status === 400 && payload && typeof payload === 'object') {
        handleBadRequest(payload);
      } else {
        showNotification(message, 'error');
      }
    } else {
      showNotification(errorMessage, 'error');
    }
  }

  if (callback) {
    return callback();
  }
};

const handleBadRequest = (errorObject) => {
  Object.values(errorObject).forEach((errors) => {
    errors.forEach((error) => {
      showNotification(error, 'error', false);
    });
  });
};
