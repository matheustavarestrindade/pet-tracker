import express from "express";
import { Request, Response } from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.get("/query_networks", (req: Request, res: Response) => {
    res.json({
        networks: [
            { ssid: "Teste Network 1", rssi: -10, has_password: true },
            { ssid: "Teste Network 2", rssi: -50, has_password: true },
            { ssid: "Teste Network 3", rssi: -100, has_password: false },
        ],
    });
});

app.post("/connect", (req: Request, res: Response) => {
    console.log(req);
    res.json({
        connected: true,
    });
});

app.listen(2245, () => {
    console.log("Server started on port 2245");
});
