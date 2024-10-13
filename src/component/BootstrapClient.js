"use client"
import { useEffect } from "react"

export default function BootstrapCli(){
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap")
    })
}