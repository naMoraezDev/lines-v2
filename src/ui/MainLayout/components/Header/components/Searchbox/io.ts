import { useState } from "react";
import { useRouter } from "next/navigation";

export const useSearchbox = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSearchSubmit = () => {
    if (search) {
      router.push(`/linhas?search=${search}`);
    }
  };
  return {
    handleSearch,
    handleSearchSubmit,
  };
};
