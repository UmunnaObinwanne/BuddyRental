const friendsData = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    activities: ["Watching movies", "Playing sports", "Going for hikes"],
    about:
      "I'm a friendly and outgoing person who loves to meet new people and have fun experiences together.",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png", // Placeholder image URL
    jobRole: "Software Engineer",
    followers: 100,
    following: 50,
    online: true,
    pricePerDay: 50, // Price per day in euros
    yourClients: [
      {
        name: "Alice Johnson",
        image: "https://bootdey.com/img/Content/avatar/avatar2.png",
        pricePaid: "€50",
      },
      {
        name: "Robert Brown",
        image: "https://bootdey.com/img/Content/avatar/avatar3.png",
        pricePaid: "€100",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    activities: [
      "Trying new restaurants",
      "Attending concerts",
      "Exploring museums",
    ],
    about:
      "I'm a foodie and music enthusiast who enjoys exploring the city and trying out new things.",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png", // Placeholder image URL
    jobRole: "Teacher",
    followers: 200,
    following: 75,
    online: false,
    pricePerDay: 70, // Price per day in euros
    yourClients: [
      {
        name: "Chris Evans",
        image: "https://bootdey.com/img/Content/avatar/avatar4.png",
        pricePaid: "€70",
      },
      {
        name: "Natalie Portman",
        image: "https://bootdey.com/img/Content/avatar/avatar5.png",
        pricePaid: "€140",
      },
    ],
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 30,
    activities: [
      "Reading books",
      "Playing board games",
      "Going for long walks",
    ],
    about:
      "I'm a bookworm and enjoy spending my free time reading novels and exploring new authors.",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png", // Placeholder image URL
    jobRole: "Doctor",
    followers: 150,
    following: 100,
    online: true,
    pricePerDay: 60, // Price per day in euros
    yourClients: [
      {
        name: "Samuel Jackson",
        image: "https://bootdey.com/img/Content/avatar/avatar6.png",
        pricePaid: "€60",
      },
      {
        name: "Emma Watson",
        image: "https://bootdey.com/img/Content/avatar/avatar7.png",
        pricePaid: "€120",
      },
    ],
  },
  {
    id: 4,
    name: "Emily Williams",
    age: 23,
    activities: ["Painting", "Dancing", "Cooking"],
    about:
      "I'm an artist at heart and love expressing myself through painting and dancing. I also enjoy experimenting with new recipes in the kitchen.",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png", // Placeholder image URL
    jobRole: "Artist",
    followers: 300,
    following: 120,
    online: false,
    pricePerDay: 80, // Price per day in euros
    yourClients: [
      {
        name: "Tom Hanks",
        image: "https://bootdey.com/img/Content/avatar/avatar8.png",
        pricePaid: "€80",
      },
      {
        name: "Scarlett Johansson",
        image: "https://bootdey.com/img/Content/avatar/avatar9.png",
        pricePaid: "€160",
      },
    ],
  },
  {
    id: 5,
    name: "Daniel Brown",
    age: 32,
    activities: ["Cycling", "Photography", "Yoga"],
    about:
      "I'm an outdoor enthusiast who enjoys cycling through scenic routes and capturing beautiful moments through photography. Yoga helps me stay balanced and focused.",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png", // Placeholder image URL
    jobRole: "Photographer",
    followers: 250,
    following: 80,
    online: true,
    pricePerDay: 90, // Price per day in euros
    yourClients: [
      {
        name: "Leonardo DiCaprio",
        image: "https://bootdey.com/img/Content/avatar/avatar10.png",
        pricePaid: "€90",
      },
      {
        name: "Jennifer Lawrence",
        image: "https://bootdey.com/img/Content/avatar/avatar1.png",
        pricePaid: "€180",
      },
    ],
  },
  {
    id: 6,
    name: "Olivia Garcia",
    age: 27,
    activities: ["Baking", "Gardening", "DIY Crafts"],
    about:
      "I'm passionate about baking delicious treats and creating beautiful gardens. DIY crafts are my way of adding a personal touch to my surroundings.",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png", // Placeholder image URL
    jobRole: "Chef",
    followers: 180,
    following: 90,
    online: false,
    pricePerDay: 75, // Price per day in euros
    yourClients: [
      {
        name: "George Clooney",
        image: "https://bootdey.com/img/Content/avatar/avatar2.png",
        pricePaid: "€75",
      },
      {
        name: "Sandra Bullock",
        image: "https://bootdey.com/img/Content/avatar/avatar3.png",
        pricePaid: "€150",
      },
    ],
  },
  {
    id: 7,
    name: "William Martinez",
    age: 29,
    activities: [
      "Playing musical instruments",
      "Traveling",
      "Learning new languages",
    ],
    about:
      "I'm a music lover who enjoys playing various instruments and exploring different cultures through travel. Learning new languages is a hobby that opens doors to new opportunities.",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png", // Placeholder image URL
    jobRole: "Musician",
    followers: 400,
    following: 200,
    online: true,
    pricePerDay: 100, // Price per day in euros
    yourClients: [
      {
        name: "Meryl Streep",
        image: "https://bootdey.com/img/Content/avatar/avatar4.png",
        pricePaid: "€100",
      },
      {
        name: "Denzel Washington",
        image: "https://bootdey.com/img/Content/avatar/avatar5.png",
        pricePaid: "€200",
      },
    ],
  },
  {
    id: 8,
    name: "Sophia Lopez",
    age: 26,
    activities: ["Skiing", "Rock climbing", "Sculpting"],
    about:
      "I'm an adrenaline junkie who loves the thrill of skiing down slopes and climbing rocky cliffs. Sculpting is my creative outlet where I can mold ideas into tangible forms.",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png", // Placeholder image URL
    jobRole: "Athlete",
    followers: 350,
    following: 150,
    online: true,
    pricePerDay: 120, // Price per day in euros
    yourClients: [
      {
        name: "Chris Hemsworth",
        image: "https://bootdey.com/img/Content/avatar/avatar6.png",
        pricePaid: "€120",
      },
      {
        name: "Gal Gadot",
        image: "https://bootdey.com/img/Content/avatar/avatar7.png",
        pricePaid: "€240",
      },
    ],
  },
  {
    id: 9,
    name: "Ethan Wilson",
    age: 31,
    activities: ["Fishing", "Cooking seafood", "Playing guitar"],
    about:
      "I'm a seafood enthusiast who enjoys fishing for fresh catches and preparing delicious seafood dishes. Playing guitar helps me unwind and express myself through music.",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png", // Placeholder image URL
    jobRole: "Writer",
    followers: 280,
    following: 100,
    online: false,
    pricePerDay: 85, // Price per day in euros
    yourClients: [
      {
        name: "Johnny Depp",
        image: "https://bootdey.com/img/Content/avatar/avatar8.png",
        pricePaid: "€85",
      },
      {
        name: "Keira Knightley",
        image: "https://bootdey.com/img/Content/avatar/avatar9.png",
        pricePaid: "€170",
      },
    ],
  },
  {
    id: 10,
    name: "Ava Anderson",
    age: 24,
    activities: ["Hiking", "Paintball", "Archery"],
    about:
      "I'm an adventure seeker who loves exploring nature trails and engaging in outdoor activities like paintball and archery. Nature fuels my spirit and keeps me grounded.",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png", // Placeholder image URL
    jobRole: "Designer",
    followers: 220,
    following: 110,
    online: true,
    pricePerDay: 110, // Price per day in euros
    yourClients: [
      {
        name: "Matt Damon",
        image: "https://bootdey.com/img/Content/avatar/avatar10.png",
        pricePaid: "110",
      },
      {
        name: "Anne Hathaway",
        image: "https://bootdey.com/img/Content/avatar/avatar1.png",
        pricePaid: "€220",
      },
    ],
  },
];

export default friendsData;
