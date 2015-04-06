function createTile(options) {
	var tile;

	return tile;
}

Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().enableNotificationQueue(true);
getTileData();


module.exports = {
	updateAppTile: function(win, lose, options) {
		var notifications = Windows.UI.Notifications;

		var template = notifications.TileTemplateType.tileWideText02;
		var tileXml = notifications.TileUpdateManager.getTemplateContent(template);

		var tileTextAttributes = tileXml.getElementsByTagName("title");
		tileTextAttributes[0].appendChild(tileXml.createTextNode('Titulo')); // Title

		var tileTextAttributes = tileXml.getElementsByTagName("text");
		tileTextAttributes[0].appendChild(tileXml.createTextNode('Prueba de texto')); // Text

		var squareTemplate = notifications.TileTemplateType.tileSquareText04; 
		var squareTileXml = notifications.TileUpdateManager.getTemplateContent(squareTemplate);

		var squareTileTextAttributes = squareTileXml.getElementsByTagName("title");
		squareTileTextAttributes[0].appendChild(squareTileXml.createTextNode('Titulo')); // Text

		var squareTileTextAttributes = squareTileXml.getElementsByTagName("text");
		squareTileTextAttributes[0].appendChild(squareTileXml.createTextNode('Prueba de texto')); // Text

		var node = tileXml.importNode(squareTileXml.getElementsByTagName("binding").item(0), true);
		tileXml.getElementsByTagName("visual").item(0).appendChild(node);

		var tileNotification = new notifications.TileNotification(tileXml);

		tileNotification.tag = "Tilebox";
		notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);

	},

	createSecondaryTile: function(win, lose, options) {
	   // TODO
	},

	updateSecondaryTile: function(win, lose, options) {
	   // TODO
	},

	deleteSecondaryTile: function(win, lose, options) {
	   // TODO
	}
};

require("cordova/exec/proxy").add("LiveTiles", module.exports);

