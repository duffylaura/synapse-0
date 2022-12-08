const db = require('../config/connection');
const{User, Group} = require('../models');

const userData = require('./userData.json');
const groupData = require('./groupData.json');

db.once('open', async () =>{
    await User.deleteMany({});
    await Group.deleteMany({});
    
    const user = await User.insertMany(userData);
    const group = await Group.insertMany(groupData);

    // for (newGroup of group){
    //     //randomly adds a group to each user
    //     const tempUser = user[Math.floor(Math.random() * user.length)]
    //     tempUser.group.push(newGroup._id);
    //     await tempUser.save();

    //     //randomly adds a user to each group
    //     const tempGroup = group[Math.floor(Math.random() * group.length)];
    //     tempGroup.user.push(newGroup._id);
    //     await tempGroup.save();
    // }

    console.log("all done")
    process.exit(0);
})