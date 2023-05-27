import React from "react";
import api from "../../services/api";
import * as M from "@mantine/core";
import DisplayDataMovie from "../../components/DisplayDataMovie";

export default function TvSeries() {
  const [series, setSeries] = React.useState<any[]>([]);
  React.useEffect(() => {
    async function getCategories() {
      const { data } = await api.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=32dd6f3014c24b7ad202c6421bfa1452"
      );
      setSeries(data.results);
      console.log(data.results)
    }

    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <M.Box>
      <M.Box>
        {series ? <DisplayDataMovie data={series} src={'tv'} tv={true}/> : <div>cargando</div>}
      </M.Box>
    </M.Box>
  );
}
