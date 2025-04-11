function SkipButton({ dispatch, answer }) {
  return (
    <button
      className="btn"
      onClick={() => {
        console.log("Skip button clicked");
        dispatch({ type: "skip" });
      }}
      disabled={answer !== null}>
      skip
    </button>
  );
}

export default SkipButton;
