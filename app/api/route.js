//Demo Perpose

import {NextResponse} from "next/server"

export async function GET(){
    return NextResponse.json({
        name:"Aue Cool"
    });
}