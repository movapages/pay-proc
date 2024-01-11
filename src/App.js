import {useState} from "react";
import CustomerBar from "./components/CustomerBar";
import PayServiceList from "./components/PayServiceList";
import OrderReview from "./components/OrderReview";
// import SimpleCard from './components/SimpleCard';
import ControlButton from "./components/ControlButton";

function App() {

  const [payMethod, setPayMethod] = useState(null);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [showMainView, setShowMainView] = useState(true);

  const enableButton = () => {
    setButtonDisabled(false);
  };

  return (
    <div className="container flex flex-col items-center justify-start min-h-screen m-auto w-5/6">
      <h3 className="text-3xl self-start font-bold text-gray-400 p-3">Web Store</h3>
      <CustomerBar />
      {showMainView &&
        <><PayServiceList {...{payMethod, setPayMethod, payProviders, setShowMainView, enableButton}} />
        <ControlButton {...{isButtonDisabled, setShowMainView}} /></>}
      {!showMainView && <OrderReview/>}
    </div>
  );
}

export default App;

const payProviders = [
  {id: 1,
    markupTitle: <h4 className="text-3xl text-blue-500">Stripe</h4>,
    title: 'Stripe'
  },
  {id: 2,
    markupTitle: <h4 className="text-3xl"><span className="text-blue-700">Pay</span><span className="text-blue-300">Pal</span></h4>,
    title: 'PayPal'
  },
  {id: 3,
    markupTitle: <h4 className="text-3xl text-blue-500"><span className="text-black">Brain</span><span className="text-red-500">tree</span></h4>,
    title: 'Braintree'
  },
];

// const payProviders = [
//   {id: 1,
//     markupTitle: <h4 className="text-3xl">Stripe</h4>,
//     cardTitle: <SimpleCard cardClass='text-blue-500' cardTitle='Stripe' />,
//     title: 'Stripe'
//   },
//   {id: 2,
//     markupTitle: <h4 className="text-3xl"><span className="text-blue-700">Pay</span><span className="text-blue-300">Pal</span></h4>,
//     cardTitle: <SimpleCard cardClass='text-blue-500' cardTitle='<span className="text-blue-700">Pay</span><span className="text-blue-300">Pal</span>'/>,
//     title: 'PayPal'
//   },
//   {
//     id: 3,
//     markupTitle: <h4 className="text-3xl"><span className="text-black">Brain</span><span className="text-red-500">tree</span></h4>,
//     cardTitle: <SimpleCard cardClass='' cardTitle='<></SimpleCard><span className="text-black">Brain</span>
//   <span className="text-red-500">tree</span></>' />,
//     title: 'Braintree'
//   },
// ];

