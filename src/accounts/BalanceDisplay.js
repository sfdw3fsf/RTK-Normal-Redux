import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const account = useSelector((store) => store.account);
  const isLoading = useSelector((store) => store.account.isLoading)
  const balance = account.balance
  return <div className="balance">{!isLoading ? formatCurrency(balance) : 'Converting'}</div>;
}

export default BalanceDisplay;
