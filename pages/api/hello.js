// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import db from '../../utils/db';

export default async function handler(req, res) {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  // await db.connect();
  // await db.disconnect();
  res.status(200).json({ name: 'Hello, world!' });
}
