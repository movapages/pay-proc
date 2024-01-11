const PayServiceItem = (props) => {

  const {provider, setPayMethod, enableButton} = props;

  return (
    <div onClick={() => {
      setPayMethod(provider.title);
      enableButton();
    }}
         className="min-h-[220px] min-w-[220px] border rounded hover:bg-blue-100 hover:cursor-pointer">
      <div className="container">
        <section className="font-bold w-full border border-gray-100 min-h-44 flex-col flex justify-center items-center">
          {provider.markupTitle}
        </section>
        <footer className="flex-col flex justify-center items-center text-sm">
          {provider.title}'s Terms & Conditions
        </footer>
      </div>
    </div>
  )
};

export default PayServiceItem;


// <section className="font-bold w-full border border-gray-100 min-h-44 flex-col flex justify-center items-center">
//   {provider.markupTitle}
// </section>

// <section
//   dangerouslySetInnerHTML={{__html: provider.cardTitle}}
//   className="font-bold w-full border border-gray-100 min-h-44 flex-col flex justify-center items-center">
// </section>