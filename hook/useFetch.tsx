import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (word: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://api.datamuse.com/words?ml=${word}`
      );
      console.log(response);
    } catch (error) {
      error instanceof Error ? setError(error) : console.log(error);
    } finally {
      setIsLoading(false);
    }

    useEffect(() => {
      fetchData();
    }, []);
  };
};

export default useFetch;
