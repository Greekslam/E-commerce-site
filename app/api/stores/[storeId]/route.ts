import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from '@/lib/prismadb';

export async function PATCH(req: Request, { params }: { params: {storeId: string} }) {
    try {
        const {userId} = auth();

        const body = await req.json();

        const { name } = body;

        if(!userId) {
            return NextResponse.json('Unauthorized', { status: 401 });
        }

        if(!name) {
            return NextResponse.json('Name is not found', { status: 400 });
        }

        if(!params.storeId) {
            return NextResponse.json('No unique id found', { status: 400 });
        }

        const store = await prismadb.store.update({
            where: {
                id: params.storeId,
                userId
            },
            data: {
                name
            }
        })

        return NextResponse.json(store);

    } catch(error: any) {
        console.log('[STORE_PATCH]', error);
        return NextResponse.json('Internal server error', { status: 500 });
    }

}


export async function DELETE(req: Request, { params }: { params: {storeId: string} }) {
    try {
        const {userId} = auth();

        if(!userId) {
            return NextResponse.json('Unauthorized', { status: 401 });
        }

        if(!params.storeId) {
            return NextResponse.json('No unique id found', { status: 400 });
        }

        const store = await prismadb.store.delete({
            where: {
                id: params.storeId,
                userId
            }
        })

        return NextResponse.json(store);

    } catch(error: any) {
        console.log('[STORE_DELETE]', error);
        return NextResponse.json('Internal server error', { status: 500 });
    }

}