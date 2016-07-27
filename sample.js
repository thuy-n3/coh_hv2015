const csv = require("fast-csv");

csv
.fromPath("coh_HV2015.csv", {
	objectMode:true, 
	headers: true, 

})
.on("data", function(data){
	console.log(data);
})
.on("end", function(){
	console.log("done");
})