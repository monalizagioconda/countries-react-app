const InfoElement = ({ label, value }) => {
  return (
    <div>
      <strong>{label}: </strong>
      <span>{value}</span>
    </div>
  );
};

export default InfoElement
