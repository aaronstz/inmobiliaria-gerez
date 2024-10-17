// app/api/properties/[id]/route.js
import { NextResponse } from 'next/server';
import properties from '../data'; // Importamos las propiedades desde el archivo compartido

export async function GET({ params }) {
  const id = params;

  // Buscar la propiedad por su ID
  const property = properties.find((prop) => prop.id === parseInt(id));

  if (!property) {
    return NextResponse.json({ error: 'Property not found' }, { status: 404 });
  }
  return NextResponse.json(property);
}
