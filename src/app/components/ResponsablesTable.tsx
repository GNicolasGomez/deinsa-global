'use client'
import { Responsable } from "@/app/interfaces/Responsable";
import ResponsableRow from "./ResponsableRow";

interface ResponsableTableProps {
  responsables: Responsable[];
}

const ResponsableTable = ({ responsables }: ResponsableTableProps) => {
  return (
    <div className="mx-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">Lista de Responsables</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Responsable</th>
              <th className="px-4 py-2 border">Puesto</th>
              <th className="px-4 py-2 border">Correo</th>
              <th className="px-4 py-2 border">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {responsables.map((res, index) => (
              <ResponsableRow key={index} responsable={res} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponsableTable;

