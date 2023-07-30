$(document).ready((function () {
    "use strict";
    $(".loader").delay(400).fadeOut(), $(".animationload").delay(400).fadeOut("fast");
    var e = jQuery(document).scrollTop();
    e > 200 && jQuery(".navbar-main").addClass("stiky"), jQuery(window).scroll((function () {
        (e = jQuery(document).scrollTop()) > 200 ? jQuery(".navbar-main").addClass("stiky") : jQuery(".navbar-main").removeClass("stiky")
    })), $("#slides").superslides({play: 5e3, slide_speed: 800, pagination: !0, hashchange: !1, scrollable: !0});
    var t = $(".cd-top");
    if ($(window).scroll((function () {
        $(this).scrollTop() > 300 ? t.addClass("cd-is-visible") : t.removeClass("cd-is-visible cd-fade-out"), $(this).scrollTop() > 1200 && t.addClass("cd-fade-out")
    })), t.on("click", (function (e) {
        e.preventDefault(), $("body,html").animate({scrollTop: 0}, 700)
    })), $(window).load((function () {
        var e = $(".grid-services");
        e.isotope({filter: "*"}), $(".portfolio_filter a").on("click", (function () {
            $(".portfolio_filter .active").removeClass("active"), $(this).addClass("active");
            var t = $(this).attr("data-filter");
            return e.isotope({filter: t, animationOptions: {duration: 500, animationEngine: "jquery"}}), !1
        }))
    })), $("#caro").owlCarousel({
        items: 1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        loop: !0
    }), $("#owl-testimony").owlCarousel({
        autoplay: 5e3,
        stopOnHover: !0,
        margin: 30,
        items: 2,
        nav: !0,
        navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
        dots: !0,
        loop: !0,
        responsive: {0: {items: 1}, 1e3: {items: 2}}
    }), $("#owl-testimony2").owlCarousel({
        items: 1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
        dots: !0,
        loop: !0
    }), $("#caro-project").owlCarousel({
        margin: 10,
        items: 4,
        nav: !0,
        navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
        dots: !0,
        loop: !0,
        responsive: {0: {items: 1}, 768: {items: 2}, 1e3: {items: 4}}
    }), $("#caro-project-2").owlCarousel({
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        items: 4,
        nav: !0,
        navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
        dots: !1,
        loop: !0,
        responsive: {0: {items: 1}, 768: {items: 2}, 1e3: {items: 4}}
    }), $(".panel").on("show.bs.collapse hide.bs.collapse", (function (e) {
        "show" == e.type ? $(this).addClass("active") : $(this).removeClass("active")
    })), $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }), $("#maps").length) {
        var s = $("#maps").data("lat"), a = $("#maps").data("lng"), o = $("#maps").data("marker"),
            i = (navigator.userAgent.toLowerCase().indexOf("trident"), o), l = "#000000", n = -80,
            r = [{elementType: "labels", stylers: [{saturation: n}]}, {
                featureType: "poi",
                elementType: "labels",
                stylers: [{visibility: "off"}]
            }, {
                featureType: "road.highway",
                elementType: "labels",
                stylers: [{visibility: "off"}]
            }, {
                featureType: "road.local",
                elementType: "labels.icon",
                stylers: [{visibility: "off"}]
            }, {
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [{visibility: "off"}]
            }, {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{visibility: "off"}]
            }, {
                featureType: "transit",
                elementType: "geometry.fill",
                stylers: [{hue: l}, {visibility: "on"}, {lightness: 5}, {saturation: n}]
            }, {
                featureType: "poi",
                elementType: "geometry.fill",
                stylers: [{hue: l}, {visibility: "on"}, {lightness: 5}, {saturation: n}]
            }, {
                featureType: "poi.government",
                elementType: "geometry.fill",
                stylers: [{hue: l}, {visibility: "on"}, {lightness: 5}, {saturation: n}]
            }, {
                featureType: "poi.sport_complex",
                elementType: "geometry.fill",
                stylers: [{hue: l}, {visibility: "on"}, {lightness: 5}, {saturation: n}]
            }, {
                featureType: "poi.attraction",
                elementType: "geometry.fill",
                stylers: [{hue: l}, {visibility: "on"}, {lightness: 5}, {saturation: n}]
            }, {
                featureType: "poi.business",
                elementType: "geometry.fill",
                stylers: [{hue: l}, {visibility: "on"}, {lightness: 5}, {saturation: n}]
            }, {
                featureType: "transit",
                elementType: "geometry.fill",
                stylers: [{hue: l}, {visibility: "on"}, {lightness: 5}, {saturation: n}]
            }, {
                featureType: "transit.station",
                elementType: "geometry.fill",
                stylers: [{hue: l}, {visibility: "on"}, {lightness: 5}, {saturation: n}]
            }, {
                featureType: "landscape",
                stylers: [{hue: l}, {visibility: "on"}, {lightness: 5}, {saturation: n}]
            }, {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [{hue: l}, {visibility: "on"}, {lightness: 5}, {saturation: n}]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{hue: l}, {visibility: "on"}, {lightness: 5}, {saturation: n}]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{hue: l}, {visibility: "on"}, {lightness: 5}, {saturation: n}]
            }], p = {
                center: new google.maps.LatLng(s, a),
                zoom: 14,
                panControl: !1,
                zoomControl: !1,
                mapTypeControl: !1,
                streetViewControl: !1,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: !1,
                styles: r
            }, y = new google.maps.Map(document.getElementById("maps"), p), m = (new google.maps.Marker({
                position: new google.maps.LatLng(s, a),
                map: y,
                visible: !0,
                icon: i
            }), document.createElement("div"));
        new function (e, t) {
            var s = document.getElementById("cd-zoom-in"), a = document.getElementById("cd-zoom-out");
            e.appendChild(s), e.appendChild(a), google.maps.event.addDomListener(s, "click", (function () {
                t.setZoom(t.getZoom() + 1)
            })), google.maps.event.addDomListener(a, "click", (function () {
                t.setZoom(t.getZoom() - 1)
            }))
        }(m, y);
        y.controls[google.maps.ControlPosition.LEFT_TOP].push(m)
    }
}));