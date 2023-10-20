import userModel from "../../models/user.js";

async function insertProfile(defaultItem,searchId) {
    try {
  
      const res = await userModel.find({ email: searchId }).lean();
      console.log(res)
      if (res.length === 0) {
        userModel.insertMany(defaultItem)
        console.log("Profile Created")
      } else {
        // console.log("userId taken");
      }
    } catch (err) {
      console.log(err)
    }
  }

  export default insertProfile;