import { useDispatch } from "react-redux";
import { fetchExchangeCurrency } from '../../redux/operations';

export const Form = () => {
    const dispatch = useDispatch()
    const handleSubmit = (ev) => {
        ev.preventDefault()
        const { value } = ev.target.elements.currency;
        const [amount,from, , to] = value.split(' ');
        dispatch(fetchExchangeCurrency({ amount, from, to }));
    }
  return (
    <form onSubmit={handleSubmit}>
      <input name="currency" type="text" placeholder="15 USD in UAH" />
      <button type="submit">Exchange</button>
    </form>
  );
}

// {amount:15, from: 'USD', to:'UAH'}