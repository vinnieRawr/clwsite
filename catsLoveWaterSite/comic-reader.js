(function(){
    const CHAPTERS = [
        {
            id: 'ch1',
            title: 'Chapter 1',
            ongoing: '',
            cover: 'assets/imgs/comic/covers/clw1.webp',
            pages: [
                'assets/imgs/comic/covers/clw1.webp',
                'assets/imgs/comic/chap1/101.webp',
                'assets/imgs/comic/chap1/102.webp',
                'assets/imgs/comic/chap1/103.webp',
                'assets/imgs/comic/chap1/104.webp',
                'assets/imgs/comic/chap1/105.webp',
                'assets/imgs/comic/chap1/106.webp',
                'assets/imgs/comic/chap1/107.webp',
                'assets/imgs/comic/chap1/108.webp',
                'assets/imgs/comic/chap1/109.webp',
                'assets/imgs/comic/chap1/110.webp',
                'assets/imgs/comic/chap1/111.webp',
                'assets/imgs/comic/chap1/112.webp',
                'assets/imgs/comic/chap1/113.webp',
                'assets/imgs/comic/chap1/114.webp',
                'assets/imgs/comic/chap1/115.webp',
                'assets/imgs/comic/chap1/116.webp',
                'assets/imgs/comic/chap1/117.webp',
                'assets/imgs/comic/chap1/118.webp',
                'assets/imgs/comic/chap1/119.webp',
                'assets/imgs/comic/chap1/120.webp',
                'assets/imgs/comic/chap1/121.webp',
                'assets/imgs/comic/chap1/122.webp',
                'assets/imgs/comic/chap1/123.webp',
                'assets/imgs/comic/chap1/124.webp',
                'assets/imgs/comic/chap1/125.webp',
                'assets/imgs/comic/chap1/126.webp',
                'assets/imgs/comic/chap1/127.webp',
                'assets/imgs/comic/chap1/128.webp',
                'assets/imgs/comic/chap1/129.webp',
                'assets/imgs/comic/chap1/130.webp',
                'assets/imgs/comic/chap1/131.webp'

            ]
        },
        {
            id: 'ch2',
            title: 'Chapter 2',
            ongoing: '',
            cover: 'assets/imgs/comic/covers/clw2.webp',
            pages: [
                'assets/imgs/comic/covers/clw2.webp',
                'assets/imgs/comic/chap2/201.webp',
                'assets/imgs/comic/chap2/202.webp',
                'assets/imgs/comic/chap2/203.webp',
                'assets/imgs/comic/chap2/204.webp',
                'assets/imgs/comic/chap2/205.webp',
                'assets/imgs/comic/chap2/206.webp',
                'assets/imgs/comic/chap2/207.webp',
                'assets/imgs/comic/chap2/208.webp',
                'assets/imgs/comic/chap2/209.webp',
                'assets/imgs/comic/chap2/210.webp',
                'assets/imgs/comic/chap2/211.webp',
                'assets/imgs/comic/chap2/212.webp',
                'assets/imgs/comic/chap2/213.webp',
                'assets/imgs/comic/chap2/214.webp',
                'assets/imgs/comic/chap2/215.webp',
                'assets/imgs/comic/chap2/216.webp',
                'assets/imgs/comic/chap2/217.webp',
                'assets/imgs/comic/chap2/218.webp',
                'assets/imgs/comic/chap2/219.webp',
                'assets/imgs/comic/chap2/220.webp',
                'assets/imgs/comic/chap2/221.webp',
                'assets/imgs/comic/chap2/222.webp',
                'assets/imgs/comic/chap2/223.webp',
                'assets/imgs/comic/chap2/224.webp',
                'assets/imgs/comic/chap2/225.webp',
                'assets/imgs/comic/chap2/226.webp',
                'assets/imgs/comic/chap2/227.webp',
                'assets/imgs/comic/chap2/228.webp',
                'assets/imgs/comic/chap2/229.webp',
                'assets/imgs/comic/chap2/230.webp',
                'assets/imgs/comic/chap2/231.webp',
                'assets/imgs/comic/chap2/232.webp',
                'assets/imgs/comic/chap2/233.webp',
                'assets/imgs/comic/chap2/234.webp',
                'assets/imgs/comic/chap2/235.webp',
                'assets/imgs/comic/chap2/236.webp',
                'assets/imgs/comic/chap2/237.webp',
                'assets/imgs/comic/chap2/238.webp',
                'assets/imgs/comic/chap2/239.webp',
                'assets/imgs/comic/chap2/240.webp',
                'assets/imgs/comic/chap2/241.webp',
                'assets/imgs/comic/chap2/242.webp',
                'assets/imgs/comic/chap2/243.webp',
                'assets/imgs/comic/chap2/244.webp',
                'assets/imgs/comic/chap2/245.webp',
                'assets/imgs/comic/chap2/246.webp'
            ]
        },
        {
            id: 'ch3',
            title: 'Chapter 3',
            ongoing: '',
            cover: 'assets/imgs/comic/covers/clw3.webp',
            pages: [
                'assets/imgs/comic/covers/clw3.webp',
                'assets/imgs/comic/chap3/301.webp',
                'assets/imgs/comic/chap3/302.webp',
                'assets/imgs/comic/chap3/303.webp',
                'assets/imgs/comic/chap3/304.webp',
                'assets/imgs/comic/chap3/305.webp',
                'assets/imgs/comic/chap3/306.webp',
                'assets/imgs/comic/chap3/307.webp',
                'assets/imgs/comic/chap3/308.webp',
                'assets/imgs/comic/chap3/309.webp',
                'assets/imgs/comic/chap3/310.webp',
                'assets/imgs/comic/chap3/311.webp',
                'assets/imgs/comic/chap3/312.webp',
                'assets/imgs/comic/chap3/313.webp',
                'assets/imgs/comic/chap3/314.webp',
                'assets/imgs/comic/chap3/315.webp',
                'assets/imgs/comic/chap3/316.webp',
                'assets/imgs/comic/chap3/317.webp',
                'assets/imgs/comic/chap3/318.webp',
                'assets/imgs/comic/chap3/319.webp',
                'assets/imgs/comic/chap3/320.webp',
                'assets/imgs/comic/chap3/321.webp',
                'assets/imgs/comic/chap3/322.webp',
                'assets/imgs/comic/chap3/323.webp',
                'assets/imgs/comic/chap3/324.webp',
                'assets/imgs/comic/chap3/325.webp',
                'assets/imgs/comic/chap3/326.webp',
                'assets/imgs/comic/chap3/327.webp',
                'assets/imgs/comic/chap3/328.webp',
                'assets/imgs/comic/chap3/329.webp',
                'assets/imgs/comic/chap3/330.webp',
                'assets/imgs/comic/chap3/331.webp',
                'assets/imgs/comic/chap3/332.webp',
                'assets/imgs/comic/chap3/333.webp',
                'assets/imgs/comic/chap3/334.webp',
                'assets/imgs/comic/chap3/335.webp',
                'assets/imgs/comic/chap3/336.webp',
                'assets/imgs/comic/chap3/337.webp',
                'assets/imgs/comic/chap3/338.webp',
                'assets/imgs/comic/chap3/339.webp',
                'assets/imgs/comic/chap3/340.webp',
                'assets/imgs/comic/chap3/341.webp',
                'assets/imgs/comic/chap3/342.webp',
                'assets/imgs/comic/chap3/343.webp',
                'assets/imgs/comic/chap3/344.webp',
                'assets/imgs/comic/chap3/345.webp',
                'assets/imgs/comic/chap3/346.webp',
                'assets/imgs/comic/chap3/347.webp',
                'assets/imgs/comic/chap3/348.webp',
                'assets/imgs/comic/chap3/349.webp',
                'assets/imgs/comic/chap3/350.webp',
                'assets/imgs/comic/chap3/351.webp',
            ]
        },

        {
            id: 'ch4',
            title: 'Chapter 4',
            ongoing: '',
            cover: 'assets/imgs/comic/covers/clw4.webp',
            pages: [
                'assets/imgs/comic/covers/clw4.webp',
                'assets/imgs/comic/chap4/401.webp',
                'assets/imgs/comic/chap4/402.webp',
                'assets/imgs/comic/chap4/403.webp',
                'assets/imgs/comic/chap4/404.webp',
                'assets/imgs/comic/chap4/405.webp',
                'assets/imgs/comic/chap4/406.webp',
                'assets/imgs/comic/chap4/407.webp',
                'assets/imgs/comic/chap4/408.webp',
                'assets/imgs/comic/chap4/409.webp',
                'assets/imgs/comic/chap4/410.webp',
                'assets/imgs/comic/chap4/411.webp',
                'assets/imgs/comic/chap4/412.webp',
                'assets/imgs/comic/chap4/413.webp',
                'assets/imgs/comic/chap4/414.webp',
                'assets/imgs/comic/chap4/415.webp',
                'assets/imgs/comic/chap4/416.webp',
                'assets/imgs/comic/chap4/417.webp',
                'assets/imgs/comic/chap4/418.webp',
                'assets/imgs/comic/chap4/419.webp',
                'assets/imgs/comic/chap4/420.webp',
                'assets/imgs/comic/chap4/421.webp',
                'assets/imgs/comic/chap4/422.webp',
                'assets/imgs/comic/chap4/423.webp',
                'assets/imgs/comic/chap4/424.webp',
                'assets/imgs/comic/chap4/425.webp',
                'assets/imgs/comic/chap4/426.webp',
                'assets/imgs/comic/chap4/427.webp',
                'assets/imgs/comic/chap4/428.webp',
                'assets/imgs/comic/chap4/429.webp',
                'assets/imgs/comic/chap4/430.webp',
                'assets/imgs/comic/chap4/431.webp',
                'assets/imgs/comic/chap4/432.webp',
                'assets/imgs/comic/chap4/433.webp',
                'assets/imgs/comic/chap4/434.webp',
                'assets/imgs/comic/chap4/435.webp',
                'assets/imgs/comic/chap4/436.webp',
                'assets/imgs/comic/chap4/437.webp',
                'assets/imgs/comic/chap4/438.webp',
                'assets/imgs/comic/chap4/439.webp',
                'assets/imgs/comic/chap4/440.webp',
                'assets/imgs/comic/chap4/441.webp',
                'assets/imgs/comic/chap4/442.webp',
                'assets/imgs/comic/chap4/443.webp',
                'assets/imgs/comic/chap4/444.webp',
                'assets/imgs/comic/chap4/445.webp',
                'assets/imgs/comic/chap4/446.webp',
                'assets/imgs/comic/chap4/447.webp',
                'assets/imgs/comic/chap4/448.webp',
                'assets/imgs/comic/chap4/449.webp',
                'assets/imgs/comic/chap4/450.webp',
                'assets/imgs/comic/chap4/451.webp'
            ]
        },
        {
            id: 'ch5',
            title: 'Chapter 5',
            ongoing: '',
            cover: 'assets/imgs/comic/covers/clw5.webp',
            pages: [
                'assets/imgs/comic/covers/clw5.webp',
                'assets/imgs/comic/chap5/501.webp',
                'assets/imgs/comic/chap5/502.webp',
                'assets/imgs/comic/chap5/503.webp',
                'assets/imgs/comic/chap5/504.webp',
                'assets/imgs/comic/chap5/505.webp',
                'assets/imgs/comic/chap5/506.webp',
                'assets/imgs/comic/chap5/507.webp',
                'assets/imgs/comic/chap5/508.webp',
                'assets/imgs/comic/chap5/509.webp',
                'assets/imgs/comic/chap5/510.webp',
                'assets/imgs/comic/chap5/511.webp',
                'assets/imgs/comic/chap5/512.webp',
                'assets/imgs/comic/chap5/513.webp',
                'assets/imgs/comic/chap5/514.webp',
                'assets/imgs/comic/chap5/515.webp',
                'assets/imgs/comic/chap5/516.webp',
                'assets/imgs/comic/chap5/517.webp',
                'assets/imgs/comic/chap5/518.webp',
                'assets/imgs/comic/chap5/519.webp',
                'assets/imgs/comic/chap5/520.webp',
                'assets/imgs/comic/chap5/521.webp',
                'assets/imgs/comic/chap5/522.webp',
                'assets/imgs/comic/chap5/523.webp',
                'assets/imgs/comic/chap5/524.webp',
                'assets/imgs/comic/chap5/525.webp',
                'assets/imgs/comic/chap5/526.webp',
                'assets/imgs/comic/chap5/527.webp',
                'assets/imgs/comic/chap5/528.webp',
                'assets/imgs/comic/chap5/529.webp',
                'assets/imgs/comic/chap5/530.webp',
                'assets/imgs/comic/chap5/531.webp',
                'assets/imgs/comic/chap5/532.webp',
                'assets/imgs/comic/chap5/533.webp',
                'assets/imgs/comic/chap5/534.webp',
                'assets/imgs/comic/chap5/535.webp',
                'assets/imgs/comic/chap5/536.webp',
                'assets/imgs/comic/chap5/537.webp',
                'assets/imgs/comic/chap5/538.webp',
                'assets/imgs/comic/chap5/539.webp',
                'assets/imgs/comic/chap5/540.webp',
                'assets/imgs/comic/chap5/541.webp',
                'assets/imgs/comic/chap5/542.webp',
                'assets/imgs/comic/chap5/543.webp',
                'assets/imgs/comic/chap5/544.webp',
                'assets/imgs/comic/chap5/545.webp',
                'assets/imgs/comic/chap5/546.webp',
                'assets/imgs/comic/chap5/547.webp',
                'assets/imgs/comic/chap5/548.webp',
                'assets/imgs/comic/chap5/549.webp',
                'assets/imgs/comic/chap5/550.webp',
                'assets/imgs/comic/chap5/551.webp',
                'assets/imgs/comic/chap5/552.webp',
                'assets/imgs/comic/chap5/553.webp',
                'assets/imgs/comic/chap5/554.webp'
            ]
        },
        {
            id: 'ch6',
            title: 'Chapter 6',
            ongoing: '',
            cover: 'assets/imgs/comic/covers/clw6.webp',
            pages: [
                'assets/imgs/comic/covers/clw6.webp',
                'assets/imgs/comic/chap6/601.webp',
                'assets/imgs/comic/chap6/602.webp',
                'assets/imgs/comic/chap6/603.webp',
                'assets/imgs/comic/chap6/604.webp',
                'assets/imgs/comic/chap6/605.webp',
                'assets/imgs/comic/chap6/606.webp',
                'assets/imgs/comic/chap6/607.webp',
                'assets/imgs/comic/chap6/608.webp',
                'assets/imgs/comic/chap6/609.webp',
                'assets/imgs/comic/chap6/610.webp',
                'assets/imgs/comic/chap6/611.webp',
                'assets/imgs/comic/chap6/612.webp',
                'assets/imgs/comic/chap6/613.webp',
                'assets/imgs/comic/chap6/614.webp',
                'assets/imgs/comic/chap6/615.webp',
                'assets/imgs/comic/chap6/616.webp',
                'assets/imgs/comic/chap6/617.webp',
                'assets/imgs/comic/chap6/618.webp',
                'assets/imgs/comic/chap6/619.webp',
                'assets/imgs/comic/chap6/620.webp',
                'assets/imgs/comic/chap6/621.webp',
                'assets/imgs/comic/chap6/622.webp',
                'assets/imgs/comic/chap6/623.webp',
                'assets/imgs/comic/chap6/624.webp',
                'assets/imgs/comic/chap6/625.webp',
                'assets/imgs/comic/chap6/626.webp',
                'assets/imgs/comic/chap6/627.webp',
                'assets/imgs/comic/chap6/628.webp',
                'assets/imgs/comic/chap6/629.webp',
                'assets/imgs/comic/chap6/630.webp',
                'assets/imgs/comic/chap6/631.webp',
                'assets/imgs/comic/chap6/632.webp',
                'assets/imgs/comic/chap6/633.webp',
                'assets/imgs/comic/chap6/634.webp',
                'assets/imgs/comic/chap6/635.webp',
                'assets/imgs/comic/chap6/636.webp',
                'assets/imgs/comic/chap6/637.webp',
                'assets/imgs/comic/chap6/638.webp',
                'assets/imgs/comic/chap6/639.webp',
                'assets/imgs/comic/chap6/640.webp',
                'assets/imgs/comic/chap6/641.webp',
                'assets/imgs/comic/chap6/642.webp',
                'assets/imgs/comic/chap6/643.webp',
                'assets/imgs/comic/chap6/644.webp'
            ]
        },
        {
            id: 'ch7',
            title: 'Chapter 7',
            ongoing: '',
            cover: 'assets/imgs/comic/covers/clw7.webp',
            pages: [
                'assets/imgs/comic/covers/clw7.webp',
                'assets/imgs/comic/chap7/701.webp',
                'assets/imgs/comic/chap7/702.webp',
                'assets/imgs/comic/chap7/703.webp',
                'assets/imgs/comic/chap7/704.webp',
                'assets/imgs/comic/chap7/705.webp',
                'assets/imgs/comic/chap7/706.webp',
                'assets/imgs/comic/chap7/707.webp',
                'assets/imgs/comic/chap7/708.webp',
                'assets/imgs/comic/chap7/709.webp',
                'assets/imgs/comic/chap7/710.webp',
                'assets/imgs/comic/chap7/711.webp',
                'assets/imgs/comic/chap7/712.webp',
                'assets/imgs/comic/chap7/713.webp',
                'assets/imgs/comic/chap7/714.webp',
                'assets/imgs/comic/chap7/715.webp',
                'assets/imgs/comic/chap7/716.webp',
                'assets/imgs/comic/chap7/717.webp',
                'assets/imgs/comic/chap7/718.webp',
                'assets/imgs/comic/chap7/719.webp',
                'assets/imgs/comic/chap7/720.webp',
                'assets/imgs/comic/chap7/721.webp',
                'assets/imgs/comic/chap7/722.webp',
                'assets/imgs/comic/chap7/723.webp',
                'assets/imgs/comic/chap7/724.webp',
                'assets/imgs/comic/chap7/725.webp',
                'assets/imgs/comic/chap7/726.webp',
                'assets/imgs/comic/chap7/727.webp',
                'assets/imgs/comic/chap7/728.webp',
                'assets/imgs/comic/chap7/729.webp',
                'assets/imgs/comic/chap7/730.webp',
                'assets/imgs/comic/chap7/731.webp',
                'assets/imgs/comic/chap7/732.webp',
                'assets/imgs/comic/chap7/733.webp',
                'assets/imgs/comic/chap7/734.webp',
                'assets/imgs/comic/chap7/735.webp',
                'assets/imgs/comic/chap7/736.webp',
                'assets/imgs/comic/chap7/737.webp',
                'assets/imgs/comic/chap7/738.webp',
                'assets/imgs/comic/chap7/739.webp',
                'assets/imgs/comic/chap7/740.webp',
                'assets/imgs/comic/chap7/741.webp',
                'assets/imgs/comic/chap7/742.webp',
                'assets/imgs/comic/chap7/743.webp',
                'assets/imgs/comic/chap7/744.webp',
                'assets/imgs/comic/chap7/745.webp',
                'assets/imgs/comic/chap7/746.webp',
                'assets/imgs/comic/chap7/747.webp',
                'assets/imgs/comic/chap7/748.webp',
                'assets/imgs/comic/chap7/749.webp',
                'assets/imgs/comic/chap7/750.webp',
                'assets/imgs/comic/chap7/751.webp',
                'assets/imgs/comic/chap7/752.webp',
                'assets/imgs/comic/chap7/753.webp',
                'assets/imgs/comic/chap7/754.webp',
                'assets/imgs/comic/chap7/755.webp',
                'assets/imgs/comic/chap7/756.webp',
                'assets/imgs/comic/chap7/757.webp',
                'assets/imgs/comic/chap7/758.webp',
                'assets/imgs/comic/chap7/759.webp',
                'assets/imgs/comic/chap7/760.webp',
                'assets/imgs/comic/chap7/761.webp'

            ]
        },
        {
            id: 'ch8',
            title: 'Chapter 8',
            ongoing: ' - ongoing',
            cover: 'assets/imgs/comic/covers/clw8.webp',
            pages: [
                'assets/imgs/comic/covers/clw8.webp',
                'assets/imgs/comic/chap8/801.webp',
                'assets/imgs/comic/chap8/802.webp',
                'assets/imgs/comic/chap8/803.webp',
                'assets/imgs/comic/chap8/804.webp',
                'assets/imgs/comic/chap8/805.webp',
                'assets/imgs/comic/chap8/806.webp',
                'assets/imgs/comic/chap8/807.webp',
                'assets/imgs/comic/chap8/808.webp',
                'assets/imgs/comic/chap8/809.webp',
                'assets/imgs/comic/chap8/810.webp',
                'assets/imgs/comic/chap8/811.webp',
                'assets/imgs/comic/chap8/812.webp',
                'assets/imgs/comic/chap8/813.webp',
                'assets/imgs/comic/chap8/814.webp',
                'assets/imgs/comic/chap8/815.webp',
                'assets/imgs/comic/chap8/816.webp',
                'assets/imgs/comic/chap8/817.webp',
                'assets/imgs/comic/chap8/818.webp',
                'assets/imgs/comic/chap8/819.webp',
            ]
        }
    ];
    const CHAPTERSESP = [
        {
            id: 'ch1esp',
            title: 'Capítulo 1',
            ongoing: '',
            cover: 'assets/imgs/comic/covers/clw1.webp',
            pages: [
                'assets/imgs/comic/covers/clw1.webp',
                'assets/imgs/comic/chap1esp/esp101.webp',
                'assets/imgs/comic/chap1esp/esp102.webp',
                'assets/imgs/comic/chap1esp/esp103.webp',
                'assets/imgs/comic/chap1esp/esp104.webp',
                'assets/imgs/comic/chap1esp/esp105.webp',
                'assets/imgs/comic/chap1esp/esp106.webp',
                'assets/imgs/comic/chap1esp/esp107.webp',
                'assets/imgs/comic/chap1esp/esp108.webp',
                'assets/imgs/comic/chap1esp/esp109.webp',
                'assets/imgs/comic/chap1esp/esp110.webp',
                'assets/imgs/comic/chap1esp/esp111.webp',
                'assets/imgs/comic/chap1esp/esp112.webp',
                'assets/imgs/comic/chap1esp/esp113.webp',
                'assets/imgs/comic/chap1esp/esp114.webp',
                'assets/imgs/comic/chap1esp/esp115.webp',
                'assets/imgs/comic/chap1esp/esp116.webp',
                'assets/imgs/comic/chap1esp/esp117.webp',
                'assets/imgs/comic/chap1esp/esp118.webp',
                'assets/imgs/comic/chap1esp/esp119.webp',
                'assets/imgs/comic/chap1esp/esp120.webp',
                'assets/imgs/comic/chap1esp/esp121.webp',
                'assets/imgs/comic/chap1esp/esp122.webp',
                'assets/imgs/comic/chap1esp/esp123.webp',
                'assets/imgs/comic/chap1esp/esp124.webp',
                'assets/imgs/comic/chap1esp/esp125.webp',
                'assets/imgs/comic/chap1esp/esp126.webp',
                'assets/imgs/comic/chap1esp/esp127.webp',
                'assets/imgs/comic/chap1esp/esp128.webp',
                'assets/imgs/comic/chap1esp/esp129.webp',
                'assets/imgs/comic/chap1esp/esp130.webp',
                'assets/imgs/comic/chap1esp/esp131.webp'

            ]
        },
        {
            id: 'ch2esp',
            title: 'Capítulo 2',
            ongoing: '',
            cover: 'assets/imgs/comic/covers/clw2.webp',
            pages: [
                'assets/imgs/comic/covers/clw2.webp',
                'assets/imgs/comic/chap2esp/esp201.webp',
                'assets/imgs/comic/chap2esp/esp202.webp',
                'assets/imgs/comic/chap2esp/esp203.webp',
                'assets/imgs/comic/chap2esp/esp204.webp',
                'assets/imgs/comic/chap2esp/esp205.webp',
                'assets/imgs/comic/chap2esp/esp206.webp',
                'assets/imgs/comic/chap2esp/esp207.webp',
                'assets/imgs/comic/chap2esp/esp208.webp',
                'assets/imgs/comic/chap2esp/esp209.webp',
                'assets/imgs/comic/chap2esp/esp210.webp',
                'assets/imgs/comic/chap2esp/esp211.webp',
                'assets/imgs/comic/chap2esp/esp212.webp',
                'assets/imgs/comic/chap2esp/esp213.webp',
                'assets/imgs/comic/chap2esp/esp214.webp',
                'assets/imgs/comic/chap2esp/esp215.webp',
                'assets/imgs/comic/chap2esp/esp216.webp',
                'assets/imgs/comic/chap2esp/esp217.webp',
                'assets/imgs/comic/chap2esp/esp218.webp',
                'assets/imgs/comic/chap2esp/esp219.webp',
                'assets/imgs/comic/chap2esp/esp220.webp',
                'assets/imgs/comic/chap2esp/esp221.webp',
                'assets/imgs/comic/chap2esp/esp222.webp',
                'assets/imgs/comic/chap2esp/esp223.webp',
                'assets/imgs/comic/chap2esp/esp224.webp',
                'assets/imgs/comic/chap2esp/esp225.webp',
                'assets/imgs/comic/chap2esp/esp226.webp',
                'assets/imgs/comic/chap2esp/esp227.webp',
                'assets/imgs/comic/chap2esp/esp228.webp',
                'assets/imgs/comic/chap2esp/esp229.webp',
                'assets/imgs/comic/chap2esp/esp230.webp',
                'assets/imgs/comic/chap2esp/esp231.webp',
                'assets/imgs/comic/chap2esp/esp232.webp'
            ]
        },
        {
            id: 'ch3esp',
            title: 'Capítulo 3',
            ongoing: ' - Próximamente',
            cover: 'assets/imgs/comic/covers/clw3soon.webp',
            pages: [
                'assets/imgs/comic/covers/clw3soon.webp',
            ]
        }
    ];
    const NABD = [
        {
            id: 'nabd',
            title: 'Not A Big Deal',
            ongoing: '',
            cover: 'assets/imgs/comic/nabd/',
            pages: [
                'assets/imgs/comic/nabd/nabd01.webp',
                'assets/imgs/comic/nabd/nabd02.webp',
                'assets/imgs/comic/nabd/nabd03.webp',
                'assets/imgs/comic/nabd/nabd04.webp',
                'assets/imgs/comic/nabd/nabd05.webp',
                'assets/imgs/comic/nabd/nabd06.webp',
                'assets/imgs/comic/nabd/nabd07.webp',
                'assets/imgs/comic/nabd/nabd08.webp',
                'assets/imgs/comic/nabd/nabd09.webp',
                'assets/imgs/comic/nabd/nabd10.webp',
                'assets/imgs/comic/nabd/nabd11.webp',
                'assets/imgs/comic/nabd/nabd12.webp',
                'assets/imgs/comic/nabd/nabd13.webp',
                'assets/imgs/comic/nabd/nabd14.webp',
                'assets/imgs/comic/nabd/nabd15.webp',
                'assets/imgs/comic/nabd/nabd16.webp',
                'assets/imgs/comic/nabd/nabd17.webp',
                'assets/imgs/comic/nabd/nabd18.webp',
                'assets/imgs/comic/nabd/nabd19.webp',
                'assets/imgs/comic/nabd/nabd20.webp',
                'assets/imgs/comic/nabd/nabd21.webp',
                'assets/imgs/comic/nabd/nabd22.webp',
                'assets/imgs/comic/nabd/nabd23.webp',
                'assets/imgs/comic/nabd/nabd24.webp',
                'assets/imgs/comic/nabd/nabd25.webp',
            ]
        },
    ];
    const grid = document.getElementById('comicGrid');
    const gridesp = document.getElementById('comicGridEsp');
    const comicModal = document.getElementById('comicModal');
    const comicImg = document.getElementById('comicImg');
    const imageWrap = document.getElementById('imageWrap');
    const chapterSelect = document.getElementById('chapterSelect');
    const chapterSelectESP = document.getElementById('chapterSelectESP');
    const thumbs = document.getElementById('thumbs');
    const pageCounter = document.getElementById('pageCounter');
    const pageProgress = document.getElementById('pageProgress');
    const downloadBtn = document.getElementById('downloadBtn');
    const zoomBtn = document.getElementById('zoomBtn');
    const fitBtn = document.getElementById('fitBtn');
    const closeBtnC = document.getElementById('closeBtn');
    const nextBtnC = document.getElementById('nextBtn');
    const prevBtnC = document.getElementById('prevBtn');
    const englang = document.getElementById('englang');
    const esplang = document.getElementById('esplang');
    const comicnav = document.getElementById('comicnav');
    const header = document.getElementById('comicheadervar');

    const pageProgressNABD = document.getElementById('pageProgressNABD');
    const pageCounterNABD = document.getElementById('pageCounterNABD');
    const downloadBtnNABD = document.getElementById('downloadNABD');
    const zoomBtnNABD = document.getElementById('zoomNABD');
    const nextBtnCNABD = document.getElementById('nextNABD');
    const prevBtnCNABD = document.getElementById('prevNABD');
    const halloweenSpecial = document.getElementById('halloween-special');

    const comicImgNABD = document.getElementById('comicImgNABD');

    const thumbsNABD = document.getElementById('thumbsNABD');

    //fullscreen
const fitBtnNABD = document.getElementById('fitNABD');
const modalNABD = document.getElementById("comicModalNABD");
const readerNABD = modalNABD.querySelector(".comic-readerNABD");
const imageWrapNABD = document.getElementById('imageWrapNABD');

const originalStyles = {
    modal: {
        display: modalNABD.style.display,
        position: modalNABD.style.position,
        inset: modalNABD.style.inset,
        zIndex: modalNABD.style.zIndex,
        justifyContent: modalNABD.style.justifyContent,
        alignItems: modalNABD.style.alignItems,
        ariaHidden: modalNABD.getAttribute("aria-hidden"),
        objectFit: comicImgNABD.style.objectFit
    },
    reader: {
        position: readerNABD.style.position,
        maxWidth: readerNABD.style.maxWidth,
        maxHeight: readerNABD.style.maxHeight
    }
};

fitBtnNABD.addEventListener("click", toggleFitNABDFullscreen);

document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        modalNABD.style.display = originalStyles.modal.display;
        modalNABD.style.position = originalStyles.modal.position;
        modalNABD.style.inset = originalStyles.modal.inset;
        modalNABD.style.zIndex = originalStyles.modal.zIndex;
        modalNABD.style.justifyContent = originalStyles.modal.justifyContent;
        modalNABD.style.alignItems = originalStyles.modal.alignItems;
        modalNABD.setAttribute("aria-hidden", originalStyles.modal.ariaHidden);

        readerNABD.style.position = originalStyles.reader.position;
        readerNABD.style.maxWidth = originalStyles.reader.maxWidth;
        readerNABD.style.maxHeight = originalStyles.reader.maxHeight;

        imageWrapNABD.classList.remove("fit-mode");
    }
});

