import { Responsable } from "@/app/interfaces/Responsable";

interface ResponsableRowProps {
  responsable: Responsable;
}

const ResponsableRow = ({ responsable }: ResponsableRowProps) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2 border text-center">{responsable.IDResponsable}</td>
      <td className="px-4 py-2 border">{responsable.Responsable}</td>
      <td className="px-4 py-2 border">{responsable.Puesto || "N/A"}</td>
      <td className="px-4 py-2 border">{responsable.Correo || "N/A"}</td>
      <td className="px-4 py-2 border">{responsable.Telefono || "N/A"}</td>
    </tr>
  );
};

export default ResponsableRow;

