
const Base = (props) => {
  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <main role="main">
        {props.children}
      </main>
    </div>
  );
};
export default Base;
