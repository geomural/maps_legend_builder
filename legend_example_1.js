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

tablesInit(2, [6, 4], "mydiv");
splitCell(0, 0, 2);
splitCell(0, 2, 2);
splitCell(0, 4, 2);
splitCell(1, 3, 2);
splitCell(0, 5, 2);

circles(0, 0, 
    [[10, 9, 7], [9, 8, 6, 5], [7, 6, 2], [6, 5]], 
    true, 
    [["black", "white", "black"], 
     ["black", "white", "black", "white"], 
     ["black", "white", "black"], 
     ["black", "white"]], 
    ["более 1 000 000 жителей", "от 500 000 до 1 000 000 жителей", 
"от 100 000 до 500 000 жителей", "менее 100 000 жителей"], 
    "10pt Arial", false, 210, "Населенные пункты", "bold 10pt Arial", 0, 0);

linesLegend(0, 0, 60, 
    [[7, 6, 1], [6, 4], 2, [4, 3, 3, 7], [4, 3, 3], 2, [6, 1]], 
    [["black", "orange", "black"], ["black", "white"], "black", ["black", "white", "black", "black"], ["black", "white", "black"], "blue", ["black", "black"]], 
    [[0, 0, [10, 2]], 0, [7, 7], [0, 0, [14, 14], [0, 20, 1, 9]], [0, 0, [14, 14]], [10, 4], [[2, 9], 0]],
    ["Автомагистрали", "Шоссе", "Прочие дороги", "Электрифицированные железные дороги", "Прочие железные дороги", "Морские пути", "Трубопроводы"], 
    false,
    0, 0, 50, "Пути сообщения", "bold 10pt Arial", 0, 1); //, [300, 10], ["black", "blue", "red"], 3, ["white", "yellow", "blue"], [[70, 30, 70, 30, 70, 30], [80, 30, 80, 30, 80], [90, 10, 90, 10, 90, 10]], "black", 4, ["road", "Kiev road", "new road"]);

textLegend(0, 0, ["МОСКВА", "Саратов", "Лебедевка"], ["bold 10pt Arial", 0, "italic 10pt Arial"], 0, [" - столица", " - центр субъекта", " - другое"], 0, 0, 0, 0, 0, 0);//, 0, 0, "Населенные пункты", "bold 10pt Arial");

layeredColoring(0, 1, 
            ["#00008B", "#0000FF", "#1E90FF", "#87CEEB", "#B0E0E6", "#E0FFFF", "#A9F3B7", "#F7D8BA", "#F5C69A", "#EBAC71", "#E99B53", "#E48731", "#BD620D"], 
            false, [30, 15], false, 
            ["глубже", "6000", "4000", "2000", "1000", "200", "0", "200", "500", "1000", "2000", "3000", "5000", "выше"], "7pt Arial", "black", 30, 20,
            false, "Высоты", "bold 10pt Arial"); 

slices(0, 2, [30, 15], 
    ["#8AC3D6", "#F2EBB5", "#A0E9AB", "#F6D5F3", "#FFFFA9"], 
    "grey", true, 
    ["Араратский", "Ширакский", "Придебедский", "Севан-Агстевский", "Сюникский"], false, false, 
    ["I", "II", "III", "IV", "V"], "7pt Arial", false, false, "Экономические районы <br> Армянской ССР", "bold 10pt Arial", 0, 0);

        
slices(0, 2, [40, 20], 
    ["#ECEFB3", "#CCF59E", "#89C445", "#54752F"],
    "grey", false, 
    ["менее 30", "30-40", "40-50", "более 50"], "7pt Arial", false, 
    false, false, false, 20, "Удельный вес зерновых культур в общей посевной площади района <br> (в проц.)", "bold 10pt Arial", 0, 1);

    
splitCell(0, 3, 3);

pointsMethod(0, 3, false, [7, 5], ["yellow", "green"], ["овса", "пшеницы"], ["orange", "#00FF22"], 0, 0, 
            "Посевные площади <br> (1 точка - 500 га)", "bold 10pt Arial", 0, 0);

layeredColoring(0, 2, 
    ["#F2F8F5", "#BEE4D1", "#89D7B0", "#439D71", "#347F5B"], 
    false, [30, 15], false, 
    ["менее", "10", "30", "50", "70", "более"], "8pt Arial", "black", 30, 20,
    false, "Среднее месячное количество осадков <br> (в миллиметрах)", "bold 10pt Arial", 0, 1); 

