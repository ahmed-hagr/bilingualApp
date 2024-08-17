import React from "react";

interface ErrorSnackbarProps {
  message: string;
}

const ErrorSnackbar: React.FC<ErrorSnackbarProps> = ({ message }) => {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg">
      Error occurred: {message}
    </div>
  );
};

export default ErrorSnackbar;
