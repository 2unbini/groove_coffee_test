var q = {
    1 : {
        type: "LB",
        title: "1. 바쁜 일정이 끝나고 오랜만에 쉬는날이다!",
        A: "늦잠을 자며 침대 밖으로 벗어나지 않는다.",
        B: "간만의 쉬는날, 이미 계획해놓은 게 있다."
    },
    2 : {
        type: "LB",
        title: "2. 친구와의 약속에 늦을 것 같다! 나는,",
        A: "어쩔 수 없다. 미안해 친구야...",
        B: "그럴 일 없다. 오히려 친구를 기다린다."
    },
    3 : {
        type: "LB",
        title: "3. 유명한 카페를 찾아갔는데 웨이팅을 해야한다면?",
        A: "옆에 가게도 좋아보인다! 옆집으로 가자.",
        B: "조금만 기다리면 될 것 같다. 기다리자!"
    },
    4 : {
        type: "CD",
        title: "4. 내가 카페를 가는 이유는,",
        A: "혼자만의 시간을 가지기 위해",
        B: "친구들과 수다 떨기 위해"
    },
    5 : {
        type: "CD",
        title: "5. 내가 시킨 음료가 아닌 다른 게 나왔다!",
        A: "'내가 잘못 시켰나보다', 그냥 받아온다.",
        B: "\"잘못 나온 것 같아요\", 바로 말한다."
    },
    6 : {
        type: "CD",
        title: "6. 즐겨 가는 카페에 왔다! 내가 앉는 자리는,",
        A: "조용하고 아늑한 소파 좌석",
        B: "시원하고 탁 트인 야외 테라스"
    },
    7 : {
        type: "SN",
        title: "7. 카페에서 친구가 갑자기 고민 상담을 한다. 나는,",
        A: "\"어떡해ㅠㅠ\", 폭풍 리액션으로 다독여준다.",
        B: "\"~를 해보는 게 어때?\", 현실적인 조언을 한다. "
    },
    8 : {
        type: "SN",
        title: "8. 화가 나는 일이 생겼다. 하소연을 들어주러 나온 친구에게 나는,",
        A: "얼음을 씹어먹으며 감정을 마구 분출한다.",
        B: "어떻게 된 일인지 처음부터 끝까지 읊는다."
    },
    9 : {
        type: "SN",
        title: "9. 카페 분위기가 정말 좋다!",
        A: "'와 여기 정말 좋다'",
        B: "'조명이 따뜻해서 마음이 편안해져'"
    },
    10 : {
        type: "IH",
        title: "10. 카페에 가면 나는,",
        A: "늘 마시던 음료를 시킨다.",
        B: "그때 그때 기분에 따라 새로운 걸 시도한다."
    },
    11 : {
        type: "IH",
        title: "11. 친구를 위한 디저트를 사가려고 할 때 나는,",
        A: "친구의 입맛에 맞춘 디저트를 시킨다.",
        B: "요즘 유행하는 디저트를 시도해본다."
    },
    12 : {
        type: "IH",
        title: "12. 카페 직원이 완전 내 스타일이다. 나는,",
        A: "'번호를 물어보면 실례가 될까?'",
        B: "(이미 노후준비까지 끝마쳤다)"
    }
}


