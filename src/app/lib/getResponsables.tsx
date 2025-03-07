export async function getResponsables() {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
      const res = await fetch(`${baseUrl}/api/responsables`, {
        cache: "no-store", // Forzar SSR
      });
  
      if (!res.ok) {
        throw new Error(`Error ${res.status}: No se pudo obtener los datos`);
      }
  
      const data = await res.json();
      return { data: data.data, error: null };
    } catch (error) {
      console.error("Error en la carga de datos:", error);
      return { data: [], error: "Hubo un problema al obtener los datos. Inténtalo más tarde." };
    }
  }
  