const fs=require('fs');

fs.writeFile("output.txt", "Writing File",(err)=>{
    if(err) console.log("Error Occurred");
    else console.log('File written Successfully');
});