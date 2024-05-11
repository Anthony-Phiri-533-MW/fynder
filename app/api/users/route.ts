import { db } from "@/db";

export async function GET(request: Request, response: Response) {
 try {
    const users = await db.user.findMany()


    const safeusers = users.map((users) => ({
        id: users.id, name: users.name, email: users.email
    }))
    return Response.json(safeusers)
 } catch (error) {
    console.error(error); // Log the error for debugging
    //response.status(500).json({ message: "Error fetching users" });
 }   
    
}