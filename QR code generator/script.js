let imgBox = document.getElementById("qr");
let QRimg = document.getElementById("qrImage");
let QRtext = document.getElementById("qrText");

function generate(){
    console.log("hello");
    if(QRtext.value.length > 0){
        QRimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.value;
        imgBox.classList.add("show-img");

    } else{
        QRtext.classList.add('error');
        setTimeout(()=>{
            QRtext.classList.remove('error');

        },1000)
    }
}
