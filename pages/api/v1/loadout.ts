import type { NextApiRequest, NextApiResponse } from "next";
import middleware from "../../../middlewares/middleware";
import nextConnect from "next-connect";

const handler = nextConnect();
handler.use(middleware);

//Require:
//    GameID
//      LoadoutID
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        console.log(req);
        return res.status(200).json({
            uuid: "NanoID_here_or_UUID4",
            user: {
                id: "Creati",
                image: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
            },
            votes: 25,
            loadout: {
                primary: {
                    name: "Kilo 141",
                    attachments: {
                        muzzle: "Monolithic Suppressor",
                        barrel: 'Singuard Arms 19.7" Prowler',
                        laser: undefined,
                        optic: "G.I. Mini Reflex",
                        stock: undefined,
                        underbarrel: "Commando Foregrip",
                        ammunition: undefined,
                        grip: "Rubberized Grip",
                        perk: undefined,
                    },
                },
                secondary: {
                    name: ".50 GS",
                    attachments: {
                        muzzle: undefined,
                        barrel: undefined,
                        laser: undefined,
                        optic: undefined,
                        stock: undefined,
                        trigger: undefined,
                        ammunition: undefined,
                        grip: undefined,
                        perk: undefined,
                    },
                },
                perks: ["Cold-Blooded", "Ghost", "Amped"],
                lethal: ["C4"],
                field: ["Smoke Grenade"],
            },
        });
    } catch (e) {
        return res.status(401).json({
            message: e.message,
        });
    }
});

//Require Loadout and then GameID assocaiated
//This POST should create a new loadout for a specific user.
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