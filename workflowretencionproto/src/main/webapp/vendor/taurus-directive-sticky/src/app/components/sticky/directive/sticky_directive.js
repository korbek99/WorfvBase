(function () {
    angular.module('WebBancoChile.sticky')
        .directive('sticky', sticky);
        function sticky( $window ) {
            var win = $window;
            return {
                restrict: 'EA',
                scope: {
                    customerInfo : '=stickyElementHide'
                },
                link: function (scope, element, attrs){
                    //console.log(attrs.stickyHight);
                    
                    var newFixed;
                    if(attrs.stickyHight === ""){
                        newFixed = 0;
                    }else{
                        newFixed =  parseInt(attrs.stickyHight, 10);
                    }
                    //fixed para revisar despues
                    //var hightElement = element[0].clientHeight;
                    //var totalhight = hightElement + newFixed ;

                    var totalhight = newFixed ;

                    var elem;

                    element.addClass("fixed-element");
                    
                    var detectar = function(top, objeto){
                        var cssElement = angular.element('body');
                        if( top  > totalhight){
                            if(objeto !== undefined){
                                for (var i = objeto.length - 1; i >= 0; i--) {
                                    elem = angular.element(element[0].querySelector("."+objeto[i]));
                                    elem.addClass("ng-hide");
                                } 
                            }
                            element.addClass("fixed-top");

                            if (angular.element('body').find('.div-temporal').length == 0) {
                                angular.element('.fixed-element').after('<div class="div-temporal" style="display:block; height:100px;"></strong>');
                            
                            }else{
                                
                            }

                        }else{
                            if(objeto !== undefined){
                                for (var j = objeto.length - 1; j >= 0; j--) {
                                    elem = angular.element(element[0].querySelector("."+objeto[j]));
                                    elem.removeClass("ng-hide");
                                }
                            }
                            //console.log(totalhight);

                            element.removeClass("fixed-top");
                            if(top  < totalhight){
                                angular.element('div').remove('.div-temporal');
                            }
                            
                            //cssElement.css("margin-top","0px");
                        }
                    };


                    angular.element($window).bind("scroll", function() {
                        var top = this.pageYOffset;
                        detectar(top, scope.customerInfo );
                        scope.$apply();
                    });
                }
            };
        }
})();