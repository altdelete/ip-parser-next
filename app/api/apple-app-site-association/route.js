import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
    const filePath = path.join(process.cwd(), 'public', '.well-known', 'apple-app-site-association');

    try {
        const fileContents = await fs.readFile(filePath, 'utf8');
        return new NextResponse(fileContents, {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: 'Failed to read the file' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
