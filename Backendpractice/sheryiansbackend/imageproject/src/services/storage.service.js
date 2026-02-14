const ImageKit= require("@imagekit/nodejs")

const imagekit= new ImageKit({
    privateKey : "private_UQoxlIOYFt0F0zhKkZYwNVYRNAQ="
})

async function uploadFile(buffer){
    const result=await imagekit.files.upload({
        file: buffer,
        fileName: "image.jpg"
    })


    return result;
}

module.exports=upLoadFile;