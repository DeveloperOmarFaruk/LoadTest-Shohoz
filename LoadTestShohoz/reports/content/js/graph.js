/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 6961.0, "minX": 0.0, "maxY": 25780.0, "series": [{"data": [[0.0, 6961.0], [0.1, 6961.0], [0.2, 6961.0], [0.3, 6977.0], [0.4, 6977.0], [0.5, 6977.0], [0.6, 7011.0], [0.7, 7011.0], [0.8, 7011.0], [0.9, 7040.0], [1.0, 7040.0], [1.1, 7040.0], [1.2, 7072.0], [1.3, 7072.0], [1.4, 7072.0], [1.5, 7109.0], [1.6, 7109.0], [1.7, 7109.0], [1.8, 7121.0], [1.9, 7121.0], [2.0, 7302.0], [2.1, 7302.0], [2.2, 7302.0], [2.3, 7314.0], [2.4, 7314.0], [2.5, 7314.0], [2.6, 7355.0], [2.7, 7355.0], [2.8, 7355.0], [2.9, 7360.0], [3.0, 7360.0], [3.1, 7360.0], [3.2, 7385.0], [3.3, 7385.0], [3.4, 7385.0], [3.5, 7505.0], [3.6, 7505.0], [3.7, 7505.0], [3.8, 7702.0], [3.9, 7702.0], [4.0, 7883.0], [4.1, 7883.0], [4.2, 7883.0], [4.3, 8002.0], [4.4, 8002.0], [4.5, 8002.0], [4.6, 8073.0], [4.7, 8073.0], [4.8, 8073.0], [4.9, 8167.0], [5.0, 8167.0], [5.1, 8167.0], [5.2, 8168.0], [5.3, 8168.0], [5.4, 8168.0], [5.5, 8227.0], [5.6, 8227.0], [5.7, 8227.0], [5.8, 8233.0], [5.9, 8233.0], [6.0, 8270.0], [6.1, 8270.0], [6.2, 8270.0], [6.3, 8326.0], [6.4, 8326.0], [6.5, 8326.0], [6.6, 8380.0], [6.7, 8380.0], [6.8, 8380.0], [6.9, 8498.0], [7.0, 8498.0], [7.1, 8498.0], [7.2, 8554.0], [7.3, 8554.0], [7.4, 8554.0], [7.5, 8612.0], [7.6, 8612.0], [7.7, 8612.0], [7.8, 8692.0], [7.9, 8692.0], [8.0, 8716.0], [8.1, 8716.0], [8.2, 8716.0], [8.3, 8719.0], [8.4, 8719.0], [8.5, 8719.0], [8.6, 8764.0], [8.7, 8764.0], [8.8, 8764.0], [8.9, 8768.0], [9.0, 8768.0], [9.1, 8768.0], [9.2, 8784.0], [9.3, 8784.0], [9.4, 8784.0], [9.5, 8862.0], [9.6, 8862.0], [9.7, 8862.0], [9.8, 8887.0], [9.9, 8887.0], [10.0, 8887.0], [10.1, 9368.0], [10.2, 9368.0], [10.3, 9820.0], [10.4, 9820.0], [10.5, 9820.0], [10.6, 9919.0], [10.7, 9919.0], [10.8, 9919.0], [10.9, 10059.0], [11.0, 10059.0], [11.1, 10059.0], [11.2, 10071.0], [11.3, 10071.0], [11.4, 10071.0], [11.5, 10071.0], [11.6, 10071.0], [11.7, 10071.0], [11.8, 10071.0], [11.9, 10071.0], [12.0, 10071.0], [12.1, 10074.0], [12.2, 10074.0], [12.3, 10117.0], [12.4, 10117.0], [12.5, 10117.0], [12.6, 10217.0], [12.7, 10217.0], [12.8, 10217.0], [12.9, 10217.0], [13.0, 10217.0], [13.1, 10217.0], [13.2, 10449.0], [13.3, 10449.0], [13.4, 10449.0], [13.5, 11342.0], [13.6, 11342.0], [13.7, 11342.0], [13.8, 11513.0], [13.9, 11513.0], [14.0, 11513.0], [14.1, 11605.0], [14.2, 11605.0], [14.3, 11729.0], [14.4, 11729.0], [14.5, 11729.0], [14.6, 11730.0], [14.7, 11730.0], [14.8, 11730.0], [14.9, 11768.0], [15.0, 11768.0], [15.1, 11768.0], [15.2, 11791.0], [15.3, 11791.0], [15.4, 11791.0], [15.5, 11805.0], [15.6, 11805.0], [15.7, 11805.0], [15.8, 11862.0], [15.9, 11862.0], [16.0, 11862.0], [16.1, 12044.0], [16.2, 12044.0], [16.3, 12060.0], [16.4, 12060.0], [16.5, 12060.0], [16.6, 12082.0], [16.7, 12082.0], [16.8, 12082.0], [16.9, 12167.0], [17.0, 12167.0], [17.1, 12167.0], [17.2, 12429.0], [17.3, 12429.0], [17.4, 12429.0], [17.5, 12601.0], [17.6, 12601.0], [17.7, 12601.0], [17.8, 12618.0], [17.9, 12618.0], [18.0, 12618.0], [18.1, 12648.0], [18.2, 12648.0], [18.3, 12762.0], [18.4, 12762.0], [18.5, 12762.0], [18.6, 12784.0], [18.7, 12784.0], [18.8, 12784.0], [18.9, 12817.0], [19.0, 12817.0], [19.1, 12817.0], [19.2, 12870.0], [19.3, 12870.0], [19.4, 12870.0], [19.5, 12899.0], [19.6, 12899.0], [19.7, 12899.0], [19.8, 12899.0], [19.9, 12899.0], [20.0, 12899.0], [20.1, 12932.0], [20.2, 12932.0], [20.3, 12958.0], [20.4, 12958.0], [20.5, 12958.0], [20.6, 12993.0], [20.7, 12993.0], [20.8, 12993.0], [20.9, 13010.0], [21.0, 13010.0], [21.1, 13010.0], [21.2, 13059.0], [21.3, 13059.0], [21.4, 13059.0], [21.5, 13068.0], [21.6, 13068.0], [21.7, 13068.0], [21.8, 13195.0], [21.9, 13195.0], [22.0, 13212.0], [22.1, 13212.0], [22.2, 13212.0], [22.3, 13218.0], [22.4, 13218.0], [22.5, 13218.0], [22.6, 13220.0], [22.7, 13220.0], [22.8, 13220.0], [22.9, 13263.0], [23.0, 13263.0], [23.1, 13263.0], [23.2, 13311.0], [23.3, 13311.0], [23.4, 13311.0], [23.5, 13347.0], [23.6, 13347.0], [23.7, 13347.0], [23.8, 13407.0], [23.9, 13407.0], [24.0, 13442.0], [24.1, 13442.0], [24.2, 13442.0], [24.3, 13467.0], [24.4, 13467.0], [24.5, 13467.0], [24.6, 13498.0], [24.7, 13498.0], [24.8, 13498.0], [24.9, 13522.0], [25.0, 13522.0], [25.1, 13522.0], [25.2, 13540.0], [25.3, 13540.0], [25.4, 13540.0], [25.5, 13550.0], [25.6, 13550.0], [25.7, 13550.0], [25.8, 13569.0], [25.9, 13569.0], [26.0, 13577.0], [26.1, 13577.0], [26.2, 13577.0], [26.3, 13664.0], [26.4, 13664.0], [26.5, 13664.0], [26.6, 13731.0], [26.7, 13731.0], [26.8, 13731.0], [26.9, 13731.0], [27.0, 13731.0], [27.1, 13731.0], [27.2, 13747.0], [27.3, 13747.0], [27.4, 13747.0], [27.5, 13752.0], [27.6, 13752.0], [27.7, 13752.0], [27.8, 13755.0], [27.9, 13755.0], [28.0, 13794.0], [28.1, 13794.0], [28.2, 13794.0], [28.3, 13801.0], [28.4, 13801.0], [28.5, 13801.0], [28.6, 13819.0], [28.7, 13819.0], [28.8, 13819.0], [28.9, 13823.0], [29.0, 13823.0], [29.1, 13823.0], [29.2, 13827.0], [29.3, 13827.0], [29.4, 13827.0], [29.5, 13833.0], [29.6, 13833.0], [29.7, 13833.0], [29.8, 13954.0], [29.9, 13954.0], [30.0, 13968.0], [30.1, 13968.0], [30.2, 13968.0], [30.3, 14038.0], [30.4, 14038.0], [30.5, 14038.0], [30.6, 14101.0], [30.7, 14101.0], [30.8, 14101.0], [30.9, 14174.0], [31.0, 14174.0], [31.1, 14174.0], [31.2, 14302.0], [31.3, 14302.0], [31.4, 14302.0], [31.5, 14304.0], [31.6, 14304.0], [31.7, 14304.0], [31.8, 14341.0], [31.9, 14341.0], [32.0, 14384.0], [32.1, 14384.0], [32.2, 14384.0], [32.3, 14411.0], [32.4, 14411.0], [32.5, 14411.0], [32.6, 14421.0], [32.7, 14421.0], [32.8, 14421.0], [32.9, 14439.0], [33.0, 14439.0], [33.1, 14439.0], [33.2, 14457.0], [33.3, 14457.0], [33.4, 14457.0], [33.5, 14471.0], [33.6, 14471.0], [33.7, 14471.0], [33.8, 14502.0], [33.9, 14502.0], [34.0, 14509.0], [34.1, 14509.0], [34.2, 14509.0], [34.3, 14538.0], [34.4, 14538.0], [34.5, 14538.0], [34.6, 14649.0], [34.7, 14649.0], [34.8, 14649.0], [34.9, 14736.0], [35.0, 14736.0], [35.1, 14736.0], [35.2, 14758.0], [35.3, 14758.0], [35.4, 14758.0], [35.5, 14792.0], [35.6, 14792.0], [35.7, 14792.0], [35.8, 14796.0], [35.9, 14796.0], [36.0, 14834.0], [36.1, 14834.0], [36.2, 14834.0], [36.3, 14863.0], [36.4, 14863.0], [36.5, 14863.0], [36.6, 14867.0], [36.7, 14867.0], [36.8, 14867.0], [36.9, 14931.0], [37.0, 14931.0], [37.1, 14931.0], [37.2, 14987.0], [37.3, 14987.0], [37.4, 14987.0], [37.5, 15029.0], [37.6, 15029.0], [37.7, 15029.0], [37.8, 15058.0], [37.9, 15058.0], [38.0, 15106.0], [38.1, 15106.0], [38.2, 15106.0], [38.3, 15113.0], [38.4, 15113.0], [38.5, 15113.0], [38.6, 15114.0], [38.7, 15114.0], [38.8, 15114.0], [38.9, 15130.0], [39.0, 15130.0], [39.1, 15130.0], [39.2, 15157.0], [39.3, 15157.0], [39.4, 15157.0], [39.5, 15163.0], [39.6, 15163.0], [39.7, 15163.0], [39.8, 15180.0], [39.9, 15180.0], [40.0, 15228.0], [40.1, 15228.0], [40.2, 15228.0], [40.3, 15233.0], [40.4, 15233.0], [40.5, 15233.0], [40.6, 15250.0], [40.7, 15250.0], [40.8, 15250.0], [40.9, 15266.0], [41.0, 15266.0], [41.1, 15266.0], [41.2, 15273.0], [41.3, 15273.0], [41.4, 15273.0], [41.5, 15282.0], [41.6, 15282.0], [41.7, 15282.0], [41.8, 15304.0], [41.9, 15304.0], [42.0, 15318.0], [42.1, 15318.0], [42.2, 15318.0], [42.3, 15332.0], [42.4, 15332.0], [42.5, 15332.0], [42.6, 15335.0], [42.7, 15335.0], [42.8, 15335.0], [42.9, 15347.0], [43.0, 15347.0], [43.1, 15347.0], [43.2, 15347.0], [43.3, 15347.0], [43.4, 15347.0], [43.5, 15364.0], [43.6, 15364.0], [43.7, 15364.0], [43.8, 15365.0], [43.9, 15365.0], [44.0, 15379.0], [44.1, 15379.0], [44.2, 15379.0], [44.3, 15410.0], [44.4, 15410.0], [44.5, 15410.0], [44.6, 15425.0], [44.7, 15425.0], [44.8, 15425.0], [44.9, 15455.0], [45.0, 15455.0], [45.1, 15455.0], [45.2, 15462.0], [45.3, 15462.0], [45.4, 15462.0], [45.5, 15471.0], [45.6, 15471.0], [45.7, 15471.0], [45.8, 15479.0], [45.9, 15479.0], [46.0, 15496.0], [46.1, 15496.0], [46.2, 15496.0], [46.3, 15509.0], [46.4, 15509.0], [46.5, 15509.0], [46.6, 15511.0], [46.7, 15511.0], [46.8, 15511.0], [46.9, 15518.0], [47.0, 15518.0], [47.1, 15518.0], [47.2, 15525.0], [47.3, 15525.0], [47.4, 15525.0], [47.5, 15558.0], [47.6, 15558.0], [47.7, 15558.0], [47.8, 15568.0], [47.9, 15568.0], [48.0, 15618.0], [48.1, 15618.0], [48.2, 15618.0], [48.3, 15632.0], [48.4, 15632.0], [48.5, 15632.0], [48.6, 15638.0], [48.7, 15638.0], [48.8, 15638.0], [48.9, 15652.0], [49.0, 15652.0], [49.1, 15652.0], [49.2, 15654.0], [49.3, 15654.0], [49.4, 15654.0], [49.5, 15656.0], [49.6, 15656.0], [49.7, 15656.0], [49.8, 15662.0], [49.9, 15662.0], [50.0, 15692.0], [50.1, 15692.0], [50.2, 15692.0], [50.3, 15720.0], [50.4, 15720.0], [50.5, 15720.0], [50.6, 15737.0], [50.7, 15737.0], [50.8, 15737.0], [50.9, 15750.0], [51.0, 15750.0], [51.1, 15750.0], [51.2, 15866.0], [51.3, 15866.0], [51.4, 15866.0], [51.5, 15880.0], [51.6, 15880.0], [51.7, 15880.0], [51.8, 15880.0], [51.9, 15880.0], [52.0, 15901.0], [52.1, 15901.0], [52.2, 15901.0], [52.3, 15904.0], [52.4, 15904.0], [52.5, 15904.0], [52.6, 15913.0], [52.7, 15913.0], [52.8, 15913.0], [52.9, 15915.0], [53.0, 15915.0], [53.1, 15915.0], [53.2, 15917.0], [53.3, 15917.0], [53.4, 15917.0], [53.5, 15946.0], [53.6, 15946.0], [53.7, 15946.0], [53.8, 15951.0], [53.9, 15951.0], [54.0, 15953.0], [54.1, 15953.0], [54.2, 15953.0], [54.3, 15956.0], [54.4, 15956.0], [54.5, 15956.0], [54.6, 15979.0], [54.7, 15979.0], [54.8, 15979.0], [54.9, 16011.0], [55.0, 16011.0], [55.1, 16011.0], [55.2, 16048.0], [55.3, 16048.0], [55.4, 16048.0], [55.5, 16051.0], [55.6, 16051.0], [55.7, 16051.0], [55.8, 16064.0], [55.9, 16064.0], [56.0, 16086.0], [56.1, 16086.0], [56.2, 16086.0], [56.3, 16088.0], [56.4, 16088.0], [56.5, 16088.0], [56.6, 16118.0], [56.7, 16118.0], [56.8, 16118.0], [56.9, 16134.0], [57.0, 16134.0], [57.1, 16134.0], [57.2, 16182.0], [57.3, 16182.0], [57.4, 16182.0], [57.5, 16189.0], [57.6, 16189.0], [57.7, 16189.0], [57.8, 16191.0], [57.9, 16191.0], [58.0, 16207.0], [58.1, 16207.0], [58.2, 16207.0], [58.3, 16212.0], [58.4, 16212.0], [58.5, 16212.0], [58.6, 16215.0], [58.7, 16215.0], [58.8, 16215.0], [58.9, 16241.0], [59.0, 16241.0], [59.1, 16241.0], [59.2, 16267.0], [59.3, 16267.0], [59.4, 16267.0], [59.5, 16269.0], [59.6, 16269.0], [59.7, 16269.0], [59.8, 16288.0], [59.9, 16288.0], [60.0, 16296.0], [60.1, 16296.0], [60.2, 16296.0], [60.3, 16320.0], [60.4, 16320.0], [60.5, 16320.0], [60.6, 16334.0], [60.7, 16334.0], [60.8, 16334.0], [60.9, 16382.0], [61.0, 16382.0], [61.1, 16382.0], [61.2, 16382.0], [61.3, 16382.0], [61.4, 16382.0], [61.5, 16384.0], [61.6, 16384.0], [61.7, 16384.0], [61.8, 16392.0], [61.9, 16392.0], [62.0, 16401.0], [62.1, 16401.0], [62.2, 16401.0], [62.3, 16411.0], [62.4, 16411.0], [62.5, 16411.0], [62.6, 16415.0], [62.7, 16415.0], [62.8, 16415.0], [62.9, 16427.0], [63.0, 16427.0], [63.1, 16427.0], [63.2, 16455.0], [63.3, 16455.0], [63.4, 16455.0], [63.5, 16462.0], [63.6, 16462.0], [63.7, 16462.0], [63.8, 16464.0], [63.9, 16464.0], [64.0, 16496.0], [64.1, 16496.0], [64.2, 16496.0], [64.3, 16523.0], [64.4, 16523.0], [64.5, 16523.0], [64.6, 16535.0], [64.7, 16535.0], [64.8, 16535.0], [64.9, 16537.0], [65.0, 16537.0], [65.1, 16537.0], [65.2, 16537.0], [65.3, 16537.0], [65.4, 16537.0], [65.5, 16552.0], [65.6, 16552.0], [65.7, 16552.0], [65.8, 16584.0], [65.9, 16584.0], [66.0, 16609.0], [66.1, 16609.0], [66.2, 16609.0], [66.3, 16615.0], [66.4, 16615.0], [66.5, 16615.0], [66.6, 16667.0], [66.7, 16667.0], [66.8, 16667.0], [66.9, 16668.0], [67.0, 16668.0], [67.1, 16668.0], [67.2, 16709.0], [67.3, 16709.0], [67.4, 16709.0], [67.5, 16716.0], [67.6, 16716.0], [67.7, 16716.0], [67.8, 16717.0], [67.9, 16717.0], [68.0, 16727.0], [68.1, 16727.0], [68.2, 16727.0], [68.3, 16746.0], [68.4, 16746.0], [68.5, 16746.0], [68.6, 16754.0], [68.7, 16754.0], [68.8, 16754.0], [68.9, 16754.0], [69.0, 16754.0], [69.1, 16754.0], [69.2, 16765.0], [69.3, 16765.0], [69.4, 16765.0], [69.5, 16771.0], [69.6, 16771.0], [69.7, 16771.0], [69.8, 16772.0], [69.9, 16772.0], [70.0, 16794.0], [70.1, 16794.0], [70.2, 16794.0], [70.3, 16795.0], [70.4, 16795.0], [70.5, 16795.0], [70.6, 16808.0], [70.7, 16808.0], [70.8, 16808.0], [70.9, 16818.0], [71.0, 16818.0], [71.1, 16818.0], [71.2, 16824.0], [71.3, 16824.0], [71.4, 16824.0], [71.5, 16828.0], [71.6, 16828.0], [71.7, 16828.0], [71.8, 16839.0], [71.9, 16839.0], [72.0, 16849.0], [72.1, 16849.0], [72.2, 16849.0], [72.3, 16860.0], [72.4, 16860.0], [72.5, 16860.0], [72.6, 16864.0], [72.7, 16864.0], [72.8, 16864.0], [72.9, 16893.0], [73.0, 16893.0], [73.1, 16893.0], [73.2, 16895.0], [73.3, 16895.0], [73.4, 16895.0], [73.5, 16906.0], [73.6, 16906.0], [73.7, 16906.0], [73.8, 16910.0], [73.9, 16910.0], [74.0, 16910.0], [74.1, 16918.0], [74.2, 16918.0], [74.3, 16922.0], [74.4, 16922.0], [74.5, 16922.0], [74.6, 16948.0], [74.7, 16948.0], [74.8, 16948.0], [74.9, 16981.0], [75.0, 16981.0], [75.1, 16981.0], [75.2, 16992.0], [75.3, 16992.0], [75.4, 16992.0], [75.5, 17008.0], [75.6, 17008.0], [75.7, 17008.0], [75.8, 17008.0], [75.9, 17008.0], [76.0, 17008.0], [76.1, 17027.0], [76.2, 17027.0], [76.3, 17028.0], [76.4, 17028.0], [76.5, 17028.0], [76.6, 17041.0], [76.7, 17041.0], [76.8, 17041.0], [76.9, 17067.0], [77.0, 17067.0], [77.1, 17067.0], [77.2, 17069.0], [77.3, 17069.0], [77.4, 17069.0], [77.5, 17069.0], [77.6, 17069.0], [77.7, 17069.0], [77.8, 17088.0], [77.9, 17088.0], [78.0, 17088.0], [78.1, 17115.0], [78.2, 17115.0], [78.3, 17144.0], [78.4, 17144.0], [78.5, 17144.0], [78.6, 17145.0], [78.7, 17145.0], [78.8, 17145.0], [78.9, 17164.0], [79.0, 17164.0], [79.1, 17164.0], [79.2, 17165.0], [79.3, 17165.0], [79.4, 17165.0], [79.5, 17182.0], [79.6, 17182.0], [79.7, 17182.0], [79.8, 17182.0], [79.9, 17182.0], [80.0, 17182.0], [80.1, 17191.0], [80.2, 17191.0], [80.3, 17206.0], [80.4, 17206.0], [80.5, 17206.0], [80.6, 17218.0], [80.7, 17218.0], [80.8, 17218.0], [80.9, 17221.0], [81.0, 17221.0], [81.1, 17221.0], [81.2, 17285.0], [81.3, 17285.0], [81.4, 17285.0], [81.5, 17289.0], [81.6, 17289.0], [81.7, 17289.0], [81.8, 17302.0], [81.9, 17302.0], [82.0, 17302.0], [82.1, 17307.0], [82.2, 17307.0], [82.3, 17318.0], [82.4, 17318.0], [82.5, 17318.0], [82.6, 17328.0], [82.7, 17328.0], [82.8, 17328.0], [82.9, 17328.0], [83.0, 17328.0], [83.1, 17328.0], [83.2, 17331.0], [83.3, 17331.0], [83.4, 17331.0], [83.5, 17374.0], [83.6, 17374.0], [83.7, 17374.0], [83.8, 17386.0], [83.9, 17386.0], [84.0, 17386.0], [84.1, 17399.0], [84.2, 17399.0], [84.3, 17402.0], [84.4, 17402.0], [84.5, 17402.0], [84.6, 17430.0], [84.7, 17430.0], [84.8, 17430.0], [84.9, 17437.0], [85.0, 17437.0], [85.1, 17437.0], [85.2, 17440.0], [85.3, 17440.0], [85.4, 17440.0], [85.5, 17456.0], [85.6, 17456.0], [85.7, 17456.0], [85.8, 17498.0], [85.9, 17498.0], [86.0, 17498.0], [86.1, 17519.0], [86.2, 17519.0], [86.3, 17520.0], [86.4, 17520.0], [86.5, 17520.0], [86.6, 17531.0], [86.7, 17531.0], [86.8, 17531.0], [86.9, 17581.0], [87.0, 17581.0], [87.1, 17581.0], [87.2, 17665.0], [87.3, 17665.0], [87.4, 17665.0], [87.5, 17738.0], [87.6, 17738.0], [87.7, 17738.0], [87.8, 17803.0], [87.9, 17803.0], [88.0, 17803.0], [88.1, 17811.0], [88.2, 17811.0], [88.3, 17817.0], [88.4, 17817.0], [88.5, 17817.0], [88.6, 17940.0], [88.7, 17940.0], [88.8, 17940.0], [88.9, 17950.0], [89.0, 17950.0], [89.1, 17950.0], [89.2, 18007.0], [89.3, 18007.0], [89.4, 18007.0], [89.5, 18011.0], [89.6, 18011.0], [89.7, 18011.0], [89.8, 18021.0], [89.9, 18021.0], [90.0, 18021.0], [90.1, 18130.0], [90.2, 18130.0], [90.3, 18165.0], [90.4, 18165.0], [90.5, 18165.0], [90.6, 18171.0], [90.7, 18171.0], [90.8, 18171.0], [90.9, 18198.0], [91.0, 18198.0], [91.1, 18198.0], [91.2, 18203.0], [91.3, 18203.0], [91.4, 18203.0], [91.5, 18217.0], [91.6, 18217.0], [91.7, 18217.0], [91.8, 18237.0], [91.9, 18237.0], [92.0, 18237.0], [92.1, 18318.0], [92.2, 18318.0], [92.3, 18438.0], [92.4, 18438.0], [92.5, 18438.0], [92.6, 18453.0], [92.7, 18453.0], [92.8, 18453.0], [92.9, 18512.0], [93.0, 18512.0], [93.1, 18512.0], [93.2, 18636.0], [93.3, 18636.0], [93.4, 18636.0], [93.5, 18670.0], [93.6, 18670.0], [93.7, 18670.0], [93.8, 18800.0], [93.9, 18800.0], [94.0, 18800.0], [94.1, 18859.0], [94.2, 18859.0], [94.3, 18909.0], [94.4, 18909.0], [94.5, 18909.0], [94.6, 19011.0], [94.7, 19011.0], [94.8, 19011.0], [94.9, 19067.0], [95.0, 19067.0], [95.1, 19067.0], [95.2, 19128.0], [95.3, 19128.0], [95.4, 19128.0], [95.5, 19360.0], [95.6, 19360.0], [95.7, 19360.0], [95.8, 19400.0], [95.9, 19400.0], [96.0, 19400.0], [96.1, 19420.0], [96.2, 19420.0], [96.3, 19422.0], [96.4, 19422.0], [96.5, 19422.0], [96.6, 19674.0], [96.7, 19674.0], [96.8, 19674.0], [96.9, 19889.0], [97.0, 19889.0], [97.1, 19889.0], [97.2, 20121.0], [97.3, 20121.0], [97.4, 20121.0], [97.5, 20292.0], [97.6, 20292.0], [97.7, 20292.0], [97.8, 20294.0], [97.9, 20294.0], [98.0, 20294.0], [98.1, 20594.0], [98.2, 20594.0], [98.3, 21567.0], [98.4, 21567.0], [98.5, 21567.0], [98.6, 22296.0], [98.7, 22296.0], [98.8, 22296.0], [98.9, 22306.0], [99.0, 22306.0], [99.1, 22306.0], [99.2, 22309.0], [99.3, 22309.0], [99.4, 22309.0], [99.5, 24480.0], [99.6, 24480.0], [99.7, 24480.0], [99.8, 25780.0], [99.9, 25780.0], [100.0, 25780.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 6900.0, "maxY": 12.0, "series": [{"data": [[6900.0, 2.0], [7000.0, 3.0], [7100.0, 2.0], [7300.0, 5.0], [7500.0, 1.0], [7700.0, 1.0], [7800.0, 1.0], [8000.0, 2.0], [8100.0, 2.0], [8300.0, 2.0], [8200.0, 3.0], [8500.0, 1.0], [8400.0, 1.0], [8700.0, 5.0], [8600.0, 2.0], [8800.0, 2.0], [9300.0, 1.0], [9800.0, 1.0], [9900.0, 1.0], [10000.0, 5.0], [10100.0, 1.0], [10200.0, 2.0], [10400.0, 1.0], [11300.0, 1.0], [11500.0, 1.0], [11600.0, 1.0], [11700.0, 4.0], [11800.0, 2.0], [12000.0, 3.0], [12100.0, 1.0], [12600.0, 3.0], [12700.0, 2.0], [12400.0, 1.0], [12800.0, 4.0], [13000.0, 3.0], [13200.0, 4.0], [13300.0, 2.0], [12900.0, 3.0], [13100.0, 1.0], [13500.0, 5.0], [13400.0, 4.0], [13800.0, 5.0], [13700.0, 6.0], [13600.0, 1.0], [14000.0, 1.0], [14300.0, 4.0], [13900.0, 2.0], [14100.0, 2.0], [14400.0, 5.0], [14500.0, 3.0], [14800.0, 3.0], [14700.0, 4.0], [14600.0, 1.0], [15100.0, 7.0], [15000.0, 2.0], [14900.0, 2.0], [15300.0, 9.0], [15200.0, 6.0], [15500.0, 6.0], [15800.0, 3.0], [15400.0, 7.0], [15700.0, 3.0], [15600.0, 8.0], [15900.0, 10.0], [16200.0, 8.0], [16300.0, 6.0], [16000.0, 6.0], [16100.0, 5.0], [17300.0, 9.0], [17100.0, 8.0], [17200.0, 5.0], [16500.0, 6.0], [16600.0, 4.0], [17400.0, 6.0], [16400.0, 8.0], [17000.0, 9.0], [16800.0, 10.0], [16700.0, 12.0], [16900.0, 7.0], [17500.0, 4.0], [17800.0, 3.0], [17700.0, 1.0], [18100.0, 4.0], [18300.0, 1.0], [18200.0, 3.0], [17600.0, 1.0], [18000.0, 3.0], [18400.0, 2.0], [17900.0, 2.0], [19000.0, 2.0], [19100.0, 1.0], [18900.0, 1.0], [19300.0, 1.0], [18600.0, 2.0], [19400.0, 3.0], [18800.0, 2.0], [18500.0, 1.0], [20200.0, 2.0], [19600.0, 1.0], [19800.0, 1.0], [20100.0, 1.0], [20500.0, 1.0], [21500.0, 1.0], [22300.0, 2.0], [22200.0, 1.0], [24400.0, 1.0], [25700.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 25700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 6.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 344.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 344.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 6.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 57.01554404145077, "minX": 1.69497624E12, "maxY": 70.0, "series": [{"data": [[1.6949763E12, 57.01554404145077], [1.69497624E12, 70.0]], "isOverall": false, "label": "ThreadShohoz", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6949763E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 10217.0, "minX": 1.0, "maxY": 22309.0, "series": [{"data": [[2.0, 14987.0], [3.0, 22296.0], [4.0, 21567.0], [5.0, 16207.0], [6.0, 22309.0], [7.0, 15273.0], [8.0, 18512.0], [9.0, 16382.0], [10.0, 15058.0], [11.0, 16537.0], [12.0, 16609.0], [13.0, 18237.0], [14.0, 16241.0], [15.0, 16794.0], [16.0, 20121.0], [17.0, 17067.0], [18.0, 16910.0], [19.0, 16717.0], [20.0, 16948.0], [21.0, 17519.0], [22.0, 19420.0], [23.0, 16334.0], [24.0, 16584.0], [25.0, 19067.0], [26.0, 17430.0], [27.0, 17069.0], [28.0, 18859.0], [29.0, 18800.0], [30.0, 16808.0], [31.0, 16392.0], [33.0, 16893.0], [32.0, 16709.0], [35.0, 16496.0], [34.0, 10217.0], [37.0, 17028.0], [36.0, 17950.0], [39.0, 16895.0], [38.0, 16765.0], [41.0, 16981.0], [40.0, 16754.0], [43.0, 17027.0], [42.0, 17307.0], [45.0, 10217.0], [44.0, 17665.0], [47.0, 15880.0], [46.0, 19422.0], [49.0, 20863.0], [48.0, 16051.0], [51.0, 19400.0], [50.0, 16535.0], [53.0, 15662.0], [52.0, 17041.0], [55.0, 16523.0], [54.0, 17940.0], [57.0, 17088.0], [56.0, 19889.0], [59.0, 16296.0], [58.0, 16615.0], [61.0, 17145.0], [60.0, 16215.0], [63.0, 15901.0], [62.0, 16578.5], [67.0, 17562.076923076922], [66.0, 15347.0], [65.0, 16864.5], [64.0, 17146.0], [70.0, 14149.330708661422], [69.0, 16260.625000000002], [68.0, 16380.6], [1.0, 22306.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[62.839999999999975, 14978.122857142867]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 70.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 303.53333333333336, "minX": 1.69497624E12, "maxY": 230043.48333333334, "series": [{"data": [[1.6949763E12, 230043.48333333334], [1.69497624E12, 193113.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6949763E12, 373.1333333333333], [1.69497624E12, 303.53333333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6949763E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 12557.611464968157, "minX": 1.69497624E12, "maxY": 16947.139896373057, "series": [{"data": [[1.6949763E12, 16947.139896373057], [1.69497624E12, 12557.611464968157]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6949763E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 12169.433121019114, "minX": 1.69497624E12, "maxY": 16549.316062176164, "series": [{"data": [[1.6949763E12, 16549.316062176164], [1.69497624E12, 12169.433121019114]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6949763E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 21.341968911917096, "minX": 1.69497624E12, "maxY": 73.44585987261145, "series": [{"data": [[1.6949763E12, 21.341968911917096], [1.69497624E12, 73.44585987261145]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6949763E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 6961.0, "minX": 1.69497624E12, "maxY": 25780.0, "series": [{"data": [[1.6949763E12, 25780.0], [1.69497624E12, 17164.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6949763E12, 14987.0], [1.69497624E12, 6961.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6949763E12, 19022.2], [1.69497624E12, 15723.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6949763E12, 24636.000000000007], [1.69497624E12, 16711.59999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6949763E12, 16893.0], [1.69497624E12, 13442.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.6949763E12, 20223.6], [1.69497624E12, 16138.8]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6949763E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 7121.0, "minX": 1.0, "maxY": 16566.0, "series": [{"data": [[1.0, 15880.0], [2.0, 16537.0], [4.0, 16387.0], [8.0, 16422.0], [9.0, 11791.0], [5.0, 15917.0], [11.0, 7121.0], [3.0, 16110.0], [6.0, 16566.0], [7.0, 13801.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 10072.5], [8.0, 10071.0], [2.0, 10217.0], [3.0, 10217.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 6772.0, "minX": 1.0, "maxY": 16191.0, "series": [{"data": [[1.0, 15502.0], [2.0, 16191.0], [4.0, 15966.0], [8.0, 16036.5], [9.0, 11448.0], [5.0, 15509.0], [11.0, 6772.0], [3.0, 15685.0], [6.0, 16157.0], [7.0, 13391.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 10072.5], [8.0, 10071.0], [2.0, 10217.0], [3.0, 10217.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.05, "minX": 1.69497624E12, "maxY": 3.783333333333333, "series": [{"data": [[1.6949763E12, 2.05], [1.69497624E12, 3.783333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6949763E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.69497624E12, "maxY": 3.1166666666666667, "series": [{"data": [[1.6949763E12, 3.1166666666666667], [1.69497624E12, 2.6166666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6949763E12, 0.1]], "isOverall": false, "label": "504", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6949763E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.69497624E12, "maxY": 3.1166666666666667, "series": [{"data": [[1.6949763E12, 3.1166666666666667], [1.69497624E12, 2.6166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6949763E12, 0.1]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6949763E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.69497624E12, "maxY": 3.1166666666666667, "series": [{"data": [[1.6949763E12, 3.1166666666666667], [1.69497624E12, 2.6166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6949763E12, 0.1]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6949763E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

