import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from '@/lib/prismadb';

export async function POST (req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { name } = body;

        if(!userId) {
            return NextResponse.json('Unauthorized', { status: 401 });
        }

        if(!name) {
            return NextResponse.json('Name is required', { status: 400 });
        }

        const store = await prismadb.store.create({
            data: {
                name,
                userId
            }
        })

        return NextResponse.json(store);

    } catch (error: any) {
        console.log('[STORES_POST]', error);
        return NextResponse.json('Internal server error', { status: 500 });
    }
}