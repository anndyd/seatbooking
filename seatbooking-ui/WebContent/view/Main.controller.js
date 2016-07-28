sap.ui.define([
    'jquery.sap.global',
    "sap/ui/bk/masterdetail/view/base/BaseController",
    'sap/ui/model/json/JSONModel'
  ], function(jQuery, BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("sap.ui.bk.masterdetail.view.Main", {

    onInit : function (evt) {
      // set mock model
      var sPath = jQuery.sap.getModulePath("sap.ui.bk.masterdetail", "/data.json");
      var oModel = new JSONModel(sPath);
      this.getView().setModel(oModel);
    },

    handleEditPress : function (evt) {
      var oTileContainer = this.getView().byId("container");
      var newValue = ! oTileContainer.getEditable();
      oTileContainer.setEditable(newValue);
      evt.getSource().setText(newValue ? "Done" : "Edit");
    },

    handleBusyPress : function (evt) {
      var oTileContainer = this.getView().byId("container");
      var newValue = ! oTileContainer.getBusy();
      oTileContainer.setBusy(newValue);
      evt.getSource().setText(newValue ? "Done" : "Busy state");
    },

    handleTileDelete : function (evt) {
      var tile = evt.getParameter("tile");
      evt.getSource().removeTile(tile);
    },
    onTilePress : function(evt){
      var txt = evt.getSource().getTitle();
      if (txt === "Book") {
        this.getRouter().navTo("master");
      }
    }
  });

});
