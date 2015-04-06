function createTile(options) {
	var tile;

	return tile;
}

Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().enableNotificationQueue(true);


module.exports = {
	updateAppTile: function(win, lose, options) {
		var notifications = Windows.UI.Notifications;

		// https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.notifications.tiletemplatetype.aspx
		var template = notifications.TileTemplateType.tileWideImageAndText01;
	    var tileXml = notifications.TileUpdateManager.getTemplateContent(template);

	    var tileTextAttributes = tileXml.getElementsByTagName("text");
	    tileTextAttributes[0].appendChild(tileXml.createTextNode(options.title)); // Text

	    var tileImageAttributes = tileXml.getElementsByTagName("image");
	    tileImageAttributes[0].setAttribute("src", options.image); // Large image
	    tileImageAttributes[0].setAttribute("alt", "red graphic");

	    var squareTemplate = notifications.TileTemplateType.tileSquareText04; 
	    var squareTileXml = notifications.TileUpdateManager.getTemplateContent(squareTemplate);

	    var squareTileTextAttributes = squareTileXml.getElementsByTagName("text");
	    squareTileTextAttributes[0].appendChild(squareTileXml.createTextNode(options.title)); // Text

	    var node = tileXml.importNode(squareTileXml.getElementsByTagName("binding").item(0), true);
	    tileXml.getElementsByTagName("visual").item(0).appendChild(node);

	    var tileNotification = new notifications.TileNotification(tileXml);

	    tileNotification.tag = "Tilebox";
	    notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);

		// TODO more options
		/*
			#title: 'title', 
		    #image:'Images/appbar.next.rest.png', 
		    count: 5, 
		    backTitle: 'Back title', 
		    backContent:'Back side', 
		    backImage : 'Images/appbar.close.rest.png'
		*/
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

