import bcrypt from "bcryptjs/dist/bcrypt";
import nc from "next-connect";
import User from "../../../models/User";
import signToken from "../../../utils/auth";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  //fining user by email
  const user = await User.findOne({ email: req.body.email });
  await db.disconnect();

  //user.password is the encrypted password in the database
  //req.body.password is the plain password which user type in
  //checking if the user is exist, if it does, compare the the password if they match using compareSync function
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    //using user information to generate the user token
    const token = signToken(user);

    //sending token to the frontend
    res.sendDate({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.statusCode(401).send({ message: "Invalid user or password" });
  }
});

export default handler;
