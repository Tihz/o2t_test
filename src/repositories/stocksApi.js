/* Data format
[{
    timestamp,
    index,
    stocks: { NASDAQ, CAC40 }
}]
 */
export const load = () =>
    fetch('http://localhost:8000?count=10')
        .then(response => response.json());