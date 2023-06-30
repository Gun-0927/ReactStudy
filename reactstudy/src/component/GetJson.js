import useFetch from "./ExFetch";

const GJson = () => {
    const [data] = useFetch("http://localhost:8081/getJson");
  
    return (
      <>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.name}{item.postDate}</p>;
          })}
      </>
    );
};

export default GJson;