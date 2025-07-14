import BaseAppView from "@plone/mockup/src/pat/structure/js/views/app";
import Cookies from "js-cookie";

export default BaseAppView.extend({
    setCookieSetting: function (name, val) {
        console.log(`customized cookie settings injected!`)
        Cookies.set(
            this.cookieSettingPrefix + name,
            JSON.stringify({
                value: val,
            })
        );
    },
});
