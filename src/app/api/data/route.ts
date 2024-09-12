import { NextResponse, NextRequest } from "next/server";
import { DataProjects } from "./data";

export async function GET(request: NextRequest) {

    return NextResponse.json({
        datas: DataProjects
    });
}