function toggleFitNABDFullscreen() {
    modalNABD.setAttribute("aria-hidden", "false");
    modalNABD.style.display = "flex";
    modalNABD.style.position = "fixed";
    modalNABD.style.inset = "0";
    modalNABD.style.zIndex = "9999";
    modalNABD.style.justifyContent = "center";
    modalNABD.style.alignItems = "center";

    readerNABD.style.position = "relative";
    readerNABD.style.maxWidth = "100vw";
    readerNABD.style.maxHeight = "100vh";

    if (!document.fullscreenElement) {
        if (modalNABD.requestFullscreen) {
            modalNABD.requestFullscreen();
        } else if (modalNABD.webkitRequestFullscreen) {
            modalNABD.webkitRequestFullscreen();
        } else if (modalNABD.msRequestFullscreen) {
            modalNABD.msRequestFullscreen();
        }
    }

    imageWrapNABD.classList.toggle("fit-mode");
}


    let currentChapter = null;
    let currentIndexC = 0;
    let zoomed = false;
    let fitMode = 'contain';
    let lastActiveThumb = null;

    esplang.addEventListener('click', () => {
        grid.style.display = 'none';
        gridesp.style.display = 'grid';
        esplang.classList.add('selectedlang');
        englang.classList.remove('selectedlang');
        header.textContent = "Series de Cómics"

        if (comicModal.getAttribute('aria-hidden') === 'false') {
            chapterSelect.style.display = 'none';
            chapterSelectESP.style.display = 'inline-block';
        }
    });

    englang.addEventListener('click', () => {
        gridesp.style.display = 'none';
        grid.style.display = 'grid';
        esplang.classList.remove('selectedlang');
        englang.classList.add('selectedlang');
        header.textContent = "Comic Series"

        if (comicModal.getAttribute('aria-hidden') === 'false') {
            chapterSelect.style.display = 'inline-block';
            chapterSelectESP.style.display = 'none';
        }
    });

    comicnav.addEventListener('click', () => {
        gridesp.style.display = 'none';
        grid.style.display = 'grid';
        esplang.classList.remove('selectedlang');
        englang.classList.add('selectedlang');
        header.textContent = "Comic Series"

        if (comicModal.getAttribute('aria-hidden') === 'false') {
            chapterSelect.style.display = 'inline-block';
            chapterSelectESP.style.display = 'none';
        }
    });
    // grid
    function renderGrid(){
        grid.innerHTML = CHAPTERS.map(ch => `
          <article class="comic-card" data-chapter="${ch.id}" tabindex="0" aria-labelledby="${ch.id}-title">
            <img class="comic-cover" src="${ch.cover}" alt="${ch.title} cover" loading="lazy" />
            <div class="comic-info">
              <h4 id="${ch.id}-title">${ch.title }<span class="ongoing">${ch.ongoing}</span></h4>
              <p>${ch.pages.length - 1} page${ch.pages.length>1||ch.pages.length===1?'s':''}</p>
              <div class="comic-actions">
                <button class="btn" data-open="${ch.id}">Read Chapter</button>
                <a class="btn secondary" href="${ch.cover}" target="_blank" rel="noopener">View cover</a>
              </div>
            </div>
          </article>
        `).join('');
    }

    function renderGridESP(){
        gridesp.innerHTML = CHAPTERSESP.map(chesp => `
          <article class="comic-card" data-chapter="${chesp.id}" tabindex="0" aria-labelledby="${chesp.id}-title" id="${chesp.id}">
            <img class="comic-cover" src="${chesp.cover}" alt="${chesp.title} cover" loading="lazy" />
            <div class="comic-info">
              <h4 id="${chesp.id}-title">${chesp.title }<span class="ongoing">${chesp.ongoing}</span></h4>
              <p>${(chesp.pages.length - 1)} página${chesp.pages.length>1||chesp.pages.length===1?'s':''}</p>
              <div class="comic-actions">
                <button class="btn" data-open="${chesp.id}">Leer capítulo</button>
                <a class="btn secondary" href="${chesp.cover}" target="_blank" rel="noopener">Ver portada</a>
              </div>
            </div>
          </article>
        `).join('');
    }
    function populateSelect(){
        chapterSelect.innerHTML = CHAPTERS.map((c,i)=> 
            `<option value="${i}">${c.title}</option>`
        ).join('');
    }

    function populateSelectESP(){
        chapterSelectESP.innerHTML = CHAPTERSESP
            .filter((_, i) => i !== CHAPTERSESP.length - 1)
            .map((c, i) => `<option value="${i}">${c.title}</option>`)
            .join('');
    }
    function openChapter(index){
        const ch = CHAPTERS[index];
        if(!ch) return;

        currentChapter = ch;
        currentIndexC = 0;

        comicModal.setAttribute('aria-hidden','false');
        document.body.style.overflow = 'hidden';

        chapterSelect.style.display = 'inline-block';
        chapterSelectESP.style.display = 'none';
        chapterSelect.value = index;

        buildThumbs(ch);
        showPage(0);
        imageWrap.focus();
    }

    function openChapterESP(index){
        const chesp = CHAPTERSESP[index];
        if(!chesp) return;

        currentChapter = chesp;
        currentIndexC = 0;

        comicModal.setAttribute('aria-hidden','false');
        document.body.style.overflow = 'hidden';

        chapterSelectESP.style.display = 'inline-block';
        chapterSelect.style.display = 'none';
        chapterSelectESP.value = index;

        buildThumbs(chesp);
        showPage(0);
        imageWrap.focus();
    }


    function closeReader(){
        comicModal.setAttribute('aria-hidden','true');
        document.body.style.overflow = '';
        comicImg.src = '';
        resetTransforms();
    }

    function buildThumbs(ch){
        thumbs.innerHTML = ch.pages.map((p,i)=> `<img class="thumb" data-index="${i}" src="${p}" loading="lazy" alt="Page ${i+1} thumbnail" />`).join('');
    }
    function buildThumbsNABD(){
        thumbsNABD.innerHTML = NABD[0].pages.map((p,i)=> `<img class="thumb" data-index="${i}" src="${p}" loading="lazy" alt="Page ${i+1} thumbnail" />`).join('');
    }

    function setActiveThumb(i){
        const thumbEls = thumbs.querySelectorAll('.thumb');
        thumbEls.forEach(t => t.classList.toggle('active', Number(t.dataset.index) === i));
        const active = thumbEls[i];
        if(active) active.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
    }
    function setActiveThumbNABD(i){
        const thumbEls = thumbsNABD.querySelectorAll('.thumb');
        thumbEls.forEach(t => t.classList.toggle('active', Number(t.dataset.index) === i));
        const active = thumbEls[i];
        if(active) active.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
    }

    function showPage(i){
        if(!currentChapter) return;
        const pages = currentChapter.pages;
        if(i < 0) i = 0;
        if(i >= pages.length) i = pages.length - 1;
        currentIndexC = i;
        comicImg.src = '';
        comicImg.alt = `${currentChapter.title} — page ${i+1}`;
        const maxIndex = pages.length - 1; //so that the cover doesnt count as a page
        pageCounter.textContent = `${i} / ${maxIndex}`;
        pageProgress.max = maxIndex;
        pageProgress.value = i;
        const src = pages[i];
        const img = new Image();
        img.src = src;
        img.onload = () => {
            comicImg.src = src;
            setActiveThumb(i);
            preloadNeighborImages(i);
        };
        downloadBtn.dataset.src = src;
    }
    function showPageNABD(i){
        const pages = NABD[0].pages;
        if(i < 0) i = 0;
        if(i >= pages.length) i = pages.length - 1;
        currentIndexC = i;
        comicImgNABD.src = '';
        comicImgNABD.alt = `${NABD.title} — page ${i+1}`;
        const maxIndex = pages.length - 1; //so that the cover doesnt count as a page
        pageCounterNABD.textContent = `${i+1} / ${maxIndex + 1}`;
        pageProgressNABD.max = maxIndex + 1;
        pageProgressNABD.value = i+1;
        const src = pages[i];
        const img = new Image();
        img.src = src;
        img.onload = () => {
            comicImgNABD.src = src;
            setActiveThumbNABD(i);
            preloadNeighborImagesNABD(i);
        };
        downloadBtnNABD.dataset.src = src;
    }

    function preloadNeighborImages(i){
        const pages = currentChapter.pages;
        [i-1, i+1].forEach(idx => {
            if(idx>=0 && idx<pages.length){
                const im = new Image();
                im.src = pages[idx];
            }
        });
    }
    function preloadNeighborImagesNABD(i){
        const pages = NABD[0].pages;
        [i-1, i+1].forEach(idx => {
            if(idx>=0 && idx<pages.length){
                const im = new Image();
                im.src = pages[idx];
            }
        });
    }

    function resetTransforms(){
        zoomed = false;
        zoomBtn.textContent = '＋';
        fitMode = 'contain';
        fitBtn.textContent = '⤢';
        fitBtnNABD.textContent = '⤢';
        comicImg.style.transform = 'translate(0,0) scale(1)';
        comicImg.style.objectFit = 'contain';
        comicImgNABD.style.transform = 'translate(0,0) scale(1)';
        comicImgNABD    .style.objectFit = 'contain';
    }

    // zooooom :3
    zoomBtn.addEventListener('click', () => {
        zoomed = !zoomed;
        if (zoomed) {
            zoomBtn.textContent = '-';
            comicImg.style.transform = 'scale(2)';
            imageWrap.classList.add('zoomed');
        } else {
            zoomBtn.textContent = '+';
            comicImg.style.transform = 'scale(1)';
            imageWrap.classList.remove('zoomed');
        }
    });
    zoomBtnNABD.addEventListener('click', () => {
        zoomed = !zoomed;
        if (zoomed) {
            zoomBtnNABD.textContent = '-';
            comicImgNABD.style.transform = 'scale(2)';
            imageWrapNABD.classList.add('zoomed');
        } else {
            zoomBtnNABD.textContent = '+';
            comicImgNABD.style.transform = 'scale(1)';
            imageWrapNABD.classList.remove('zoomed');
        }
    });

    fitBtn.textContent = '⤢';
    fitBtnNABD.textContent = '⤢';
    function toggleFullscreen() {
        const reader = document.querySelector('.comic-reader');
        if (!document.fullscreenElement) {
            reader.requestFullscreen?.();
        } else {
            document.exitFullscreen?.();
        }
    }

    document.addEventListener('fullscreenchange', () => {
        const isFullscreen = !!document.fullscreenElement;
        fitMode = isFullscreen ? 'cover' : 'contain';
        comicImg.style.objectFit = fitMode;
        fitBtn.textContent = isFullscreen ? '⇱' : '⤢';;
        comicImgNABD.style.objectFit = fitMode;
        fitBtnNABD.textContent = isFullscreen ? '⇱' : '⤢';
    });

    function downloadCurrent(){
        const src = downloadBtn.dataset.src;
        if(!src) return;
        const a = document.createElement('a');
        a.href = src;
        a.download = src.split('/').pop();
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
    function downloadCurrentNABD(){
        const src = downloadBtnNABD.dataset.src;
        if(!src) return;
        const a = document.createElement('a');
        a.href = src;
        a.download = src.split('/').pop();
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    // nav
    function onKey(e){
        if(comicModal.getAttribute('aria-hidden') === 'true') return;
        if(e.key === 'ArrowRight' || e.key === 'PageDown') { showPage(currentIndexC + 1); }
        if(e.key === 'ArrowLeft' || e.key === 'PageUp') { showPage(currentIndexC - 1); }
        if(e.key === 'Escape') { closeReader(); }
        if(e.key === 'f') { toggleFullscreen(); }
        if(e.key === ' ') { e.preventDefault(); showPage(currentIndexC + 1); }
    }
    function onKeyNABD(e){
        if(e.key === 'ArrowRight' || e.key === 'PageDown') { showPageNABD(currentIndexC + 1); }
        if(e.key === 'ArrowLeft' || e.key === 'PageUp') { showPageNABD(currentIndexC - 1); }
        if(e.key === 'f') { toggleFitNABDFullscreen(); }
        if(e.key === ' ') { e.preventDefault(); showPageNABD(currentIndexC + 1); }
    }

    // touch swipe
    function addTouchSwipes(){
        let startX = 0, startY = 0, startTime = 0;
        imageWrap.addEventListener('touchstart', (ev)=>{
            const t = ev.touches[0];
            startX = t.clientX; startY = t.clientY; startTime = Date.now();
        }, {passive:true});
        imageWrap.addEventListener('touchend', (ev)=>{
            const t = ev.changedTouches[0];
            const dx = t.clientX - startX;
            const dy = t.clientY - startY;
            const dt = Date.now() - startTime;
            if(dt < 600 && Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)){
                if(dx < 0) showPage(currentIndexC + 1); else showPage(currentIndexC - 1);
            }
        }, {passive:true});
    }

    function onGridClick(e){
        const open = e.target.closest('[data-open]');
        if(open){
            const id = open.dataset.open;
            const idx = CHAPTERS.findIndex(c=>c.id===id);
            if(idx>=0) openChapter(idx);
        }
    }
    function onGridClickESP(e){
    const open = e.target.closest('[data-open]');
    if(open){
        const id = open.dataset.open;
        const idx = CHAPTERSESP.findIndex(c => c.id === id);
        if(idx >= 0) openChapterESP(idx);
    }
    }


    function onThumbClick(e){
        const t = e.target.closest('.thumb');
        if(t) 
            {showPage(Number(t.dataset.index));
            showPageNABD(Number(t.dataset.index));
            }
    }

    function initListeners(){
        document.addEventListener('click', (e)=>{
            if(e.target.matches('[data-close]')) closeReader();
        });

        grid.addEventListener('click', onGridClick);
        grid.addEventListener('keydown', (e)=>{
            if(e.key === 'Enter' && e.target.closest('.comic-card')) {
                const chId = e.target.closest('.comic-card').dataset.chapter;
                const idx = CHAPTERS.findIndex(c=>c.id===chId);
                if(idx>=0) openChapter(idx);
            }
        });
        gridesp.addEventListener('click', onGridClickESP);


        chapterSelect.addEventListener('change', (e)=> {openChapter(Number(e.target.value)); resetTransforms();});
        chapterSelectESP.addEventListener('change', (e)=> {openChapterESP(Number(e.target.value)); resetTransforms();});
        nextBtnC.addEventListener('click', ()=> showPage(currentIndexC + 1));
        nextBtnCNABD.addEventListener('click', ()=> showPageNABD(currentIndexC + 1));
        prevBtnC.addEventListener('click', ()=> showPage(currentIndexC - 1));
        prevBtnCNABD.addEventListener('click', ()=> showPageNABD(currentIndexC - 1));
        closeBtnC.addEventListener('click', closeReader);
        downloadBtn.addEventListener('click', downloadCurrent);
        downloadBtnNABD.addEventListener('click', downloadCurrentNABD);
        fitBtn.addEventListener('click', toggleFullscreen);

        fitBtnNABD.addEventListener('click', toggleFullscreen);

        thumbs.addEventListener('click', onThumbClick);
        thumbsNABD.addEventListener('click', onThumbClick);

        imageWrap.addEventListener('click', (e)=>{
            if(e.target.closest('.ctrl')) return;
            showPage(currentIndexC + 1);
        });
        imageWrapNABD.addEventListener('click', (e)=>{
            if(e.target.closest('.ctrl')) return;
            showPageNABD(currentIndexC + 1);
        });

        document.addEventListener('keydown', onKey);
        halloweenSpecial.addEventListener('keydown', onKeyNABD);
        addTouchSwipes();

        document.addEventListener('fullscreenchange', ()=> {
        });
    }

    function init(){
        renderGrid();
        renderGridESP();
        populateSelect();
        populateSelectESP();
        initListeners();
        buildThumbsNABD();
        showPageNABD(0);
    }

    init();
})();

const comicModal = document.getElementById('comicModal');
const footerContent = document.getElementById('footer-content');
const closeBtnC = document.getElementById('closeBtn');


function openReader() {
    const siteContent = document.getElementById('site-content');
    comicModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    siteContent.classList.add('inactive');
}

function closeReader() {
    const siteContent = document.getElementById('site-content');
    comicModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    siteContent.classList.remove('inactive');
    document.exitFullscreen?.();
}

closeBtnC.addEventListener('click', closeReader);