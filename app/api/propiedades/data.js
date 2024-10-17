const properties = [
  {
    id: 1,
    location: "Los Charrúas, Concordia, Entre Ríos",
    code: "CAZ-101505",
    description: "Venta casa en Los Charrúas",
    type: 'Casa',
    transaction: 'Venta',
    total_surface: "260 m2",
    covered_surface: "220 m2",
    uncovered_surface: "40 m2",
    features: {
      modern_amenities: [
        "agua corriente",
        "luz",
        "pavimento",
        "desagüe cloacal",
      ],
    },
    basic_information: {
      rooms: 3,
      bedrooms: 2,
      bathrooms: 1,
      condition: "A estrenar",
    },
    price: "USD 47.000",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F1%2Fimage001.png?alt=media&token=ca0fc38a-2cca-4810-ace8-c9f8c0452a8c",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F1%2Fimage003.png?alt=media&token=c696b95f-5ea9-4d1b-8f65-c4da6a5a983c",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F1%2Fimage005.png?alt=media&token=891b1f5e-7221-4924-bfb8-f37b7ddc4ea2",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F1%2Fimage007.png?alt=media&token=78026fcc-e54b-448e-8060-7a7a160d84bd",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F1%2Fimage009.png?alt=media&token=d6ed8487-b6a0-4e51-b7a6-a84a0b8e6bf5",
    ],
    agent: {
      name: "Cazatti Soluciones Inmobiliarias",
      license: "CCPIER Mat 1523",
      contact: {
        phone: "03454024075",
        email: "cazattiailen@gmail.com",
      },
      image:"https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Vendedores%2F2.png?alt=media&token=05fc2f48-a254-4928-9a7b-064e99d2c697"
    },
  },
  {
    id: 2,
    location: "Los Charrúas, Concordia, Entre Ríos",
    type: 'Casa',
    transaction: 'Venta',
    code: "CAZ-101507",
    description:
      "¡Bienvenido a la propiedad ubicada en Los Charrúas, Entre Ríos!",
    total_surface: "418 m2",
    covered_surface: "350 m2",
    uncovered_surface: "68 m2",
    basic_information: {
      rooms: 5,
      bedrooms: 3,
      bathrooms: 1,
      garages: 1,
      garage_type: "Semicubierto",
      antiquity: "Menos de 10 años",
    },
    price: "USD 97.000",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F2%2Fimage011.png?alt=media&token=18e3d96d-0ca6-45f5-8716-80a2692c4526",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F2%2Fimage013.png?alt=media&token=1707b892-4f4e-43f0-87a0-222739de6806",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F2%2Fimage015.png?alt=media&token=5191dff9-0fe8-4e08-8898-27d5d0f97c98",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F2%2Fimage017.png?alt=media&token=1d726fc7-c49e-4bab-9272-99ae338ef2dc",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F2%2Fimage019.png?alt=media&token=b1cd15ea-a68c-4564-bd97-6dab052f11bb",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F2%2Fimage021.png?alt=media&token=7c416edf-c892-4553-af64-7efef2998b3a",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F2%2Fimage023.png?alt=media&token=87fdfa35-834c-40da-aa9e-33eb214fed29",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F2%2Fimage025.png?alt=media&token=6c7dd680-05ef-4a11-b967-5f2b24aa8d77",
    ],
    agent: {
      name: "Cazatti Soluciones Inmobiliarias",
      license: "CCPIER Mat 1523",
      contact: {
        phone: "03454024075",
        email: "cazattiailen@gmail.com",
      },
      image: "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Vendedores%2F2.png?alt=media&token=05fc2f48-a254-4928-9a7b-064e99d2c697"
    },
  },
  {
    id: 3,
    location: "Concordia, Entre Ríos",
    code: "CAZ-97216",
    description:
      "En venta terreno en calles Yamandú Rodríguez y E. Poenitz, cerca de avenida Eva Perón.",
    type: 'Terreno',
    transaction: 'Venta',
    covered_surface: "440 m2",
    basic_information: {
      access: "Otro terreno",
      disposition: "Otro",
      total_surface: "440 m2",
      front: "20 m",
      back: "20 m",
    },
    features: ["Agua corriente", "Luz", "Pavimento"],
    price: "USD 35.000",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F3%2Fimage027.png?alt=media&token=a7fc96d4-ee6c-4176-b18c-832c7cad5bc6",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F3%2Fimage029.png?alt=media&token=8908ac21-bf3c-4e1e-b3af-16f628e9ad77",
    ],
    agent: {
      name: "Cazatti Soluciones Inmobiliarias",
      license: "CCPIER Mat 1523",
      contact: {
        phone: "03454024075",
        email: "cazattiailen@gmail.com",
      },
      image:"https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Vendedores%2F2.png?alt=media&token=05fc2f48-a254-4928-9a7b-064e99d2c697"
    },
  },
  {
    id: 4,
    location: "Concordia, Entre Ríos",
    code: "CAZ-104895",
    description:
      "En la exclusiva zona de Humberto I° en Concordia, se encuentra disponible un terreno de 389 m2.",
    type: 'Terreno',
    transaction: 'Venta',
    total_surface: "389 m2",
    basic_information: {
      access: "Otro terreno",
      disposition: "Interno",
    },
    features: ["Agua corriente", "Luz", "Uso comercial"],
    price: "USD 42.000",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F4%2Fimage031.png?alt=media&token=4c6a6169-c35c-45fc-958d-21f04a96b6be",
    ],
    agent: {
      name: "Cazatti Soluciones Inmobiliarias",
      license: "CCPIER Mat 1523",
      contact: {
        phone: "03454024075",
        email: "cazattiailen@gmail.com",
      },
      image:"https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Vendedores%2F2.png?alt=media&token=05fc2f48-a254-4928-9a7b-064e99d2c697"
    },
  },
  {
    id: 5,
    location: "Juan José Valle 722, Concordia, Entre Ríos",
    code: "CAZ-99913",
    description:
      "Casa en venta sobre la calle Juan José Valle, con una orientación oeste.",
    type: 'Casa',
    transaction: 'Venta',
    total_surface: "300 m2",
    covered_surface: "258 m2",
    uncovered_surface: "42 m2",
    basic_information: {
      rooms: 5,
      bedrooms: 2,
      bathrooms: 1,
      garages: 1,
      garage_type: "Semicubierto",
      orientation: "Oeste",
      antiquity: "40 a 50 años",
    },
    price: "USD 40.000",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F5%2Fimage033.png?alt=media&token=b279845f-1f5c-477f-88ff-0609d97e64eb",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F5%2Fimage035.png?alt=media&token=83e1023f-8d7f-44c8-b0d4-3c26c87b58d1",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F5%2Fimage037.png?alt=media&token=b2195144-61ed-4575-b869-f7ae6348a1e8",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F5%2Fimage039.png?alt=media&token=900756eb-95e9-4cba-9dd2-22d33eeef1e3",
      "https://firebasestorage.googleapis.com/v0/b/inmobiliaria-gerez.appspot.com/o/Concordia%2F5%2Fimage041.png?alt=media&token=3d296937-b7de-4edb-90c5-147739fc7089",
    ],
    agent: {
      name: "Cazatti Soluciones Inmobiliarias",
      license: "CCPIER Mat 1523",
      contact: {
        phone: "03454024075",
        email: "cazattiailen@gmail.com",
      },
    },
  },
];

export default properties;
