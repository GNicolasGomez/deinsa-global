"use client";
import dynamic from "next/dynamic";
import { useResponsables } from "@/app/hooks/useResponsables";
import LoadingError from "./components/LoadingError";

// Cargar dinámicamente sin SSR
const ResponsableTable = dynamic(() => import("./components/ResponsablesTable"), {
  ssr: false,
});

export default function ResponsableTableContainer() {
  const { responsables, loading, error } = useResponsables();

  if (loading || error) {
    return <LoadingError loading={loading} error={error} />;
  }

  return <ResponsableTable responsables={responsables} />;
}
