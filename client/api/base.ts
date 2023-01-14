import axios from "axios";

import Cookies, {parseCookies} from "nookies";

import {GetServerSidePropsContext, NextPageContext} from "next";
import {UserApi} from "./auth";
import { SeoApi } from "./seo";

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext) => {
    const cookies = ctx ? Cookies.get(ctx) : parseCookies();
    const token = cookies.token;
    const instance = axios.create({
        baseURL: "https://foswear.ru/_api",
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    })

    return {
        Instance: instance,
        user: UserApi(instance),
        seo: SeoApi(instance),
    }
}