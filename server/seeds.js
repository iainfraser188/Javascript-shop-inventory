use guitar_shop;
db.dropDatabase();


db.manufacturers.insertMany ([
    {
      name: "Gibson",
      location: "Los Angeles",
      established:"1952"
    },
    {
      name: "Fender",
      location: "Austin",
      established:"1965"
    },
    {
      name: "Taylor",
      location: "San Deago",
      established:"1972"
    }
    
  ]);

  db.guitars.insertMany ([
      {
          name:"Les Paul",
          type:"electric",
          strings:"6",
          manufacturer:"Gibson",
          stockPrice:300,
          retailPrice:550,
      },
      {
        name:"Telecaster",
        type:"electric",
        strings:"6",
        manufacturer:"Fender",
        stockPrice:250,
        retailPrice:500
    },
    {
        name:"Academy",
        type:"acoustic",
        strings:"6",
        manufacturer:"Taylor",
        stockPrice:200,
        retailPrice:450
    }
  ]);

  
