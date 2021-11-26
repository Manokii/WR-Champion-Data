// import wr from "../wr.json";
import axios, { AxiosResponse } from "axios";
import fs from "fs";
import { WildRiftAPIResponse } from "./types/wr_api_champion";
import { WildRiftAPIResposeAllChampions } from "./types/wr_api_champios_all";

async function getChampions() {
  const { data } = await axios.get<WildRiftAPIResposeAllChampions>(
    "https://wildrift.leagueoflegends.com/page-data/en-sg/champions/page-data.json"
  );
  const [{ championList }] = data.result.data.allContentstackChampions.nodes;

  let promises = (championList ?? []).map((champion) => {
    return axios.get<WildRiftAPIResponse>(
      "https://wildrift.leagueoflegends.com/page-data/en-sg" +
        champion.url.url +
        "/page-data.json"
    );
  });

  saveChampionsToFile(promises);
}

async function saveChampionsToFile(
  promises: Promise<AxiosResponse<WildRiftAPIResponse>>[]
) {
  const champions = await Promise.all(promises).then((data) => {
    return data.map(({ data }) => {
      const [champion] = data.result.data.allContentstackChampionDetail.nodes;
      fs.writeFile(
        `champions/${champion.title}.json`,
        JSON.stringify(champion),
        (err) => {
          if (err) {
            console.error(err);
          }
        }
      );
      return champion;
    });
  });

  fs.writeFile("champions.json", JSON.stringify(champions), console.error);
}

getChampions();
