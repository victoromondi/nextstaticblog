const Dynamic = (props) => {
  return (
    <div>
      <h2>Welcome to Dynamic Content</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, tempore,
        sunt officia quidem voluptatibus laborum deserunt sit mollitia, ex
        possimus nihil neque necessitatibus perspiciatis omnis earum error ullam
        reiciendis at.
      </p>
      <h5>Weather forecast:</h5>
      <small>Update Time: {props.updateTime}</small>
      <p>{props.forecast}</p>
    </div>
  );
};

export default Dynamic;

// Using getServerSideProps ensures that the data is loaded afresh every time
// Unfortunately, this isn't good for performance
// Use sparingly and only when it's really necessary
export const getServerSideProps = async () => {
  const response = await fetch(
    "https://api.weather.gov/gridpoints/MFL/109,49/forecast"
  );
  const data = await response.json();

  return {
    props: {
      forecast: data.properties.periods[0].detailedForecast,
      updateTime: data.properties.updateTime,
    },
  };
};
