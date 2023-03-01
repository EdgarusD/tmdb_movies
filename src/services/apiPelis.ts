

export default function subidaJson(obj: object, url:string) {



  const subida = (objet:object) => {
    console.log("fetch")
    fetch(`http://localhost/peliculas/${url}`, {
      method: "POST",
      body: JSON.stringify(objet),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.a);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  subida(obj);

}
