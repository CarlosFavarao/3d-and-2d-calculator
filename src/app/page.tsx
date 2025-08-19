import { Metadata } from "next";
import Calculator3D from "./ui/calculator-3d";

export const metadata: Metadata = {
  title: "Calculator 3D",
}

export default function Home(){
  return(
    <>
      <Calculator3D />
    </>
  )
}