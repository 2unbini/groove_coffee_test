var q = {
    1 : {
        type: "LB",
        title: "1.  바쁜 일정이 끝나고 오랜만에 쉬는날이다!",
        A: "늦잠을 자며 침대 밖으로 벗어나지 않는다.",
        B: "간만의 쉬는날, 이미 계획해놓은 게 있다."
    },
    2 : {
        type: "LB",
        title: "2.  친구와의 약속에 늦을 것 같다!",
        A: "어쩔 수 없다. 미안해 친구야...",
        B: "그럴 일 없다. 오히려 친구를 기다린다."
    },
    3 : {
        type: "LB",
        title: "3.  유명한 카페를 찾아갔는데 웨이팅을 해야한다면?",
        A: "옆에 가게도 좋아보인다! 옆집으로 가자.",
        B: "조금만 기다리면 될 것 같다. 기다리자!"
    },
    4 : {
        type: "CD",
        title: "4.  내가 카페를 가는 이유는?",
        A: "혼자만의 시간을 가지기 위해",
        B: "친구들과 수다 떨기 위해"
    },
    5 : {
        type: "CD",
        title: "5.  내가 시킨 음료가 아닌 다른 게 나왔다!",
        A: "'내가 잘못 시켰나보다', 그냥 받아온다.",
        B: "\"잘못 나온 것 같아요\", 바로 말한다."
    },
    6 : {
        type: "CD",
        title: "6.  즐겨 가는 카페에 왔다! 내가 앉는 자리는?",
        A: "조용하고 아늑한 소파 좌석",
        B: "시원하고 탁 트인 야외 테라스"
    },
    7 : {
        type: "SN",
        title: "7.  카페에서 친구가 갑자기 고민 상담을 한다. 나의 반응은?",
        A: "\"어떡해ㅠㅠ\", 폭풍 리액션으로 다독여준다.",
        B: "\"~를 해보는 게 어때?\", 현실적인 조언을 한다. "
    },
    8 : {
        type: "SN",
        title: "8.  화가 나는 일이 생겼다. 하소연을 들어주러 나온 친구에게 나는?",
        A: "얼음을 씹어먹으며 감정을 마구 분출한다.",
        B: "어떻게 된 일인지 처음부터 끝까지 읊는다."
    },
    9 : {
        type: "SN",
        title: "9.  지나가다 들른 카페 분위기가 좋을 때 나의 마음은?",
        A: "'와 여기 정말 좋다'",
        B: "'조명이 따뜻해서 마음이 편안해져'"
    },
    10 : {
        type: "IH",
        title: "10.  카페에 가면 나는?",
        A: "늘 마시던 음료를 시킨다.",
        B: "그때 그때 기분에 따라 새로운 걸 시도한다."
    },
    11 : {
        type: "IH",
        title: "11.  친구를 위한 디저트를 사가려고 한다, 나는?",
        A: "친구의 입맛에 맞춘 디저트를 시킨다.",
        B: "요즘 유행하는 디저트를 시도해본다."
    },
    12 : {
        type: "IH",
        title: "12.  카페 직원이 완전 내 스타일이다, 나는?",
        A: "'번호를 물어보면 실례가 될까?'",
        B: "(이미 노후준비까지 끝마쳤다)"
    }
}


