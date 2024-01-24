interface PaginationProps {
    currentPage: number;
    handlePreviousPage: () => void;
    handleNextPage: () => void;
    isPreviousDisabled: boolean;
  }
  
  const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    handlePreviousPage,
    handleNextPage,
    isPreviousDisabled,
  }) => {
    return (
      <div className='flex gap-4 justify-end mt-5'>
        <button onClick={handlePreviousPage} disabled={isPreviousDisabled} className='px-4 py-2 border rounded-md'>
          Previous
        </button>
        <button onClick={handleNextPage} className='px-4 py-2 border rounded-md'>
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;