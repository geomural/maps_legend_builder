# maps_legend_builder
This module allows to create correct legend on the map. The result is a table with legends. 

You can use 10 functions to create maps legend from the maps_legend_builder.js:

* tablesInit(...) creates invisible table, you need to use this function at first.
* splitCell(...) split the cell in the table

* setGlobalValues(...) allows to set common parameters for all mini-legends like style of captions 

* circles(...) creates circles with different size, color, structure and orientation
* slices(...) creates rectangles with different size, color and orientation
* layeredColoring(...) creates scales: rectangles without gap with text on rectangles boundaries
* linesLegend(...) creates lines and arrows with different structures, colors and width
* pointsMethod(...) creates 3 circles with the same size and color
* textLegend(...) creates text with different color and style
* imagesLegend(...) allows to add images to the legend

# Example 
You can see example of the big legend in the ***legend_example_1.js***  
It is more convenient to use functions to create legend in the main file (maps_legen_builder.js) and move it after test.  
Small example is in the legend_example_2.js
