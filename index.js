const Button = (props) => {
  const { className, text } = props;

  return <button className={className}>{text}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button className="like" text="Like" />
      <Button className="comment" text="Comment" />
      <Button className="share" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
