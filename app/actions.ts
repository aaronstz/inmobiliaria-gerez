"use server";

export async function getProperties() {
  try {
    const res = await fetch("http://localhost:3001/properties/");
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getDetails(Id: string) {
  const res = await fetch(`http://localhost:3001/properties/${Id}`, {
    method: "GET",
  });

  if(!res.ok) return undefined;

  return res.json();
}
