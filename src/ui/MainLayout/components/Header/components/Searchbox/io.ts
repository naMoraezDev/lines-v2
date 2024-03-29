import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const useSearchbox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParam = searchParams.get("search");

  const [search, setSearch] = useState(searchParam as string);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (search) {
      router.push(`/linhas?search=${search}`);
    }
  };

  return {
    search,
    handleSubmit,
    handleSearch,
  };
};
