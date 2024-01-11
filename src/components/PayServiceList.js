import PayServiceItem from "./PayServiceItem";

const PayServiceList = (props) => {
  const {payMethod, setPayMethod, payProviders, enableButton} = props;

  const providerList = payProviders.map((provider) => {
    return <PayServiceItem key={provider.id} {...{provider, setPayMethod, enableButton}} />
  });

  return (
    <div className="flex gap-1 flex-col justify-center m-3">
      { !payMethod &&
        <div className="text-base m-3">Please, choose a payment processing service.</div>}

      { payMethod &&
        <div className="text-base m-3">
          You've chosen: <strong>{payMethod}</strong>. Please, proceed to your order review.
        </div>}

      <div className="flex gap-16 flex-row justify-center m-1">{providerList}</div>
    </div>
  );
};
export default PayServiceList;