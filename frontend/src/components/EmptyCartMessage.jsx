import { Link } from "react-router-dom";

const EmptyCartMessage = () => {
  return (
    <div className="w-full h-[70vh] flex flex-col gap-15 items-center justify-center text-center">
      <p className="text-3xl sm:text-5xl font-bold mt-30">
        Your Cart Is Empty!
      </p>
      <Link
        className="border border-gray-700 font-medium p-3 rounded-2xl"
        to="/collection"
      >
        Go To Collections
      </Link>
    </div>
  );
};
export default EmptyCartMessage;
