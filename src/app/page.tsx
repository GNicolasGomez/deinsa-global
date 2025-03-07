import Table from "./components/Table";
import ErrorMessage from "./components/ErrorMessage";
import { getResponsables } from "./lib/getResponsables";

export default async function HomePage() {
  const { data: responsables, error } = await getResponsables();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Lista de Responsables</h1>

      {error ? <ErrorMessage message={error} /> : <Table data={responsables} />}
    </main>
  );
}

