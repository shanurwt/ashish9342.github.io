app.controller('MainController', ['$scope', function($scope) {
$scope.programs = [
  {
series: "Sherlock",
series_img: "img/sherlock.jpg",
genre: "Crime drama",
season: 3,
episode: "The Empty Hearse",
description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
},
  {
series: "Breaking Bad",
series_img: "http://www.wallpapermade.com/images/wallpapers/originals/breaking-bad-character-walter-white-alias-heisenberg-wallpaper-5106.jpg",
genre: "Crime drama",
season: 4,
episode: "Heisenberg",
description: "In a flashback, Gale Boetticher takes notes on the construction of the new superlab. He praises the blue meth sample Gustavo Fring gave him to the point where he talks himself out of a job, saying that the person who cooked the sample deserves it better; Gale just talked Gus into hiring Walter White.",
datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
  }

];
}]);
