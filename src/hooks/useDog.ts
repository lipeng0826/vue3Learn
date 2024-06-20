import { reactive } from "vue";
import axios from "axios";

export default function () {
  let dogList: string[] = reactive([]);

  const getDog = async () => {
    const res = await axios.get("https://dog.ceo/api/breeds/image/random");
    dogList.push(res.data.message);
  };
  return {
    dogList,
    getDog,
  };
}
