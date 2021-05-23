// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/*
Variables:

GameID = an ID associated to a specific game. "cod-black-ops-cold-war" is Call of Duty: Black Ops Cold War
    Note: GameID and MongoDB collection 




MongoDB Format:

Games (Database)
    -> "cod-black-ops-cold-war" (Collection - GameID) 
        -> XVcCAdrbtgND2 (Document - NanoID or UUID4)
            //Here is where the class stuff goes.
*/ 


export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
