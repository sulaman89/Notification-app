const Notification = (props) => {
  const { className, iconUrl, text } = props;
  const notificationClassName = `notificationContainer ${className}`;
  return (
    <div className={notificationClassName}>
      <img className="icon" src={iconUrl} />
      <p className="text">{text}</p>
    </div>
  );
};

const element = (
  <div className="bgContainer">
    <h1 className="heading">Notifications</h1>
    <div className="cardContainer">
      <Notification
        className="primaryIcon"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />
      <Notification
        className="successIcon"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
      />
      <Notification
        className="warningIcon"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
      />
      <Notification
        className="dangerIcon"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
