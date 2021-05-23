import type { NextApiRequest, NextApiResponse } from 'next';
import middleware from "../../../middlewares/middleware";
import nextConnect from "next-connect";

const handler = nextConnect();
handler.use(middleware);

//TODO: This api should retrieve a list of categories(games) supported on the site. Maybe have an admin menu for adding them through the site?
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        return res.status(200).json({
            categories: [
                {
                    name: "Call of Duty: Modern Warfare (2019)",
                    gameid: "cod-modern-warfare",
                    backgroundUrl: "https://i.imgur.com/huKaAII.png",
                    logoUrl: "https://i.imgur.com/F0i01ql.png",
                    logoAlt: "Call of Duty: Modern Warfare",
                    weight: 1,
                },
                {
                    name: "Call of Duty: Black Ops Cold War",
                    gameid: "cod-black-ops-cold-war",
                    backgroundUrl: "https://i.imgur.com/oaN3oLw.png",
                    logoUrl: "https://i.imgur.com/PpvuNEz.png",
                    logoAlt: "Call of Duty: Black Ops Cold War",
                    weight: 1,
                },
            ],
        });
    } catch (e) {
        return res.status(401).json({
            message: e.message,
        });
    }
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        return res.status(200).json({ message: "Okayge" });
    } catch (e) {
        return res.status(401).json({
            message: e.message,
        });
    }
});

export default handler;