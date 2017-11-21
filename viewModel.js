define(
    ['ojs/ojcore', 'knockout', 'jquery'], function (oj, ko, $) {
    'use strict';
    
    function ExampleComponentModel(context) {
        var self = this;
        self.composite = context.element;
        self.inputvalues = ko.observable([]);
        self.title = ko.observable();
        self.callback = "";

        self.handleClick = function(evt, ui){
            //alert(evt)
            var formData = [];
            $(":input").each((inPut)=>{
                formData.push({key:inPut.id, value: inPut.value})
            })
            if(typeof self.callback == "function"){
                self.callback(formData)
            }
        }
        context.props.then(function (propertyMap) {
            //Store a reference to the properties for any later use
            self.properties = propertyMap;
            // console.log(self.properties)
            //Parse your component properties here 
            if(self.properties.inputvalues){
                self.inputvalues(self.properties.inputvalues)
            }
            if(self.properties.title){
                self.title(self.properties.title)
            }
            if(self.properties.callback){
                self.callback = self.properties.callback;
            }

        });
    };
    
    //Lifecycle methods - uncomment and implement if necessary 
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    ExampleComponentModel.prototype.attached = function(context){
    
    };

    //ExampleComponentModel.prototype.bindingsApplied = function(context){
    //};

    //ExampleComponentModel.prototype.detached = function(context){
    //};

    return ExampleComponentModel;
});