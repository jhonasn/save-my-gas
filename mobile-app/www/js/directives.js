define(function () {

    var module = {}

    module.scrollShowHide = function($ionicScrollDelegate) {
        return {
            restrict: 'AEC',
            transclude: true,
            scope: {
                showPercent: '=',
                scrollTop: '='
            },
            link: function(scope, element, attrs) {
                var $page = angular.element(document.querySelector('ion-content'))
                $page.on('scroll', function() {
                    var top = $ionicScrollDelegate.getScrollPosition().top
                    var max = $ionicScrollDelegate.getScrollView().getScrollMax().top
                    var showPoint = 500
                    if(scope.showPercent) {
                        showPoint = (max * scope.showPercent) / 100
                        console.info('showpoint', showPoint)
                    }
                    if(top < showPoint) {
                        element.addClass('hide')
                    } else {
                        element.removeClass('hide')
                    }
                })

                if(scope.scrollTop)
                    element.on('click', function() {
                        $ionicScrollDelegate.scrollTop(true)
                    })
                else
                    element.on('click', function () {
                        var top = $ionicScrollDelegate.getScrollPosition().top
                        var max = $ionicScrollDelegate.getScrollView().getScrollMax().top

                        top -= (max * scope.showPercent) / 100
                        $ionicScrollDelegate.scrollTo(null, top, true)
                    })
            },
            template: '<div ng-transclude></div>'
        }
    }

    module.scrollShowHide.$inject = ['$ionicScrollDelegate']

    return module

})
