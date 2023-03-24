import express from "express";

const app = express();

app.use(express.json());

app.get("/ping", (_, res) => {
	res.json({ msg: "pong" });
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server running on port${PORT}`);
});
