import { useState } from "react"

export const QrCode = () => {

    const [image,setImg]=useState("");
    const [loading, setLoading]= useState(false);
    const [qrdata,setQrdata]=useState("");
    const [qrsize,setQrsize]=useState("150");

    // generate function
    async function generate(){
        setLoading(true);
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}
            &data=${encodeURIComponent(qrdata)}`;
            setImg(url);
        }catch(error){
            console.log("error occured", error);
            
        }finally{
            setLoading(false);
        }
    };

    // download function
    function download(){
        fetch(image).then((response)=>response.blob())
        .then((blob)=>{
            const link= document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="Qr.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });

    };

    return (
    <div className="container">

        <h1>QR CODE GENERATOR</h1>
        {/* while loading */}
            {loading && <p>please wait....</p>}

        {/* Qr image */}
            {image && <img src={image} className="Qr-img" alt="can't load"/>};
        <div>

        {/* QR data */}
            <label htmlFor="dataInput" className="input-label">
                Data for QR code:
            </label>
            <input value={qrdata}  onChange={(e)=>setQrdata(e.target.value)} type="text" placeholder="enter data (eg.https://google.com)" id="datainput"/>
           
        {/* QR Size */}
            <label value={qrsize} onChange={(e)=>setQrsize(e.target.value)} htmlFor="sizeInput" className="input-label">
                Image size (eg.100):
            </label>
            <input type="text" placeholder="enter size (eg.100)" id="datainput"/>
        {/*Generate button  */}
            <button disabled={loading} onClick={generate} className="Generate" >Generate QR code</button>
            
        {/* Download button */}
            <button onClick={download} className="Download">Download QR code</button>
        
        </div>
    </div>
  )
};

