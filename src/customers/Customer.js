import { useSelector } from "react-redux";
function Customer() {
  console.log(useSelector((store) => store.customer));
  const customer = useSelector((store) => store.customer.fullName);

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
