sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'calculequiui/test/integration/FirstJourney',
		'calculequiui/test/integration/pages/EquipementUfCalculatedList',
		'calculequiui/test/integration/pages/EquipementUfCalculatedObjectPage'
    ],
    function(JourneyRunner, opaJourney, EquipementUfCalculatedList, EquipementUfCalculatedObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('calculequiui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEquipementUfCalculatedList: EquipementUfCalculatedList,
					onTheEquipementUfCalculatedObjectPage: EquipementUfCalculatedObjectPage
                }
            },
            opaJourney.run
        );
    }
);