var result = {
    "CLSI": {
            "drink": "아이스 바닐라 라떼",
            "summary": "한줄요약",
            "explain": "아이스 바닐라 라떼를 좋아하는 당신은<br> 아이스 바닐라 라떼를 좋아하는군요!",
            "dessert": "무화과 마들렌",
            "drink-bff": "블루베리 바나나 스무디",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "CLSH": {
            "drink": "따뜻한 바닐라 라떼",
            "summary": "한줄요약",
            "explain": "따뜻한 바닐라 라떼를 좋아하는 당신은<br> 따뜻한 바닐라 라떼를 좋아하는군요!",
            "dessert": "치즈케이크",
            "drink-bff": "따뜻한 자몽 애플티",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "CLNI": {
            "drink": "아이스 필터 커피 - 에티오피아",
            "summary": "한줄요약",
            "explain": "아이스 필터 커피 - 에티오피아를 좋아하는 당신은<br> 아이스 필터 커피 - 에티오피아를 좋아하는군요!",
            "dessert": "초코 마들렌",
            "drink-bff": "딸기 바나나 스무디",
            "img-drk": "ifilter.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "CLNH": {
            "drink": "에스프레소 마끼아또",
            "summary": "한줄요약",
            "explain": "에스프레소 마끼아또를 좋아하는 당신은<br> 에스프레소 마끼아또를 좋아하는군요!",
            "dessert": "레몬 마들렌",
            "drink-bff": "핫 초코",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "CBSI": {
            "drink": "아포가토",
            "summary": "마음을 녹이는 매력쟁이 당신!",
            "explain": "• 언뜻 봤을 땐 진지해 보이지만, 어느새 상대방의 마음에 스며들어 어디서나 사랑받는 타입이에요.<br>• 얕은 관계보단 좁더라도 깊은 관계를 더 소중히 여기고, 무엇 하나에 꽂히면 끝까지 해내려는 사람이에요.<br>• 남들이 보기엔 쿨하고 냉소적으로 보일 당신이지만 사실 누군가 곁에 없으면 허전함을 느껴요.",
            "dessert": "치즈케이크",
            "drink-bff": "아이스 레몬 히비스커스 티",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "CBSH": {
            "drink": "카라멜 라떼",
            "summary": "속 깊은 열정맨인 당신!",
            "explain": "• 따뜻한 마음과 활활 타는 열정까지 겸비한 당신은 누구에게나 사랑받는 사람이에요.<br>• 친구관계, 연애, 일 등 어떤 일이든 열정이 넘치지만 열정 아래에 상대방에 대한 배려가 깔려 있어 주변 사람들을 기분 좋게 만들어요.<br>• 무엇이든 배우기 좋아하고, 좋아하는 일에 헌신할 줄 아는 전문가인 당신은 끝없이 성찰할 줄 아는 사람이에요.",
            "dessert": "무화과 마들렌",
            "drink-bff": "따뜻한 레몬차",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "CBNI": {
            "drink": "플랫 화이트",
            "summary": "시크 도도 완벽주의자 당신!",
            "explain": "• 당신은 책임감이 강하고 정신적으로 성숙해 힘든 일이 생겨도 좌절하지 않을 수 있는 정신력을 가졌어요.<br>• 냉철하고 통찰력 있는 당신은 다가가기 어렵게 느끼지기도 하지만 사실은 친구나 가족의 든든한 버팀목이 되어주는 사람이에요.<br>• 나처럼 솔직하고 차분한 사람과 잘 맞고, 애매모호한 건 질색이니 확실하게 다가와 주세요.",
            "dessert": "치즈케이크",
            "drink-bff": "오미자 에이드",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "CBNH": {
            "drink": "따뜻한 라떼",
            "summary": "숨겨진 인싸, 아싸 중의 인싸인 당신!",
            "explain": "• 진한 에스프레소처럼 혼자 고독에 잠기기도 하지만, 한 구석에는 주목 받고 싶은 마음이 있어요.<br>• 생각이 많고 지혜로운 당신은 표현을 강하게 하진 않지만, 도움이 필요한 사람에게 손을 내밀 줄 아는 섬세한 사람이에요.<br>• 당신의 잠재된 열정과 진중한 마음이 결합된다면 어떤 힘든 일이든 해낼 수 있어요, 도전을 멈추지 마세요!",
            "dessert": "레몬 마들렌",
            "drink-bff": "따뜻한 오미자차",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DLSI": {
            "drink": "오미자 에이드",
            "summary": "유쾌하고 톡 쏘는 매력의 당신!",
            "explain": "• 혼자 있는 것보다 사람들과 함게 있는 걸 좋아하고, 주변 사람들이 잘 따르는 사람이에요.<br>• 경쾌하고 낙천적인 성향으로 다른 사람들에게 행복을 주는 타입이에요.<br>• 하지만 상대방이 나를 실망시킨다면 칼 같이 마음을 돌리기도 한답니다.",
            "dessert": "치즈케이크",
            "drink-bff": "플랫 화이트",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DLSH": {
            "drink": "따뜻한 오미자차",
            "summary": "포근하고 달달한 매력을 가진 당신!",
            "explain": "• 주변 사람들은 당신에게 포근함을 느끼고 많이 의지하려고 해요.<br>• 정이 많아 상대방이 기쁘면 덩달아 기분이 좋아지는 사람이에요.<br>• 감수성이 풍부하고 공감능력이 뛰어나 주변 사람들이 당신에게 고민 상담을 하는 경우가 많아요.",
            "dessert": "치즈케이크",
            "drink-bff": "따뜻한 카라멜 라떼",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DLNI": {
            "drink": "아이스 레몬 히비스커스 티",
            "summary": "시원시원한 매력을 가진 당신!",
            "explain": "• 가까운 사람에겐 누구보다 다정하고 잘 대해주지만 새로운 사람에겐 약간 낯을 가려요.<br>• 겉으로는 티가 잘 안나지만 내면은 열정으로 가득 찬 사람이에요.<br>• 사람들과 어울리는 것도 좋지만 혼자 사색에 빠지는 시간을 더 즐기고, 매 순간 자신에게 최선을 다해요.",
            "dessert": "치즈케이크",
            "drink-bff": "아포가토",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DLNH": {
            "drink": "따뜻한 레몬차",
            "summary": "한줄요약",
            "explain": "따뜻한 레몬차를 좋아하는 당신은<br> 따뜻한 레몬차를 좋아하는군요!",
            "dessert": "치즈케이크",
            "drink-bff": "따뜻한 라떼",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DBSI": {
            "drink": "딸기 바나나 스무디",
            "summary": "두 가지 매력을 동시에 가지고 있는 당신!",
            "explain": "• 달콤하고 상큼한 딸기 바나나 스무디와 잘 어울리는 당신은 유쾌하고 사랑스러운 사람이에요.<br>• 겉으로는 차갑게 보이지만 사실 그 누구보다 따뜻하고 주변 사람들을 소중히 하는군요.<br>• 지인과 만나면 재밌게 놀지만, 때로는 혼자만의 시간이 필요한 사람이에요.",
            "dessert": "치즈케이크",
            "drink-bff": "아이스 필터 커피(에티오피아)",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DBSH": {
            "drink": "핫 초코",
            "summary": "달달해서 자꾸 끌리는 당신!",
            "explain": "• 따뜻하고 달달한 핫 초코와 잘 어울리는 당신은 주변 사람들에게 넘치는 사랑을 받는 사람이에요.<br>• 당신은 상대방의 이야기를 경청할 줄 아는 사람이라 주변 사람들이 고민 상담을 많이 해요.<br>• 정이 많아서 믿음이 가는 사람과의 소중한 인연을 이어가기 위해 노력하는 사람이에요.",
            "dessert": "치즈케이크",
            "drink-bff": "따뜻한 바닐라 라떼",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DBNI": {
            "drink": "블루베리 바나나 스무디",
            "summary": "겉은 진지해보여도 속은 달달한 겉진속달!",
            "explain": "• 매사에 진심이고 신중한 당신은 주변 사람들에게 신뢰를 많이 받는 사람이에요.<br>• 겉으로는 진지하고 어떨 땐 메말라보이지만 속은 그 누구보다 발랄하고 재미있어요.<br>• 당신은 새롭고 다양한 사람을 만나는 걸 좋아하지만, 동시에 오래된 인연을 소중히 할 줄 아는 사람이에요.",
            "dessert": "치즈케이크",
            "drink-bff": "아이스 바닐라 라떼",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DBNH": {
            "drink": "따뜻한 자몽 애플티",
            "summary": "마음이 여리고 따뜻한 당신!",
            "explain": "• 상큼한 과일 향히 은은하게 나는 자몽애플티와 어울리는 당신은 마음이 단단한 사람이에요.<br>• 여린 마음 때문에 상처를 받았던 것들이 오히려 당신을 더 단단하고 강한 사람으로 만들었군요.<br>• 당신은 상대방에게 상처를 주지 않으려 상대방 입장을 먼저 생각하는 따뜻한 사람이에요.",
            "dessert": "치즈케이크",
            "drink-bff": "에스프레소 마끼아또",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            },
};
