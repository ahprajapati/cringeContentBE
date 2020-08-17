import mongoDB from "../mongoDB";
import * as contentQueries from "../mongoDB/queries/content";
import * as sequenceManager from "../mongoDB/queries/sequenceManager";

import { getRandomNumber } from "../Helper/getRandomNumber";

export const getContent = async (req, res) => {
  const prevNumber = parseInt(req.query.prevNumber, 10);
  const newNumber = getRandomNumber(1, 10, prevNumber);
  const content = await contentQueries.getContentByID(mongoDB, newNumber);
  delete content._id;
  res.send({ content });
};

export const createContent = async (req, res) => {
  const { name, desc } = req.body;
  try {
    const id = await sequenceManager.getId(mongoDB, "content");
    const data = {
      id,
      name,
      desc,
    };
    await contentQueries.createContent(mongoDB, data);
    return res.send({ status: true, message: "content created", data });
  } catch (err) {
    console.log(err);
    return res.status(400).send({
      status: false,
      message: "unable to create content",
      error: err,
    });
  }
};
