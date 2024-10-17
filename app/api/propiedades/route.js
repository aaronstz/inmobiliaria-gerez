// app/api/properties/route.js
import properties from './data';

export async function GET(request) {
  

  return new Response(JSON.stringify(properties), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request) {
  const newProperty = await request.json(); // Obtenemos los datos enviados en la solicitud
  // Aquí puedes agregar lógica para guardar la nueva propiedad en una base de datos
  return new Response(
    JSON.stringify({ message: "Propiedad creada", property: newProperty }),
    {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function DELETE(request) {
  // Lógica para manejar la eliminación de una propiedad
  return new Response(JSON.stringify({ message: "Propiedad eliminada" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
