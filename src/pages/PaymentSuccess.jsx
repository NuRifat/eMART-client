import { Link } from "react-router";

const PaymentSuccess = () => {
  return (
    <div>
      Payment success, <br /> <br /> return to <t/>
      <Link
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        to="/dashboard"
      >
        Dashboard
      </Link>
    </div>
  );
};

export default PaymentSuccess;
