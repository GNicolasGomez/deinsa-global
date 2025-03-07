import { Responsable } from '../interfaces/Responsable'
interface TableProps {
  data: Responsable[];
}

const Table = ({ data }: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Responsable</th>
            <th className="border p-2">Puesto</th>
            <th className="border p-2">Correo</th>
            <th className="border p-2">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{item.IDResponsable}</td>
              <td className="border p-2">{item.Responsable}</td>
              <td className="border p-2">{item.Puesto || "N/A"}</td>
              <td className="border p-2">{item.Correo || "N/A"}</td>
              <td className="border p-2">{item.Telefono || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;