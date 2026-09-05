import { NavigatedData, Page } from "@nativescript/core";
import { firebase } from "@nativescript/firebase-core";
import "@nativescript/firebase-messaging";
import * as SocialShare from "@nativescript/social-share";
import * as camera from "@nativescript/camera";
import { ImageSource } from "@nativescript/core";

let page: Page;
let ultimaFoto: ImageSource;

function toast(m: string) {
    console.log("TOAST: " + m);
}

export async function onNavigatingTo(args: NavigatedData) {
    page = args.object as Page;
    try {
        await firebase().initializeApp();
        const token = await firebase().messaging().getToken();
        console.log("TOKEN: " + token);
        const lbl = page.getViewById("tokenLabel") as any;
        if (lbl) lbl.text = token;
        firebase().messaging().onMessage((msg: any) => {
            toast(msg.notification?.body || "Notificacion");
        });
    } catch (e) {
        console.log(e);
    }
}

export async function onTakePhoto() {
    await camera.requestPermissions();
    const asset = await camera.takePicture({ saveToGallery: true });
    const img = page.getViewById("miFoto") as any;
    if (img) img.src = asset;
    ultimaFoto = await ImageSource.fromAsset(asset);
}

export function onShareText() {
    SocialShare.shareText("App Modulo 4 Diana");
}

export function onShareImage() {
    if (ultimaFoto) SocialShare.shareImage(ultimaFoto);
    else toast("Toma foto primero");
}

export function onMapReady(args) {
    if (args.object.addMarker) {
        args.object.addMarker({
            lat: 19.42847,
            lng: -99.12766,
            title: "Ecatepec",
            snippet: "Modulo 4"
        });
    }
}