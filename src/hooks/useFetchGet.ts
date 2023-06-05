import { useEffect, useState } from "react";

export function useFetchGet<TData>(url: string): TData | undefined {
    const [data, setData] = useState<TData>();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setData(json))
    }, [url])

    return data;
}