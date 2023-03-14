
import { showNotification } from "@mantine/notifications";

export default function subidaJson(obj: object, url:string) {



  const subida = (objet:object) => {
    console.log("fetch")
    fetch(`http://localhost/peliculas/${url}`, {
      method: "POST",
      body: JSON.stringify(objet),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.statusDb);
        showNotification({
          title: data.statusDb,
          message: data.message,
          styles: ()=>({
            root: {
              '&::before': { backgroundColor: data.color },
            }
          })
        })
      })
      .catch((error) => {
        showNotification({
          title: "error",
          message: "A ocurrido un error inesperado",
          styles: ()=>({
            root: {
              backgroundColor: "#cce0ff",
              '&::before': { backgroundColor: "#cce0ff" },
            }
          })
        })
      });
  };
  subida(obj);
}
