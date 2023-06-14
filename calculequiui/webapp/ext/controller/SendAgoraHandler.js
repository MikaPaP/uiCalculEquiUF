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
            var sServiceUrl = this.editFlow.getView().getModel().aBindings[0].oModel.sServiceUrl;
            var url = sServiceUrl.replace("/catalog/", "/iflowagora/http/newijt/post");
            $.ajax ({
            //url: "./iflowagora/http/newijt/post", // Fonctionne avec BAS et déploiement local
            url: url,
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
