//tablesInit(columns, rows, id)
//splitCell(col, row, cols_amount)
//setGlobalValues(textfont, textcolor, gap, captionfont, captioncolor, borderstyle)
///////////// LEGENDS FUNCTIONS ////////////
//layeredColoring(column, row, colors, strokecolor, size, is_vertical, description, textfont, textcolor, txtGap, xgap, ygap, caption, captionfont, captioncolor, inside_col)
//circles(column, row, size, is_vertical, color, description, textfont, textcolor, textwidth, caption, captionfont, captioncolor, inside_col)
//slices(col, row, size, fillcolors, strokecolors, is_vertical, description, textfont, textcolor, internaltext, internaltextfont, internaltextcolor, textwidth, caption, captionfont, captioncolor, inside_col)
//linesLegend(col, row, length, width, colors, pattern, description, arrowwidth, textfont, textcolor, textwidth, caption, captionfont, captioncolor, inside_col)
//pointsMethod(col, row, is_vertical, diameter, color, description, strokecolor, textfont, textcolor, caption, captionfont, captioncolor, inside_col)
//textLegend(col, row, text, textfont, textcolor, descr, descrfont, descrcolor, caption, captionfont, captioncolor, inside_col)
//imagesLegend(col, row, links, descr, descrfont, descrcolor, caption, captionfont, captioncolor, inside_col)

//to see tables border:
//setGlobalValues(0, 0, 0, 0, 0, '1px solid black'); 

tablesInit(1, [3], "mydiv"); 
setGlobalValues(0, 0, 0, "bold 12px Arial", 0, 0);
splitCell(0, 1, 2)
circles(0,0,[[5,4], [8,7], [10,9], [12,11], [14,13]], false, [["black","#cac9fc"], ["black","#9ba1e7"], ["black","#4052b8"], ["black","#042588"], ["black","#000066"]], ["5", "6", "7", "8", "9"], 0, 0, 0, "Magnitude of Earthquakes"); 
imagesLegend(0, 0, "images/orange.png", "volcanic eruptions"); 
linesLegend(0, 1, 30, 3, ["#e60000", "#0070ff"], 0, ["warm", "cold"], 8,0, 0, 0, "Ocean Current", 0, 0, 1);
slices(0, 1, [30, 15], ["#bad3e8", "#c7f0d9", "#d3cbf4"], 0, true,  ["jaguar", "leopard", "lion"], 0, 0, 0, 0, 0, 0, "Animals Distribution Areas", 0, 0, 0);
slices(0, 2, [30, 15], ["#fc7c7a", "#fd9500", "#fdc600", "#fdd17a", "#fcfcbb", "#fcfcbb", "#8ace62", "#a4f57a", "#edbdfd", "#cc78f5", "#0085ac", "#e5e1e5"], ["#fc7c7a", "#fd9500", "#fdc600", "#fdd17a", "#fcfcbb", "#fcfcbb", "#8ace62", "#a4f57a", "#edbdfd", "#cc78f5", "#0085ac", "#e5e1e5"], true,  ["Humid Equatorial Climate - No Dry Season", "Humid Equatorial Climate - Short Dry Season", "Humid Equatorial Climate - Long Dry Season", "Dry Climate - Semi Arid", "Dry Climate - Arid", "Humid Temperate Climate - No Dry Season", "Dry Winter", "Dry Summer", "Humid Cold Climate - No Dry Season", "Humid Cold Climate - Dry Winter", "Cold Polar Climate - Tundra & Ice", "Unclassified Highlands"], 0, 0, 0, 0, 0, 0, "Climate Types"); 
linesLegend(0, 2, 30, 3, "#ffff00", 0, ["political boundaries"]); 