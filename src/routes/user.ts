
import type { RequestHandler, EndpointOutput, Request } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

export const post: RequestHandler<Locals, FormData> = async (request) => {
    // For some absolutely asinine reason typescript thinks FormData has no
    // .get() method, so I have to work some casting magic on it
    let user: { [key: string]: number | string} = request.body as object;
    let res;
    if (user['action'] == 'signin') {
        res = await fetch('https://auth-workers.webm.workers.dev/signin', {
            method: 'POST',
            body: JSON.stringify({
                username: user["username"],
                password: user["password"]
            })
        });
    } else if (user['action'] == 'register') {
        res = await fetch('https://auth-workers.webm.workers.dev/register', {
            method: 'POST',
            body: JSON.stringify({
                username: user["username"],
                password: user["password"]
            })
        });
    }

    if (res.status == 200) {
        return {
            status: res.status,
            body: await res.json()
        };
    } else {
        return {
            status: res.status,
            body: await res.text()
        };
    }
};

export const get: RequestHandler<Locals, FormData> = async (request) => {
    return {
        status: 303,
        headers: {
            location: '/login'
        }
    };
};

