import userModel from "../../models/user.js";

async function updateProfile(defaultItem, searchId){
  try{
    const res = await userModel.find({email:searchId}).lean();
    if (res.length !== 0){
      const filter = {email :searchId};
      const update = {...defaultItem[0]}._doc
      delete update._id
      console.log(update)
      await userModel.findOneAndUpdate(filter, update, {
        new: true
      });
      console.log("updation Completed")
    }else{
      console.log("Data not Found")
    }
  }catch(err){
    console.log(err)
  }
}

export default updateProfile;