import { BsCartCheckFill } from "react-icons/bs";
import { BsPersonBoundingBox } from "react-icons/bs";

const CustomerBar = () => {
  return (
    <div className="rounded flex flex-row gap-4 border-b justify-between w-full bg-gradient-to-r from-gray-200">
      <div className="basis-1/2"></div>
      <div className="basis-1/4 flex flex-row justify-end p-3 text-xl"><BsCartCheckFill title='Shopping Cart' /></div>
      <div className="basis-1/4 flex flex-row justify-end p-3 text-xl"><BsPersonBoundingBox title='User Account' /></div>
    </div>
  )
};

export default CustomerBar;