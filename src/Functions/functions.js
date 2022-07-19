import { useEffect, useState } from "react";

export const getCurrentHash = (pageLocation, str) => {
    // let pageurl = pageLocation;
    const splitarr = pageLocation.split("#");
    let flag = false;
    for (let obj in splitarr) {
        if (splitarr[obj] === str) {
            flag = true;
        }
    }
    return flag;
}


export const getLocationParaCount = (pageLocation) => {
    const splitarr = pageLocation.split("#");
    return splitarr.length;
}




export const useScrollPositionHook = () => {
    const [scrollposition, setscrollposition] = useState(0);
    useEffect(() => {
        const updatePosition = () => {
            setscrollposition(window.pageYOffset);
        };
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);
    return scrollposition;
}





export const swipeUpDownPageOnClick = (loca, idname) => {
    return getCurrentHash(loca, idname) == true ? "insideNavigation" : "";
}









export let getCardLb = (id) => {
    return document.getElementById(`${id}`).offsetTop;
}

export let getCardUb = (id) => {
    return document.getElementById(`${id}`).offsetTop + document.getElementById(`${id}`).offsetHeight;
}


export let getClassForNav = (height, index, id, type) => {
    let h = parseFloat(height);
    let ret = '';

    if (type == "wedd") {
        if (h < 590) {
            if (index === 0) {
                ret = 'active';
            } else {
                ret = '';
            }
        } else {
            let l = parseFloat(getCardLb(id)) - 210;
            let u = parseFloat(getCardUb(id)) - 210;
            if (h <= u && h >= l) {
                ret = 'active'
            } else {
                ret = '';
            }
        }

    }

    else if (type == 'marrlaw') {
        if (h < 730) {
            if (index === 0) {
                ret = 'active';
            } else {
                ret = '';
            }
        } else {
            let l = parseFloat(getCardLb(id)) - 210;
            let u = parseFloat(getCardUb(id)) - 210;
            if (h <= u && h >= l) {
                ret = 'active'
            } else {
                ret = '';
            }
        }

    }

    else {
        if (h < 210) {
            if (index === 0) {
                ret = 'active';
            } else {
                ret = '';
            }
        } else {
            let l = parseFloat(getCardLb(id)) - 210;
            let u = parseFloat(getCardUb(id)) - 210;
            if (h <= u && h >= l) {
                ret = 'active'
            } else {
                ret = '';
            }
        }
    }
    return ret;
}







export const removeAllSpaces = (str) => {
    return str.replace(/\s/g, '');
}





export const scrollToLink = (id) => {
    window.scrollTo(0, parseFloat(getCardLb(id)) - 200);
}



export const removeDash = (str) => {
    return str.replace("-", " ");
}

export const addDash = (str) => {
    return str.replace(" ", "-");
}



export const isItNull = (data) => {
    if (data === undefined || data === null || data === '' || data.length === 0) {
        return true;
    } else {
        return false;
    }
}


export let capitalise = (str) => {

    if (str === undefined || str === '' || typeof (str) == "number") {
        return;
    }
    
    let str1 = str.toLowerCase();

    const arr = str1.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    const str2 = arr.join(" ");
    return str2;
}
