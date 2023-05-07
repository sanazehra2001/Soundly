import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api_clients";

interface FetchResponse <T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint:string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

      apiClient
        .get<FetchResponse <T>>(endpoint, {signal: controller.signal})
        .then((res) => {
            setData(res.data.results);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)});

        return () => controller.abort();
    }, []);

    return {data, error}
};

export default useData;