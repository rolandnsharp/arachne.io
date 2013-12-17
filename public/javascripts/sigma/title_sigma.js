function init() {

 /**
   * This is the code to write the FishEye plugin :
   */
  
  (function(){
 
    // First, let's write a FishEye class.
    // There is no need to make this class global, since it is made to be used through
    // the SigmaPublic object, that's why a local scope is used for the declaration.
    // The parameter 'sig' represents a Sigma instance.
    var FishEye = function(sig) { 
      sigma.classes.Cascade.call(this);      // The Cascade class manages the chainable property
                                             // edit/get function.
 
      var self = this;                       // Used to avoid any scope confusion.
      var isActivated = false;               // Describes is the FishEye is activated.
 
      this.p = {                             // The object containing the properties accessible with
        radius: 200,                         // the Cascade.config() method.
        power: 2
      };
 
      function applyFishEye(mouseX, mouseY) {   // This method will apply a formula relatively to
                                                // the mouse position.
        var newDist, newSize, xDist, yDist, dist,
            radius   = self.p.radius,
            power    = self.p.power,
            powerExp = Math.exp(power);
 
        sig.graph.nodes.forEach(function(node) {
          xDist = node.displayX - mouseX;
          yDist = node.displayY - mouseY;
          dist  = Math.sqrt(xDist*xDist + yDist*yDist);
 
          if(dist < radius){
            newDist = powerExp/(powerExp-1)*radius*(1-Math.exp(-dist/radius*power));
            newSize = powerExp/(powerExp-1)*radius*(1-Math.exp(-dist/radius*power));
 
            if(!node.isFixed){
              node.displayX = mouseX + xDist*(newDist/dist*3/4 + 1/4);
              node.displayY = mouseY + yDist*(newDist/dist*3/4 + 1/4);
            }
 
            node.displaySize = Math.min(node.displaySize*newSize/dist,10*node.displaySize);
          }
        });
      };
 
      // The method that will be triggered when Sigma's 'graphscaled' is dispatched.
      function handler() {
        applyFishEye(
          sig.mousecaptor.mouseX,
          sig.mousecaptor.mouseY
        );
      }
 
      this.handler = handler;
 
      // A public method to set/get the isActivated parameter.
      this.activated = function(v) {
        if(v==undefined){
          return isActivated;
        }else{
          isActivated = v;
          return this;
        }
      };
 
      // this.refresh() is just a helper to draw the graph.
      this.refresh = function(){
        sig.draw(2,2,2);
      };
    };
 
    // Then, let's add some public method to sigma.js instances :
    sigma.publicPrototype.activateFishEye = function() {
      if(!this.fisheye) {
        var sigmaInstance = this;
        var fe = new FishEye(sigmaInstance._core);
        sigmaInstance.fisheye = fe;
      }
 
      if(!this.fisheye.activated()){
        this.fisheye.activated(true);
        this._core.bind('graphscaled', this.fisheye.handler);
        document.getElementById(
          'sigma_mouse_'+this.getID()
        ).addEventListener('mousemove',this.fisheye.refresh,true);
      }
 
      return this;
    };
 
    sigma.publicPrototype.desactivateFishEye = function() {
      if(this.fisheye && this.fisheye.activated()){
        this.fisheye.activated(false);
        this._core.unbind('graphscaled', this.fisheye.handler);
        document.getElementById(
          'sigma_mouse_'+this.getID()
        ).removeEventListener('mousemove',this.fisheye.refresh,true);
      }
 
      return this;
    };
 
    sigma.publicPrototype.fishEyeProperties = function(a1, a2) {
      var res = this.fisheye.config(a1, a2);
      return res == s ? this.fisheye : res;
    };
  })();
 //////////////////////////////////////////////////////////////////////////


  // Instanciate sigma.js and customize it :
  var sigInst = sigma.init(document.getElementById('sigma-example')).configProperties({
      drawHoverNodes: false
    }).drawingProperties({
      labelThreshold: 10000,
    defaultLabelColor: '#fff'
  }).mouseProperties({
      mouseEnabled: false
    });
 
  // Generate a random graph with :
  //   . N nodes
  //   . E edges

sigInst.startNodeShapes();

var hashArray = [["#1","#6","#j1","#a","#l1","#m1","#j21","#k2d1","#ls21"],["#1","#2","#3","#4","5"],["#1b","#2b","#3b","#4b","5"],["#6","#7","#1","#9"],["#6g","#7g","#g1","#9g"],["#a","#b","#c"],["#d","#e","#f","#g"],["#h","#i","#j","#k","#l","#m"]];
//removing node duplication
console.log(hashArray);

var nodeArray = [];
var statArray = []; // returns only the duplicated items,
var found = {};
for (var i = 0; i < hashArray.length; i++) {
    nodeArray.push([]);
    for (var j = 0; j < hashArray[i].length; j++) {
        if (!found[hashArray[i][j]]) {
            found[hashArray[i][j]] = true; 

            nodeArray[i].push(hashArray[i][j]);
        } else {
          statArray.push(hashArray[i][j]);
          // console.log(statArray);
         }
    }
}



function FrequencyCounter(array) {
  //convert a Multidimensional Array (an array of arrays) into one long array. Great to use before running the unique script for instance
  var singleArray = [];
  for (i=0; i<array.length; i++) { 
    for (j=0; j<array.length; j++) { 
  singleArray.push(array[i][j]);  
  };
  };

    var frequency = {}, value;
    // compute frequencies of each value
    for(var i = 0; i < singleArray.length; i++) {
        value = singleArray[i];
        if(value in frequency) {
            frequency[value]++;
        }
        else {
            frequency[value] = 1; // this value is to not one because all items in this array are already duplicates of more. 
        }
    }
return frequency;
}

// now run the statArray through the frequency counter

var duplicateFrequency = FrequencyCounter(hashArray);

console.log(duplicateFrequency);

// var masterSize = 0;




console.log(nodeArray);


    for(i = 0; i < nodeArray.length; i++){
    // masterSize = 0;
    var randomClusterX = 2*Math.random()
    var randomClusterY = Math.random()

    var randomColor = 'rgb('+Math.round(Math.random()*256)+','+
                      Math.round(Math.random()*256)+','+
                      Math.round(Math.random()*256)+')' 





    for (j = 0; j< nodeArray[i].length; j++){
    //if node === duplicate move on
    
    


    
    


    if (j===0 && nodeArray[i][j].charAt(0)!=="#"){  
    //  for (k = 1; k< nodeArray[i].length; k++){
    //    masterSize = masterSize + duplicateFrequency[nodeArray[i][k]];
    //  }

  
    
    // console.log(masterSize);

        sigInst.addNode(nodeArray[i][j],{
      'x': randomClusterX+Math.random(),
      'y': randomClusterY+Math.random(),
      'label': nodeArray[i][j],
      'size': 20,
      'color': randomColor,
      shape: {
      name: 'diamond'
    }
    });
    } 
    // else if (j===nodeArray[i].length-1 && nodeArray[i][0].charAt(0)!=="#"){
    //  console.log(masterSize);
    //    sigInst.addNode(nodeArray[i][j],{
    //   'x': randomClusterX+Math.random(),
    //   'y': randomClusterY+Math.random(),
    //   'label': nodeArray[i][j],
    //   'size': 4*masterSize,
    //   'color': randomColor
    // });
    // } 
    else  {

       sigInst.addNode(nodeArray[i][j],{
      'x': randomClusterX+Math.random()/2,
      'y': randomClusterY+Math.random()/2,
      'label': nodeArray[i][j],
      'size': 1+3*duplicateFrequency[nodeArray[i][j]], // node size = 4 multiplied by frequency of connections between different thought webs/each article
      'color': randomColor

    
    });

    }

    };
  
    // console.log(masterSize);
  
  };

function cleanArray(actual){
  var cleanedArray = new Array();
  for(var i = 0; i<actual.length; i++){
      if (actual[i].length !== 0){
        cleanedArray.push(actual[i]);
    }
  }
  return cleanedArray;
}

hashArray = cleanArray(hashArray);

 for(i = 0; i < hashArray.length; i++){
  
    //hierarchical edge structure for content with titles 

    if ( hashArray[i][0].charAt(0)!=="#"){
      for (j = 0; j< hashArray[i].length-1; j++){
        sigInst.addEdge(i+",0-to-"+i+","+String((hashArray[i].length-1)-j),  hashArray[i][0],hashArray[i][(hashArray[i].length-1)-j]);
        }
    }else {
      // non-hierarchical edge structure for content with titles. Each node is connected to all other nodes in the content
      for (j = 0; j< hashArray[i].length-1; j++){
        for (k = 0; k<hashArray[i].length; k++){
      sigInst.addEdge(i+","+j+"-to-"+i+","+k,  hashArray[i][j],hashArray[i][k]);
     }
    }
    }
  }
 
  // Draw the graph :
  sigInst.activateFishEye().draw();
 


}
 
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', init, false);
} else {
  window.onload = init;
}