



const rollno = prompt("Enter Your NITK Roll Number!!!")

const qrcode_ = window.qrcode;

const video = document.createElement("video");
const canvasElement = document.getElementById("qr-canvas");
const canvas = canvasElement.getContext("2d");

const qrResult = document.getElementById("qr-result");
const outputData = document.getElementById("outputData");
const btnScanQR = document.getElementById("btn-scan-qr");

let scanning = false;

qrcode_.callback = res => {
  if (res) {
    var currentdate = new Date(); 
    var datetime = "Last Sync: " + currentdate.getDate() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getFullYear() + "--"  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    outputData.innerText = res;

    scanning = false;
    
    video.srcObject.getTracks().forEach(track => {
      track.stop();
    });

    qrResult.hidden = false;
    canvasElement.hidden = true;
    btnScanQR.hidden = false;
    if(res=="suzS69d7CMOtNBDDootsQOrHXhV2"){
      firebase.database().ref("Attendace").child(rollno.toString()).child(datetime.toString()).push({
        type:"out"
      })
      alert("You are Outside Hostel Now!!")
    }
    else if(res=="rQuwDXhfTXatUMeWbegbZbU3NqL2"){
      firebase.database().ref("Attendace").child(rollno.toString()).child(datetime.toString()).push({
        type:"in"
      })
      alert("You are Inside Hostel Now!!")
    }
  }
};

btnScanQR.onclick = () => {
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then(function(stream) {
      scanning = true;
      qrResult.hidden = true;
      btnScanQR.hidden = true;
      canvasElement.hidden = false;
      video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
      video.srcObject = stream;
      video.play();
      tick();
      scan();
    });
};

function tick() {
  canvasElement.height = video.videoHeight;
  canvasElement.width = video.videoWidth;
  canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

  scanning && requestAnimationFrame(tick);
}

function scan() {
  try {
    qrcode_.decode();
  } catch (e) {
    setTimeout(scan, 300);
  }
}
