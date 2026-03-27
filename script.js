const series = [
  {
    title: "María la del Barrio",
    image: "https://via.placeholder.com/300x400",
    description: "Drama romántico mexicano clásico."
  },
  {
    title: "Cassandra",
    image: "https://via.placeholder.com/300x400",
    description: "Historia intrigante llena de drama y emociones."
  },
  {
    title: "Series de Netflix México",
    image: "https://via.placeholder.com/300x400",
    description: "Las series mexicanas más recientes disponibles en Netflix."
  }
];

const container = document.getElementById("series-list");

series.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  `;
  container.appendChild(card);
});
