import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";

export  async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
      // Clear relevant NextAuth.js cookies on the server-side
      cookies().delete("next-auth.session-token");
      cookies().delete("next-auth.csrf-token");
      cookies().delete("next-auth.callback-url");

      // Set cookie expirations to now (optional, for improved security)
      cookies().set("next-auth.session-token", "", { expires: new Date(0) });
      cookies().set("next-auth.csrf-token", "", { expires: new Date(0) });
      cookies().set("next-auth.callback-url", "", { expires: new Date(0) });
        console.log("rrrrrrrrrrrrr",cookies().get("next-auth.session-token"))
      // Success response (optional)
      return Response.json({status:true})
    } catch (error) {
      console.error("Error signing out:", error);
      return Response.json({status:false})

    }
}
