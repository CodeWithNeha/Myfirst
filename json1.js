// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((result) => result.json())
// .then((data) => console.log(data))
// .catch((error)=> console.log(error));


//Async Await -> Syntactically improved way of the prev version
const getData = async () => {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await result.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  getData();