const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;

export const fetchApi = async <Type = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  const data = await fetch(`${baseUrl}${input}`, {
    ...init,
  });

  const result = await data.json();

  return result as Type;
};
