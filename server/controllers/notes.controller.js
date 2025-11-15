import { Notes } from "../models/Notes.models";

export const saveNotes = async (req, res) => {
  try {
    const { title, content, subject } = await req.body;

    let Note = new Notes({
      title: title,
      content: content,
      subject: subject,
      teacher: req.user.id,
    });

    await Note.save();

    res.status(200).send({ message: "Note Save Successfully" }, Note);
  } catch (error) {
    res.status(500).send({ message: "error creating a message", err });
  }
};
