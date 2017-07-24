describe('Testing AngularJS Test Suite', function(){
    
    beforeEach(module('app'));
    
    describe('Testign AngularJS controller', function(){
        var scope, ctrl, data, setting, originalTimeout;
        
        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            ctrl = $controller('mainController', {$scope:scope});
        }));
        
        it('should initialize the page title in the scope', function(){
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe('Node Server API');
        });
        
        it('should records reactions, in the list', function(){
            expect(scope.reactionIDMap).toBeDefined();
            expect(Object.keys(scope.reactionIDMap).length).toBe(0);
            
            scope.iconClicked(1, 'up');

            expect(Object.keys(scope.reactionIDMap).length).toBe(1);
            expect(scope.reactionIDMap[1]).toBe('up');
            
            scope.iconClicked(2, 'up');

            expect(Object.keys(scope.reactionIDMap).length).toBe(2);
            expect(scope.reactionIDMap[2]).toBe('up');
            
            scope.iconClicked(3, 'down');

            expect(Object.keys(scope.reactionIDMap).length).toBe(3);
            expect(scope.reactionIDMap[3]).toBe('down');
            
        });
        
    });
    
    describe('Testign AngularJS controller', function(){
        var scope, data, setting, originalTimeout, rootScope, $q, deffered;
        
        beforeEach(inject(function(Data, settings, $rootScope, $q, $controller){
            
            rootScope = $rootScope
            scope = $rootScope.$new();
            myData = Data;
            setting = settings.default();
            
            // We use the $q service to create a mock instance of defer
            deferred = $q.defer();

            // Use a Jasmine Spy to return the deferred promise
            spyOn(myData, 'getData').and.returnValue(deferred.promise);
            
            controller = $controller('mainController', {
                $scope: scope,
                myData: myData
              });
        }));
        
        
        it('should check if default service had its default value', function(){
            expect(setting).toBeDefined();
            expect(setting.API).toBe('http://localhost:8888/data');
            expect(setting.rows).toBe(5);
        
        });
        
        it('should resolve promise', function () {
            expect(myData.getData).toHaveBeenCalled();
        });
                
    });
});