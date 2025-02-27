"use client";
import { useEffect, useState } from "react";
import { Responsable } from "../interfaces/Responsable";

export function useResponsables() {
  const [responsables, setResponsables] = useState<Responsable[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResponsables = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/responsables");

        if (!res.ok) {
          throw new Error("Error al obtener los responsables");
        }

        const { data } = await res.json();
        setResponsables(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Error desconocido");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchResponsables();
  }, []);

  return { responsables, loading, error };
}

