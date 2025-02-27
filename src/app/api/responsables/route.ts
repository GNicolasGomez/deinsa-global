import { NextResponse } from "next/server";
import responsablesData from "@/data/responsables.json"; // Importamos JSON

// Definición de tipo para los datos
interface Responsable {
  Correo?: string;
  IDCategoria?: string;
  IDResponsable: string;
  IDTipo: string;
  Puesto?: string;
  Responsable: string;
  Telefono?: string;
}

interface ApiResponse {
  data?: Responsable[];
  error?: string;
}

export async function GET(): Promise<NextResponse<ApiResponse>> {
  try {
    const responsables = responsablesData.data.responsables as Responsable[];
    
    // Se validan que existan datos
    if (!Array.isArray(responsables) || responsables.length === 0) {
      return NextResponse.json(
        { error: "No se encontraron responsables" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: responsables }, { status: 200 });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
    return NextResponse.json(
      { error: "Error al cargar los datos" },
      { status: 500 }
    );
  }
}
