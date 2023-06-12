sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        sendAgoraMethod: function(oEvent) {

/*            var url = "./iflowagora/http/newijt/post";
            var ajaxRequest = {};
            ajaxRequest.url = url;
            ajaxRequest.method = "POST";
            ajaxRequest.headers = { "Content-Type": "application/json"};
            jQuery.ajax(ajaxRequest);


            */

            $.ajax ({
            url: "./iflowagora/http/newijt/post", 
            type: "POST", 
            data: "",
            headers: {
            "Content-Type": "application/son"
        },
            async: false

        });

        MessageToast.show("Envoyé vers Agora");

        }
    };
});
