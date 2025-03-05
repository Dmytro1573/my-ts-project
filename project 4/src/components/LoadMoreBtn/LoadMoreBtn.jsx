export default function LoadMoreBtn({ onLoadMore, isLoading }) {
  return (
    <>
      <button
        className=""
        type="button"
        onClick={onLoadMore}
        disabled={isLoading}
      >
        {isLoading ? "Loading" : "LoadMore"}
      </button>
    </>
  );
}