slices(1, 0, [30, 25], 
    ["#D5816D", "#D58839", "#8F8F38", "#ADD97D", "#F3F37C", "#E4C8E4", "#B0A4D6"], 
    "grey", true, 
    ["Сухой субтропический", "Сухой континентальный", "Умеренно-теплый", "Умеренно-теплый, сравнительно влажный", "Умеренный, с теплым летом", "Умеренно-холодный", "Холодный"], false, false, 
    ["1", "2", "3", "4", "5", "6", "7"], "8pt Arial", "#303030", false, "Типы климатов", "bold 10pt Arial");//, 0, 1);


circles(1, 1, [[12, 11], [10, 9], [8, 7], [6, 5], [4, 3], [2, 1]], false, 
    [["black", "yellow"]],
    ["более 5", "5-4", "4-3", "3-2", "2-1", "менее 1"], 
    "10pt Arial", false, false, "Валовая продукция с/х предприятий <br> (млн. руб.)", "bold 10pt Arial");

circles(1, 2, 6, true, ["red", "yellow", "green", "purple", "orange"], ["хлоридные, хлоридно-гидрокарбонатные натриевые воды", "гидрокарбонатно-хлоридные воды", "гидрокарбонатные воды", "гидрокарбонатно-кальциевые и натриево-кальциевые воды", "гидрокарбонатно-сульфатные воды"], false, 
         false, 250, "Химический состав <br> минеральных вод", "bold 10pt Arial");
   
    
linesLegend(0, 3, 50, 
    [6, 4, 3],  
    [["#203FBC", "white", "blue"], ["#9F1919", "white", "red"]], 
    0,
    ["холодные", "теплые"], 
    11,
    0, 0, 0, "Течения", "bold 10pt Arial", 0, 1); 
    
imagesLegend(0, 3, ["images/11.png", "images/22.png"], ["скорпионов", "черепах"], 0, 0, "Места обитания", "bold 10pt Arial", 0, 2);

slices(1, 3, [30, 15], 
    ["#603A01", "#96641D", "#7F8235", "#A2C75C", "#C9E699", "white"],
    "grey", true, 
    ["более 200", "100-200", "60-100", "40-60", "20-40", "менее 20"], 
"10pt Arial", false, false, false, false, 150, 
"Плотность сельского населения по районам <br> (число жителей на 1 кв.км)", "10pt Arial", 0, 0);

layeredColoring(0, 5,
    ["#350B51", "#542970", "#724790", "#906EA6", "#AC95BB"], 
    false, [40, 20], true, 
    ["более", "940", "860", "780", "700", "менее"], 
    "8pt Arial", "black", 45, 20, 8, 
    "Среднее годовое давление воздуха <br> в миллибарах", 
    "9pt Arial", 0, 0);

linesLegend(0, 4, 50, 
    [6, 4, 3, 2, 1], 
    "purple",
    [0, 0, [15, 5], [10, 5], [3, 2]],
    ["реки Обь", "притоков I порядка", "притоков II порядка", 
     "притоков III порядка", "рек местного стока"], 
    false,
    0, 0, 0, "ГРАНИЦЫ ВОДОСБОРНЫХ БАССЕЙНОВ", "10pt Arial", 0, 0);

linesLegend(0, 4, 65, 2,
    ["pink", "orange", "purple", "brown"], 
    [0, [15, 5], [3, 2], [20, 3, 2, 3]],
    ["Крылов П.Н.", "Сушкин П.П.", "Обручев В.А.", "Ферсман А.Е."], 
    -10, 0, 0, 0, 
    "Экспедиции Академии Наук и университетов <br> (1891 - 1916 гг.)",
    "italic 10pt Arial", 0, 1);

textLegend(1, 3, ["I", "II", "III", "IV", "V", "VI", "VII"], 0, "red", 
    ["Араратский", "Ширакский", "Лори-Памбакский", "Агстев-Дебедский", 
     "Севанский", "Вайкский", "Зангезурский"], 0, 0, 
     "ФИЗИКО-ГЕОГРАФИЧЕСКИЕ РАЙОНЫ", "10pt Arial", 0, 1);

pointsMethod(0, 5, true, [6, 6], ["red", "brown"], 
    ["Посевные площади <br> зерновых культур <br> (1 точка - 200 га посевов)",
     "Посевные площади <br> бобовых культур <br> (1 точка - 100 га посевов)"], 0, 0, 0, 0, 0, 0, 1);
     