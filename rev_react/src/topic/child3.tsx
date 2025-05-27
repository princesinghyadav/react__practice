

export default function Child3(props) {
  function isEvenOrOdd(num) {
    return num % 2 === 0 ? "even" : "odd";
  }

  return <h1>count is {isEvenOrOdd(props.count)} number</h1>;




  }