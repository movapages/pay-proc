const SimpleCard = (props) => {
  const {cardClass, cardTitle} = props;
  return <h4 className={[cardClass, 'text-3xl'].join(' ')}>{cardTitle}</h4>
};

export default SimpleCard;