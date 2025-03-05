import ClipLoader from "react-spinners/ClipLoader";

export default function Loader({ isLoading }) {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <>
      <ClipLoader
        color="green"
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}
