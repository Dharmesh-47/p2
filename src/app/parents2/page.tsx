 'use client'
 import Image from "next/image";
 import { Button } from "@/components/ui/button"
 import photo from '../../../public/photo.jpg'



 export default function parents(){
	const handleClick=()=>{
        window.open(`https://maps.app.goo.gl/dsfi9qkfXknGMikm8`)
    }
	return (
        <div className="w-screen h-screen bg-gradient-to-r from-orange-500 to-red-500 ... flex items-center justify-center">
            <div className="flex flex-col items-center space-y-2">
				<p className="font-bold font-mono ... text-9xl">20 YEARS!!!</p> 
				<Image 
				src={photo}
				alt="Family photo" 
				width="800" 
				height="500"
				placeholder="blur"
				/>
                <p className="font-bold font-mono ... text-5xl">HAPPY ANNIVERSARY APPA AND AMMA</p>
				<Button onClick={handleClick}>Where?</Button>
            </div>
        </div>
    )
}