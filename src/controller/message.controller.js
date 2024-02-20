import { Message } from "../entities/Message.entity.js";

export const createdMessage = async (sender_id, receiver_id, description) => {
  await connect.sync();

  const newMessage = await Message.create({
    sender_id,
    receiver_id,
    description,
  });

  return newMessage;
};

export const getAllMessage = async () => {
  return await Message.findAll();
};
