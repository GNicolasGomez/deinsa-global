"use client";
import { useEffect, useState } from "react";
import { Responsable } from "../interfaces/Responsable";

export function useResponsables() {
  const [responsables, setResponsables] = useState<Responsable[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResponsables = async () => {
      setLoading(true); // Iniciar el estado de carga
      try {
        const res = await fetch("/api/responsables");

        if (!res.ok) {
          throw new Error("Error al obtener los responsables");
        }

        const { data } = await res.json();
        setResponsables(data); // Actualizamos el state
      } catch (err: any) {
        setError(err.message); // Guardar el mensaje de error
      } finally {
        setLoading(false); // Finalizar el estado de carga
      }
    };

    fetchResponsables(); // Llamar a la función para obtener los responsables
  }, []);

  return { responsables, loading, error };
}
