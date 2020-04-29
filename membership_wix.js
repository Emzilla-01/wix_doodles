// client wanted to prepare the site such that table rows, when clicked, would open a wixWindow Lightbox corresponding to that row

import wixWindow from 'wix-window';
// ##########################################
// original function provided by client
//export function table1_rowSelect_1(event) {
//	let rowData = event.rowData;
//	wixWindow.openLightbox("1-1")
//}
// ##########################################

//seems there is no help(obj) in js, but I found this
function listAllProperties(o) {
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; 
           objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
        result = result.concat(
            Object.getOwnPropertyNames(objectToInspect)
        );  
    }
	return result; 
}

// ##########################################
//This was the first milestone in getting the function to work
//export function table1_rowSelect_1(event) {
//	let rowIndex = event.rowIndex
//	wixWindow.openLightbox("1-"+rowIndex)
//}
// ##########################################

export function table1_rowSelect_by_rowTitle(event) {
	//This function selects by rowData.title, which is the first column of text inside the table itself
	//rowData.title must match exactly the Lightbox name set inside the Gui tool

	//lines used to explore the event obj
	//console.log("inside table1_rowSelect_1")
	
	//console.log(listAllProperties(event).join())
	//console.log("event.rowData:", event.rowData)
	//console.log("event.context:", event.context)
	//console.log("event.target:", event.target)
	//console.log("event.target.rows.title", event.target.rows.title)
	//console.log("event.target.context", event.target.context)
	
	//console.log("event.rowData.title:", event.rowData.title)
	// title is an attribute created by wix user as a table column
	let rowTitle = event.rowData.title
	wixWindow.openLightbox(rowTitle)
}

// ##########################################
// After implementation, client can now create Lightboxes from the Wix GUI which correspond to each row.
// ##########################################