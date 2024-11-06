const MyGithub = (props) => {
  return (
    <div>
      <img src={props.devData.avatar_url} alt={props.devData.name} />
      <h3>Developer Name: {props.devData.name}</h3>
      <p>Number of Public Repos: {props.devData.public_repos}</p>
      <h4>Developer Bio:</h4>
      <p>{props.devData.bio}</p>
      <h5>Total Repo Changes: {props.devData.repochanges}</h5>
    </div>
  );
};

export default MyGithub;

export const getStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/victoromondi");
  const data = await response.json();
  data.repochanges = 23;

  return {
    props: {
      devData: data,
    },
    revalidate: 10,
  };
};
