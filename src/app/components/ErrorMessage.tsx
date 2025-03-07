interface ErrorProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorProps) => {
  return (
    <div className="text-red-600 text-center bg-red-100 p-4 rounded-md">
      {message}
    </div>
  );
};

export default ErrorMessage;