const express = require("express");

const app = express();
const data = {
	status: 200,
	response: [
		{
			id: 1,
			label: "France",
			recipe: "Raclette",
			description:
				"La France est connue pour sa gastronomie raffinée, ses vins et ses fromages emblématiques.",
		},
		{
			id: 2,
			label: "Japon",
			recipe: "Sushi",
			description:
				"Le Japon est célèbre pour sa culture unique, ses technologies avancées et sa cuisine délicate, notamment le sushi.",
		},
		{
			id: 3,
			label: "Sénégal",
			recipe: "Thieboudienne",
			description:
				"Le Sénégal est un pays d'Afrique de l'Ouest connu pour sa musique, sa culture vibrante et sa cuisine savoureuse.",
		},
		{
			id: 4,
			label: "Inde",
			recipe: "Butter Chicken",
			description:
				"L'Inde est un pays riche en histoire, en culture et en épices, avec une cuisine réputée dans le monde entier.",
		},
		{
			id: 5,
			label: "Mexique",
			recipe: "Tacos",
			description:
				"Le Mexique est célèbre pour ses traditions colorées, sa musique mariachi et sa cuisine épicée et savoureuse.",
		},
	],
};

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("home", { data });
});

app.get("/country/:id", (req, res) => {    
    const id = parseInt(req.params.id);

    const country = data.response.find(country => country.id === id);

    if(!country) return res.status(404).send("Country not found");

    res.render("country", { data: country });
});

app.get("*", (req, res) => {
    res.render("not-found");
});

app.listen(9000, () =>
	console.log("App is running at http://localhost:" + 9000)
);
