function init() {
  /**
   * First, let's instanciate sigma.js :
   */
  var sigInst = sigma.init($('#sigma-example')[0]).drawingProperties({
    defaultLabelColor: '#fff'
  }).graphProperties({
    // minNodeSize: 0.5,
    // maxNodeSize: 40
    minEdgeSize: 2,
    maxEdgeSize: 2
  });
 


// var hashArray = ["#fjk2jfd","fsdfsfds","ur1qowru","8390jjll","234","zx","v","djksa"];
//removing node duplication


var nodeArray = [];
var found = {};
for (var i = 0; i < hashArray.length; i++) {
    nodeArray.push([]);
    for (var j = 0; j < hashArray[i].length; j++) {
        if (!found[hashArray[i][j]]) {
            found[hashArray[i][j]] = true; 
            nodeArray[i].push(hashArray[i][j]);
        }
    }
}

 console.log(Math.random());
  




  for(i = 0; i < nodeArray.length; i++){

  	var randomClusterX = 2*Math.random()
  	var randomClusterY = Math.random()

  	var randomColor = 'rgb('+Math.round(Math.random()*256)+','+
                      Math.round(Math.random()*256)+','+
                      Math.round(Math.random()*256)+')' 

  	for (j = 0; j< nodeArray[i].length; j++){
  	//if node === duplicate move on
  	
  	if (j==0 && nodeArray[i][j].charAt(0)!=="#"){	
    

      	sigInst.addNode(nodeArray[i][j],{
      'x': randomClusterX+Math.random(),
      'y': randomClusterY+Math.random(),
      'label': nodeArray[i][j],
      'size': 12,
      'color': randomColor
    });
    }else  {

       sigInst.addNode(nodeArray[i][j],{
      'x': randomClusterX+Math.random(),
      'y': randomClusterY+Math.random(),
      'label': nodeArray[i][j],
      'size': 6,
      'color': randomColor

    
    });
    }
    };
  
    
  
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
 

  /**
   * Now, here is the code that shows the popup :
   */
  (function(){
    var popUp;
 
    // This function is used to generate the attributes list from the node attributes.
    // Since the graph comes from GEXF, the attibutes look like:
    // [
    //   { attr: 'Lorem', val: '42' },
    //   { attr: 'Ipsum', val: 'dolores' },
    //   ...
    //   { attr: 'Sit',   val: 'amet' }
    // ]
    function attributesToString(attr) {
      return '' +
        attr.map(function(o){
          return '' + o.attr + ' : ' + o.val + '';
        }).join('') +
        '';
    }
    // select node name with mouse click
    function showNodeInfo(event) {
      var nodeNString = String(event.content);
      iNumber = nodeNString;
      console.log(iNumber);
      $("#hashSearched").html(iNumber);
      document.getElementById("query").value = iNumber; //hashArray[iNumber[0]][iNumber[1]];
      $("#submit_id").submit();
      $("#hashSearched").html(iNumber);
    }
 
  
 
    sigInst.bind('downnodes',showNodeInfo).draw();
  })();
}

if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', init, false);
} else { 
	
  window.onload = init;

}

