'use client'
import { useResponsables } from "@/app/hooks/useResponsables";
import LoadingError from "./components/LoadingError";
import ResponsableTable from "./components/ResponsablesTable";

export default function ResponsableTableContainer() {
  const { responsables, loading, error } = useResponsables();

  return (
    <>
    {loading && error && <LoadingError loading={loading} error={error} />}
    <ResponsableTable responsables={responsables} />
    </>
  );
}
