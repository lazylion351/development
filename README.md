# Development

### Link to Deployed Website

https://lazylion351.github.io/development

### Goal and Value of the Application

This application displays information about Formula 1 Drivers from the on-going 2022 season. It displays the top 12 drivers of the season, showing their team, current points and current race wins. 

It allows fans to quickly access data about their favourite drivers. 

They can filter for drivers from specific teams as well as drivers that have won races this season. 

They can sort drivers based on Points as well as Race wins. By default, this orders drivers from most Points/Race Wins to least, but users can change this to see drivers with the lowest Points/Race wins first.

Users can create a collection of their favourite drivers and the application will display the sum of the their favourite drivers' points field.

### Usability Principles Considered

I thought of a conceptual model of how users would interact with the application. Users would likely want to see all the information about a given driver in the same location, and it would make sense to have the ability to add/remove a driver from the favourites list alongside an individual driver's information. Within each card, I thought it would make sense to have a hierachy where the name has the largest text and the other information (team name, points, race wins), has a smaller font size and a lighter (less prominent) color. I also thought that it made sense to have all the buttons related to sorting/filtering data in the same location (as a vertical bar to the left of the driver cards). Within this buttons bar, I thought it would make sense to group buttons based on the "type" of operation they were carrying out: sorting, filtering by team etc. To make this grouping clear, I spaced buttons from the same group closers and added dividers between different button groups. I also tried to use different types of buttons to signal different functionality: square buttons allow for selecting multiple options, like a checkbox, while round buttons only allow you to select a single option from each group. 

### Organization of Components

In addition to my App.js, I had three components: OptionsItem, DriverItem, FavouritesItem.

DriverItem consisted of an individual card displaying each driver's information. It consisted of text information, an image of the driver as well as a single FavouritesItem.

FavouritesItem is a button that allows a user to add/remove a particular driver from their collection of favourites. It has two forms depending on whether the individual driver is already in the favourites list or not.

OptionsItem has a card consisting of three groups of buttons. The first first button group has the sort buttons, the second the team filtering options, and the third has the other filtering options (Racewinners, Favourites).

Within App.js, I first had two AppBars: the first with the logo and heading, and the second displaying the favourites points. This was followed by a container having a single OptionsItem on the left and a collection of DriverItems on the right.

### How Data is Passed Down Through Components

data loads in the raw data from the JSON file. There are several hooks here to modify this data:

filterTeam/setFilterTeam – what teams are currently selected, defaults to "All" teams

sortType/setSortType – whether to sort by "Points" or "Race Wins"

sortOrder/setSortOrder – whether to sort in decreasing (highest first) or increasing (lowest first) order

raceWinnersOnly/setRaceWinnersOnly – whether to display only drivers that have won at least one race

favouritesOnly/setFavouritesOnly – whether to display only drivers that are in the favourites list

favList/setFavList – keeps track of the names of drivers that are currently marked as favourites

favPoints/setFavPoints – keeps track of the sum of the points of the drivers in the favourites list

The data list is then sorted based on sortType and sortOrder, and then filtered based on filterTeam, raceWinnersOnly and favouritesOnly.

The data list is then mapped and each item in the list is mapped to a DriverItem. The DriverItem gets data about fields of the item as well as the setFavList, setFavPoints handlers (which it then passes to the FavouritesItem) to change the favourites list/corresponding points when the user adds/removes the items from the favourites list.

There is a single OptionsItem that gets the setFilterTeam, setSortType, setSortOrder, setRaceWinnersOnly and setFavouritesOnly hooks. Based on what buttons are clicked, it uses these to modify the corresponding fields.

### How the User Triggers State Changes

When the user clicked on the add/remove favourites button, an event is triggered where setFavList and setFavPoints modify add/remove the driver's names/points that are in the favourites list. Based on this, the FavouritesItem button type is changed (text of the button etc.) and the favPoints field, and corresonding display of "Favourites Points" is modified.

When the user clicked on Points or Race Wins (within sortBy), this changes sortType or sortOrder  which then changes order of the list of drivers (which changes the order in which the DriverItems are created during the map). 

When the user clicks on a team (in the Team section), this changes filterTeam which changes the filteredData list which changes which DriverItems are created.

Similarly, when the user clicks on the "Race Winners" or "Favourites" buttons, this changes raceWinnersOnly or favouritesOnly which, similarly, changes  the filteredData list which changes which DriverItems are created.
