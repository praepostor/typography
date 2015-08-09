/*global window */
/*jslint maxlen: 80 */
(function (window) {
    "use strict";

    (function () {

        function load(options) {
            var disqus_category_id = options.categoryId,
                disqus_identifier = options.identifier,
                disqus_shortname = options.shortname,
                disqus_title = options.title,
                disqus_url = options.url,
                disqus = window.document.createElement("script");
            disqus.async = true;
            disqus.src = "https://" + disqus_shortname + ".disqus.com/embed.js";
            window.document.getElementsByTagName("head")[0].appendChild(disqus);
        }

        window.disqus = function (elementId, disqusOptions) {
            var element = window.document.getElementById(elementId);

            function listener(event) {
                var target = event.target || event.srcElement ||
                    window.event.target || window.event.srcElement;
                if (target.removeEventListener) {
                    target.removeEventListener("click", listener, false);
                } else if (target.detachEvent) {
                    target.detachEvent("onclick", listener);
                }
                load(disqusOptions);
            }

            if (element.addEventListener) {
                element.addEventListener("click", listener, false);
            } else if (element.attachEvent) {
                element.attachEvent("onclick", listener);
            } else if (element.onclick) {
                element.onclick = listener;
            } else {
                listener();
            }
        };
    }());

    (function () {
        window.Hyphenator.config({
            classname: "hyphenate",
            defaultlanguage: "ru",
            displaytogglebox: false,
            doframes: false,
            dohyphenation: true,
            donthyphenateclassname: "donthyphenate",
            enablecache: true,
            hyphenchar: "\u00AD",
            intermediatestate: "hidden",
            minwordlength: 4,
            orphancontrol: 1,
            persistentconfig: true,
            remoteloading: false,
            safecopy: true,
            storagetype: "localStorage", // localStorage|none|sessionStorage
            useCSS3hyphenation: false,
            unhide: "progressive", // progressive|wait
            urlhyphenchar: "\u200B",
            urlclassname: "hyphenate" // urlhyphenate
        });
        window.Hyphenator.run();
    }());

}(window));
