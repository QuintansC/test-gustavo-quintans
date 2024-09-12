import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState<any>()

  useEffect(() => {
    fetch('/api/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: "follow"
    })
    .then((res) => res.json())
    .then((data: any) => {
      setData(data)
    })
  }, []);

  return [data, setData];
};

export default useData;