var result = {
    "CLSI": {
            "drink": "아이스 바닐라 라떼",
            "summary": "차갑지만 달달한 반전 매력의 당신!",
            "explain": "‣ 속에 있는 감정은 누구보다도 깊지만, 겉으로 잘 드러내지 않아 차가워보인다는 이야기를 많이 듣는 사람이에요.<br>‣ 자기만의 공간과 시간을 중요시하고 독립적인 성향을 띄는 동시에 남을 배려할 줄 알아요.<br>‣ 계획적이기보단 즉흥적으로 삶을 즐기는 낭만파예요.",
            "dessert": "츄러스 휘낭시에",
            "drink-bff": "블루베리 바나나 스무디",
            "img-drk": "vanilaice.jpg",
            "img-dess": "churros.jpg",
            "img-drk-bff": "blueba.jpg",
            "tags": "#시크 #독립적 #낭만파",
            "ex-dess": "달콤하고 바삭한",
            "ex-bff": "겉은 진지 속은 달달",
            }, 
    "CLSH": {
            "drink": "따뜻한 바닐라 라떼",
            "summary": "바닐라 향처럼 로맨틱한 당신!",
            "explain": "‣ 정도 많고 생각도 많은 타입인지라 사람을 좋아하지만 인간관계가 어려워요. 그래서 혼자 있는 시간도 매우 소중한 사람이에요.<br>‣ 계획은 No! 어디로 튈 지 모르는 스타일이에요.<br>‣ 따뜻하고 로맨틱한 성격 덕에 주변에선 착하다고 하는데 난 잘 모르겠어요.",
            "dessert": "솔티초코 휘낭시에",
            "drink-bff": "따뜻한 자몽 애플티",
            "img-drk": "vanila.jpg",
            "img-dess": "saltcho.jpg",
            "img-drk-bff": "grapefruit.jpg",
            "tags": "#로맨티스트 #무계획 #정많음",
            "ex-dess": "달콤하고 짭짤한",
            "ex-bff": "마음이 여리고 따뜻한",
            }, 
    "CLNI": {
            "drink": "아이스 필터 커피 - 에티오피아",
            "summary": "차갑고 깔끔한 매력의 당신!",
            "explain": "‣ 냉철한 이성주의자로 주변에서 차갑거나 단호하다는 이야기를 자주 듣는 사람이에요.<br>‣ Don't touch me! 사생활을 매우 중요하게 여긴답니다.<br>‣ 어떤 일을 처리하는 데 있어 용감하고 저돌적인 매력이 독보적인 사람이에요.",
            "dessert": "초코 마들렌",
            "drink-bff": "딸기 바나나 스무디",
            "img-drk": "filter.jpg",
            "img-dess": "chocolate.jpg",
            "img-drk-bff": "ddalba.jpg",
            "tags": "#이성적 #단호박 #저돌적",
            "ex-dess": "달콤하고 촉촉한",
            "ex-bff": "반전 매력",
            }, 
    "CLNH": {
            "drink": "따뜻한 아메리카노",
            "summary": "알 수 없는 매력을 가진 당신!",
            "explain": "‣ 진지하고 오그라드는 분위기는 질색인 사람이에요. <br>‣ 머리 속에선 정말 많은 생각들이 떠다니는 이 세상 제일 가는 사색가예요.<br> 혼자만의 시간을 즐기는 조용하고 독립적인 성격이지만, 속에는 따뜻한 마음이 존재하는 사람이에요.",
            "dessert": "레몬 마들렌",
            "drink-bff": "핫 초코",
            "img-drk": "americano.jpg",
            "img-dess": "lemon.jpg",
            "img-drk-bff": "hotchocolate.jpg",
            "tags": "#사색가 #혼자만의_시간 #속을_알수없는",
            "ex-dess": "상큼 발랄한",
            "ex-bff": "달달해서 자꾸 끌리는",
            }, 
    "CBSI": {
            "drink": "아포가토",
            "summary": "마음을 녹이는 매력쟁이 당신!",
            "explain": "‣ 언뜻 봤을 땐 진지해 보이지만, 어느새 상대방의 마음에 스며들어 어디서나 사랑받는 타입이에요.<br>‣ 얕은 관계보단 좁더라도 깊은 관계를 더 소중히 여기고, 외향적이기도 내향적이기도 한 내게 다른 사람들은 다정하고 온화하다고 말해요.<br>‣ 다른 사람의 감정을 잘 캐치하고 눈치도 빠르지만 솔직하게 말하지 못해 속앓이 할 때가 있어요.",
            "dessert": "무화과 크림치즈 마들렌",
            "drink-bff": "아이스 레몬 히비스커스 티",
            "img-drk": "affogato.jpg",
            "img-dess": "creamcheese.jpg",
            "img-drk-bff": "lemonhibi.jpg",
            "tags": "#다정함 #눈치빠름 #깊은_인간관계",
            "ex-dess": "포근포근한",
            "ex-bff": "다정다감한",
            }, 
    "CBSH": {
            "drink": "따뜻한 카라멜 라떼",
            "summary": "속 깊은 열정맨인 당신!",
            "explain": "‣ 따뜻한 마음과 활활 타는 열정까지 겸비한 당신은 누구에게나 사랑받는 사람이에요.<br>‣ 친구관계, 연애, 일 등 어떤 일이든 열정이 넘치지만 열정 아래에 상대방에 대한 배려가 깔려 있어 주변 사람들을 기분 좋게 만들어요.<br>‣ 상상력이 뛰어나고, 가끔 비현실적이란 소리를 듣지만 무엇이든 배우기 좋아하고, 좋아하는 일에 헌신할 줄 아는 전문가인 당신은 끝없이 성찰할 줄 아는 사람이에요.",
            "dessert": "버터 스콘",
            "drink-bff": "따뜻한 레몬차",
            "img-drk": "caramel.jpg",
            "img-dess": "butter.jpg",
            "img-drk-bff": "lemon.jpg",
            "tags": "#유노윤호 #배려왕 #자기성찰",
            "ex-dess": "풍미 가득한",
            "ex-bff": "차분한 눈치왕",
            }, 
    "CBNI": {
            "drink": "플랫 화이트",
            "summary": "순수한 완벽주의자 당신!",
            "explain": "‣ 당신은 책임감이 강하고 정신적으로 성숙해 힘든 일이 생겨도 좌절하지 않을 수 있는 정신력을 가졌어요.<br>‣ 냉철하고 통찰력 있는 당신은 다가가기 어렵게 느끼지기도 하지만 사실은 친구나 가족의 든든한 버팀목이 되어주는 사람이에요.<br>‣ 가끔은 공감능력이 부족한 것 같다는 말을 듣기도 하는 나는, 나와 비슷하게 솔직하고 차분한 사람과 잘 맞고, 애매모호한 사람은 싫으니 좀 더 확실하게 다가와 주길 바라요.",
            "dessert": "솔티카라멜 휘낭시에",
            "drink-bff": "오미자 에이드",
            "img-drk": "flat.jpg",
            "img-dess": "saltcar.jpg",
            "img-drk-bff": "omijaade.jpg",
            "tags": "#책임감 #완벽주의 #솔직함",
            "ex-dess": "고소하고 짭짤한",
            "ex-bff": "유쾌하고 톡 쏘는",
            }, 
    "CBNH": {
            "drink": "에스프레소 마끼아또",
            "summary": "책임감 강한 모범생 당신!",
            "explain": "‣생각이 많고 지혜로운 당신은 표현을 강하게 하진 않지만, 도움이 필요한 사람에게 손을 내밀 줄 아는 섬세한 사람이에요. 말하자면 츤데레!<br>‣ 독립성이 강하고 냉철한 통찰력을 지닌 당신은 종종 영혼 없다는 소리를 듣기도 하고, 일상의 소소한 행복엔 조금 무딘 편이에요.<br>‣ 당신의 잠재된 열정과 진중한 마음이 결합된다면 어떤 힘든 일이든 해낼 수 있어요, 도전을 멈추지 마세요!",
            "dessert": "츄러스 휘낭시에",
            "drink-bff": "따뜻한 오미자차",
            "img-drk": "espresso.jpg",
            "img-dess": "churros.jpg",
            "img-drk-bff": "omija.jpg",
            "tags": "#츤데레 #섬세함 #잠재적_열정맨",
            "ex-dess": "달콤하고 바삭한",
            "ex-bff": "포근하고 달달한",
            }, 
    "DLSI": {
            "drink": "오미자 에이드",
            "summary": "유쾌하고 톡 쏘는 매력의 당신!",
            "explain": "‣ 혼자 있는 것보다 사람들과 함게 있는 걸 좋아하고, 주변 사람들이 잘 따르는 사람이에요.<br>‣ 경쾌하고 낙천적인 성향으로 다른 사람들에게 행복을 주는 타입이에요.<br>‣ 고민을 털어 놓는 친구에게 따뜻한 위로와 지지를 보내는 동시에 실질적인 조언 또한 잊지 않아요.",
            "dessert": "솔티초코 휘낭시에",
            "drink-bff": "플랫 화이트",
            "img-drk": "omijaade.jpg",
            "img-dess": "saltcho.jpg",
            "img-drk-bff": "flat.jpg",
            "tags": "#톡쏘는 #낙천적인 #유쾌한",
            "ex-dess": "달콤하고 짭짤한",
            "ex-bff": "순수한 완벽주의자",
            }, 
    "DLSH": {
            "drink": "따뜻한 오미자차",
            "summary": "포근하고 달달한 매력을 가진 당신!",
            "explain": "‣ 주변 사람들은 당신에게 포근함을 느끼고 많이 의지하려고 해요.<br>‣ 정이 많아 거절을 잘 못하고, 상대방이 기쁘면 덩달아 기분이 좋아지는 사람이에요.<br>‣ 단순한 인생의 즐거움이나 일시적인 만족감이 아닌 타인과의 사회적, 정서적 유대 관계를 통해 행복을 느껴요.",
            "dessert": "초코 마들렌",
            "drink-bff": "따뜻한 카라멜 라떼",
            "img-drk": "omija.jpg",
            "img-dess": "chocolate.jpg",
            "img-drk-bff": "caramel.jpg",
            "tags": "#포근한 #달달한 #의지가_되는",
            "ex-dess": "달콤하고 촉촉한",
            "ex-bff": "속 깊은 열정맨",
            }, 
    "DLNI": {
            "drink": "아이스 레몬 히비스커스 티",
            "summary": "다정다감한 당신!",
            "explain": "‣ 가까운 사람에겐 누구보다 다정하고 잘 대해주지만 새로운 사람에겐 약간 낯을 가려요.<br>‣ 겉으로는 티가 잘 나지 않지만 내면은 열정으로 가득 찬 사람이에요.<br>‣ 사색에 빠지는 시간을 즐기고, 매 순간 자신에게 최선을 다해요.",
            "dessert": "오레오 스콘",
            "drink-bff": "아포가토",
            "img-drk": "lemonhibi.jpg",
            "img-dess": "oreo.jpg",
            "img-drk-bff": "affogato.jpg",
            "tags": "#다정함 #열정가득 #사색가",
            "ex-dess": "달달하고 묵직한",
            "ex-bff": "마음을 녹이는 매력쟁이",
            }, 
    "DLNH": {
            "drink": "따뜻한 레몬차",
            "summary": "차분한 눈치왕 당신!",
            "explain": "‣ 통찰력이 뛰어난 당신은 다른 사람의 감정이나 상황을 잘 파악하며, 일에 대한 이해도가 좋은 사람이에요.<br>‣ 준비성이 좋아 문제에 대해 차분하게 대처하며, 과한 리액션을 하지 않아요.<br>‣ 가끔 타인을 배려하기 위해 자기 자신을 희생하는 경우가 있어요.",
            "dessert": "솔티카라멜 휘낭시에",
            "drink-bff": "에스프레소 마끼아또",
            "img-drk": "lemon.jpg",
            "img-dess": "saltcar.jpg",
            "img-drk-bff": "espresso.jpg",
            "tags": "#통찰력 #차분함 #희생정신",
            "ex-dess": "고소하고 짭짤한",
            "ex-bff": "책임감 강한 모범생",
            }, 
    "DBSI": {
            "drink": "딸기 바나나 스무디",
            "summary": "두 가지 매력을 동시에 가지고 있는 당신!",
            "explain": "‣ 달콤하고 상큼한 딸기 바나나 스무디와 잘 어울리는 당신은 유쾌하고 사랑스러운 사람이에요.<br>‣ 겉으로는 차갑게 보이지만 사실 그 누구보다 따뜻하고 주변 사람들을 소중히 하는군요.<br>‣ 풍부한 사회성과 친절한 성격을 가지고 있으며, 구체적이고 현실적인 방법으로 타인을 돕고자 해요.",
            "dessert": "버터 스콘",
            "drink-bff": "아이스 필터 커피(에티오피아)",
            "img-drk": "ddalba.jpg",
            "img-dess": "butter.jpg",
            "img-drk-bff": "filter.jpg",
            "tags": "#겉은_차갑 #속은_달달 #친절함",
            "ex-dess": "풍미 가득한",
            "ex-bff": "차갑고 깔끔한",
            }, 
    "DBSH": {
            "drink": "핫 초코",
            "summary": "달달해서 자꾸 끌리는 당신!",
            "explain": "‣ 당신은 주변 사람들에게 넘치는 사랑을 받는 사람이자, 그만큼 사랑을 퍼주는 사람이에요.<br>‣ 적극적인 성향이 있어 때로는 수다스럽고, 인간관계를 중요시 하기 때문에 의리 있는 사람이라는 평을 들어요.<br>‣ 모든 것에 논리정연하진 않지만, 자신의 신념에 대한 강한 소신이 있어요.",
            "dessert": "오레오 스콘",
            "drink-bff": "따뜻한 바닐라 라떼",
            "img-drk": "hotchocolate.jpg",
            "img-dess": "oreo.jpg",
            "img-drk-bff": "vanila.jpg",
            "tags": "#사랑둥이 #경청왕 #정_많은_사람",
            "ex-dess": "달달하고 묵직한",
            "ex-bff": "바닐라 향처럼 로맨틱한",
            }, 
    "DBNI": {
            "drink": "블루베리 바나나 스무디",
            "summary": "겉은 진지해보여도 속은 달달한 겉진속달!",
            "explain": "‣ 논리와 현실성을 중요시하는 당신은 철두철미하게 계획을 세우고 목표를 향해 나아가는 사람이에요.<br>‣ 겉으로는 진지하고 어떨 땐 메말라보이지만 속은 그 누구보다 발랄하고 재미있어요.<br>‣ 개인적인 감정보단 객관적인 정보나 논리를 근거로 최대한 공정한 결정을 내리기 위해 노력하는 사람이에요.",
            "dessert": "솔티카라멜 휘낭시에",
            "drink-bff": "아이스 바닐라 라떼",
            "img-drk": "blueba.jpg",
            "img-dess": "saltcar.jpg",
            "img-drk-bff": "vanilaice.jpg",
            "tags": "#겉은_진지 #속은_달달 #겉진속달",
            "ex-dess": "고소하고 짭짤한",
            "ex-bff": "차갑지만 달달한",
            }, 
    "DBNH": {
            "drink": "따뜻한 자몽 애플티",
            "summary": "진지하고 따뜻한 당신!",
            "explain": "‣ 따뜻하지만 강단 있는 당신은 일에 헌신하여 모든 일을 완벽하게 하고자 하는 사람이에요.<br>‣ 감정을 솔직하게 표현할 줄 아는 사람으로, 솔직함이 장점이지만 때로는 상대방에게 상처를 주기도 해요.<br>‣ 강단 있는 성격으로 목표가 생기면 그 목표를 이루기 위해 최선을 다하고, 철저한 계획과 일의 효율을 중요시해요.",
            "dessert": "무화과 크림치즈 휘낭시에",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "grapefruit.jpg",
            "img-dess": "creamcheese.jpg",
            "img-drk-bff": "americano.jpg",
            "tags": "#강단있는 #배려하는 #따뜻한",
            "ex-dess": "포근 포근한",
            "ex-bff": "알 수 없는 매력의",
            },
};
