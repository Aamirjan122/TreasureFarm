gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDstrObjects1= [];
gdjs.Untitled_32sceneCode.GDstrObjects2= [];
gdjs.Untitled_32sceneCode.GDfailObjects1= [];
gdjs.Untitled_32sceneCode.GDfailObjects2= [];
gdjs.Untitled_32sceneCode.GDcharctrObjects1= [];
gdjs.Untitled_32sceneCode.GDcharctrObjects2= [];
gdjs.Untitled_32sceneCode.GDinrtsObjects1= [];
gdjs.Untitled_32sceneCode.GDinrtsObjects2= [];
gdjs.Untitled_32sceneCode.GDpopObjects1= [];
gdjs.Untitled_32sceneCode.GDpopObjects2= [];
gdjs.Untitled_32sceneCode.GDreawrdObjects1= [];
gdjs.Untitled_32sceneCode.GDreawrdObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("charctr"), gdjs.Untitled_32sceneCode.GDcharctrObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharctrObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharctrObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharctrObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharctrObjects1[i].getBehavior("PlatformerObject").simulateDownKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharctrObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharctrObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcharctrObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcharctrObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


};gdjs.Untitled_32sceneCode.userFunc0x932d88 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);

    // Rewarded interstitial
        
show_8986636().then(() => {
    // You need to add your user reward function here, which will be executed after the user watches the ad.
    // For more details, please refer to the detailed instructions.
    alert('You have seen an ad!');
})

        
};
gdjs.Untitled_32sceneCode.userFunc0x933130 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);

    // Rewarded Popup

show_8986636('pop').then(() => {
    // user watch ad till the end or close it in interstitial format
    // your code to reward user for rewarded format
}).catch(e => {
    // user get error during playing ad
    // do nothing or whatever you want
})

        
};
gdjs.Untitled_32sceneCode.userFunc0x933500 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);

    // In-App Interstitial 

show_8986636({ 
  type: 'inApp', 
  inAppSettings: { 
    frequency: 2, 
    capping: 0.1, 
    interval: 30, 
    timeout: 5, 
    everyPage: false 
  } 
})

/*
This value is decoded as follows:
- show automatically 2 ads
  within 0.1 hours (6 minutes)
  with a 30-second interval between them
  and a 5-second delay before the first one is shown.
  The last digit, 0, means that the session will be saved when you navigate between pages.
  If you set the last digit as 1, then at any transition between pages,
  the session will be reset, and the ads will start again.
*/

};
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("inrts"), gdjs.Untitled_32sceneCode.GDinrtsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDinrtsObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDinrtsObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDinrtsObjects1[k] = gdjs.Untitled_32sceneCode.GDinrtsObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDinrtsObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("inrts"), gdjs.Untitled_32sceneCode.GDinrtsObjects1);

var objects = [];
objects.push.apply(objects,gdjs.Untitled_32sceneCode.GDinrtsObjects1);
gdjs.Untitled_32sceneCode.userFunc0x932d88(runtimeScene, objects);

}


{

gdjs.copyArray(runtimeScene.getObjects("pop"), gdjs.Untitled_32sceneCode.GDpopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDpopObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDpopObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDpopObjects1[k] = gdjs.Untitled_32sceneCode.GDpopObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDpopObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pop"), gdjs.Untitled_32sceneCode.GDpopObjects1);

var objects = [];
objects.push.apply(objects,gdjs.Untitled_32sceneCode.GDpopObjects1);
gdjs.Untitled_32sceneCode.userFunc0x933130(runtimeScene, objects);

}


{

gdjs.copyArray(runtimeScene.getObjects("reawrd"), gdjs.Untitled_32sceneCode.GDreawrdObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDreawrdObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDreawrdObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDreawrdObjects1[k] = gdjs.Untitled_32sceneCode.GDreawrdObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDreawrdObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("reawrd"), gdjs.Untitled_32sceneCode.GDreawrdObjects1);

var objects = [];
objects.push.apply(objects,gdjs.Untitled_32sceneCode.GDreawrdObjects1);
gdjs.Untitled_32sceneCode.userFunc0x933500(runtimeScene, objects);

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDstrObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDstrObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfailObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfailObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcharctrObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcharctrObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDinrtsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDinrtsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpopObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpopObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDreawrdObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDreawrdObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDstrObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDstrObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfailObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfailObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcharctrObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcharctrObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDinrtsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDinrtsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpopObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpopObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDreawrdObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDreawrdObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
