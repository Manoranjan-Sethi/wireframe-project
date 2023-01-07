import React, { useEffect, useState } from "react";

function Homepage() {
  const [allData, setAllData] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/data")
      .then((res) => res.json())
      //   .then((data) => console.log(data))
      .then((data) => setAllData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="navbar-brand" href="#">
                Title
              </a>
            </li>
          </ul>
          <a class="navbar-brand" href="#"></a>
          <a class="nav-link active" aria-current="page">
            Homepage
          </a>
          <a class="nav-link active">About</a>
          <a class="nav-link active">Blog</a>
          <a class="nav-link active">Contact</a>
          <button type="button" class="btn btn-outline-primary">
            Button
          </button>
        </div>
      </nav>
      <div class="p-3 mb-2 bg-primary text-white">
        <h1 class="text-center">Title</h1>
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          ex aliquid sint provident velit consequuntur temporibus. Quae unde cum
          a ab dicta enim eum blanditiis velit laborum minus. Adipisci beatae
          atque qui!
        </p>
        <div class="d-grid gap-2 col-1 mx-auto">
          <button type="button" class="btn btn-outline-dark">
            Read More
          </button>
        </div>
      </div>
      <div>
        <h2 class="text-center">Classes</h2>
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          ex aliquid sint provident velit consequuntur temporibus. Quae
        </p>
      </div>
      <div>
        <div
          style={{
            display: "grid",
            gap: "40px",
            padding: "20px",
            gridTemplateColumns: "repeat(3,1fr)",
          }}
        >
          {allData?.map((elm) => (
            <div key={elm.ID}>
              <img src={elm.ImageUrl} styles={{ width: "40px" }} alt="" />
              <div>
                <h5>{elm.Name}</h5>
                <p>{elm.ShortDesc}</p>
                <button styles={{ borderRadius: "8px" }}>View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <p>Copyright &copy; 2021.All Rights Reserved</p>
          <p>Back to top</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
