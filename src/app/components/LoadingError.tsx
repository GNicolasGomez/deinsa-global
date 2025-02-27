interface LoadingErrorProps {
    loading: boolean;
    error: string | null;
  }
  
  const LoadingError = ({ loading, error }: LoadingErrorProps) => {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4">
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="loader"></div>
            <p className="mt-2 text-gray-500 text-lg">Cargando...</p>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <strong className="font-bold">¡Error! </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        ) : null}
      </div>
    );
  };
  
  export default LoadingError;
  