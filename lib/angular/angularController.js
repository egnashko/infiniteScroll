pictureApp.controller('pictureCtrl', function ($scope, $http) {
    $http({
        method:'JSONP',
        params: {callback : 'JSON_CALLBACK'},
        url: "https://api.vk.com/method/photos.get?owner_id=16430462&album_id=223068999?rev=0"
    })
        .then(function (pictures) {
            $scope.pixelPictures = pictures.data.response;
            $scope.countView = 12;
            $scope.countToLoad = 3;
            $scope.checkInfScr = true;
        });
    $scope.windScroll = window.addEventListener("scroll", function () {
        if (document.body.offsetHeight <= document.documentElement.clientHeight + document.body.scrollTop) {
            if($scope.checkInfScr) {
                $scope.countView = $scope.countView + $scope.countToLoad;
                $scope.$apply();
            }
        }
    });
    $scope.removeItem = function (x) {
        $scope.pixelPictures.splice(x, 1);
    };
});