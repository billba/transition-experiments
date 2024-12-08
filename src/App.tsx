import "./App.css";

const App = () => {
  return (
    <div id="Grid">
      <div id="Q" className="section"><h4>Question</h4></div>
      <div id="A" className="section">
        <h4>Answer</h4>
        <textarea>Answer here</textarea>
      </div>
      <div id="C" className="section">
        <h4>Citations</h4>
        <ol>
          <li className="approved">First Citation</li>
          <li className="rejected">Second Citation</li>
          <li className="approved">Third Citation</li>
        </ol>
      </div>
      <div id="R" className="section"><h4>Review</h4></div>
    </div>
  )
};

export default App;