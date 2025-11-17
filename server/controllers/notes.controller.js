import { Notes } from "../models/Notes.models.js";

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

    res.status(200).json({ message: "Note Save Successfully" }, Note);
  } catch (error) {
    res.status(500).json({ message: "error creating a Note", err });
  }
};


export const getAllNotes = async (req, res) => {


  try {
     const notes = await Notes.find({teacher: req.user.id}).sort({createdAt: -1});

  res.status(200).json({ message: "Got the data " }, notes);
  } catch (error) {
    res.status(400).json({message: "Error in fetching the data"}, error)
  }
 
}


export const getSingleNote = async (req, res) => {
  try {
    let note = await Notes.findOne({ _id: req.params.id, teacher: req.user.id })
     if (!note) return res.status(404).json({ message: "Not found" });
    res.json(note);

  } catch (error) {
    res.status(500).json({ message: "Error fetching note" });
  }
}


export const updateNotes = async (req, res) => {
  try {
    
    let updatedNote = Notes.findOneAndUpdate(
      {
        _id: req.params.id, 
        teacher: req.user.id
      }
    ,
      req.body
    ,
      { new: true }
    )

    if (!updateNotes) {
      res.status(404).json({ message : "Note not found"})
    }

    res.status(200).json({message: "Note updated Succesfully"} , updateNotes)
  } catch (error) {
    res.status(500).json({message: "Server error while updating note"} , error.message)
  }
}


export const deleteNote = async (req, res) => {
  // NOTE:- a prob you face a lot -> req.user.id -> it's teacher mongoid which comes from the middleware -> (yk
  // this line axios.post("/notes/add", data, {headers: { Authorization: `Bearer ${token}` }}) -> here it during auth it get saved on the req.user (it conatins all the user detail we send on jwt.sign);)
  
  try {  
    const note = Notes.findByIdAndDelete({ _id: req.params.id, teacher: req.user.id })
     if (!note) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
     res.status(500).json({ message: "Error deleting note" });
  }
}

