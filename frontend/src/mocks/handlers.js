import { rest } from "msw"

const baseURL = "/api"

export const handlers = [
    rest.get(`${baseURL}/dj-rest-auth/user/`, (req,res,ctx) =>  {
        return res(
            ctx.json({
                "pk": 1,
                "username": "jindah",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 2,
                "profile_image": "https://res.cloudinary.com/picagram/image/upload/v1/media/images/1685614611452_nkew7f"
              })
            );
        }),
        rest.post(`${baseURL}/dj-rest-auth/logout/`, (req,res,ctx) => {
            return res(ctx.status(200));
        }),
    ];