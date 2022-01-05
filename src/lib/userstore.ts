import { writable } from 'svelte/store';
import { browser } from '$app/env';


let storedUser ={ "username": null, "token": null };
if (browser) {
    if  (localStorage.getItem("user") != null) {
        console.log(localStorage.getItem("user"))
        storedUser = JSON.parse(localStorage.getItem("user"));
    }
} 
export const user = writable(
    storedUser
);

user.subscribe(val => {
    if (browser) {
        console.log(val)
        localStorage.setItem("user", JSON.stringify(val))
        console.log(localStorage.getItem("user"))
    }
});