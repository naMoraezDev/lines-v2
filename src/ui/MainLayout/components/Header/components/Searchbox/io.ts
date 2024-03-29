import { useState } from "react";
import { useSearchParams } from "next/navigation";

export const useSearchbox = () => {
  const searchParams = useSearchParams();
  const searchParam = searchParams.get("search");

  const [search, setSearch] = useState(searchParam as string);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  return {
    search,
    searchParam,
    handleSearch,
  };
};
