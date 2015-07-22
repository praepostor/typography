// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// ==/ClosureCompiler==
/*global window */
/*jslint maxlen: 80 */
(function (window) {
    "use strict";
    window.Hyphenator.config({
        classname: "hyphenate",
        defaultlanguage: "ru-RU",
        displaytogglebox: false,
        doframes: false,
        dohyphenation: true,
        donthyphenateclassname: "donthyphenate",
        enablecache: true,
        hyphenchar: "\u00AD",
        intermediatestate: "hidden",
        minwordlength: 4,
        orphancontrol: 1,
        remoteloading: true,
        safecopy: true,
        storagetype: "localStorage", // localStorage|none|sessionStorage
        useCSS3hyphenation: false,
        unhide: "progressive", // progressive|wait
        urlhyphenchar: "\u200B",
        urlclassname: "urlhyphenate"
    });
    window.Hyphenator.run();
}(window));
