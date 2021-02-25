var q = {
    1 : {
        type: "CD",
        title: "1. 커피와 그 외 음료 중 어떤 것을 추천받고 싶으신가요?",
        A: "커피요!",
        B: "커피 아닌 거요!"
    },
    2 : {
        type: "LB",
        title: "2. 맛의 여운이 오래 남는 것을 좋아하시나요?",
        A: "아니다, 깔끔한 게 좋다.",
        B: "그렇다, 풍미가 좋다."
    },
    3 : {
        type: "LB",
        title: "3. 맛의 여운이 오래 남는 것을 좋아하시나요?",
        A: "아니다, 깔끔한 게 좋다.",
        B: "그렇다, 풍미가 좋다."
    },
    4 : {
        type: "LB",
        title: "4. 산뜻함과 묵직함 중 어떤 걸 선호하시나요?",
        A: "산뜻한게 좋다.",
        B: "묵직한게 좋다."
    },
    5 : {
        type: "SN",
        title: "5. 단거묻는질문",
        A: "단게 조아",
        B: "단거 시러"
    },
    6 : {
        type: "SN",
        title: "6. 기분이 꿀꿀한 당신의 선택은?",
        A: "침샘 폭발 초코케이크를 허버허버 먹는다.",
        B: "눈에는 눈 이에는 이(?) 쓰디 쓴 소주를 마신다."
    },
    7 : {
        type: "SN",
        title: "7. 초코는 역시,",
        A: "달달한게 최고! 밀크초코지~",
        B: "쌉쌀한게 좋아. 다크초코지!"
    },
    8 : {
        type: "IH",
        title: "8. 음료는 역시,",
        A: "차가운 음료지!",
        B: "따뜻한 음료지~"
    },
    9 : {
        type: "IH",
        title: "9. 음료는 역시,",
        A: "차가운 음료지!",
        B: "따뜻한 음료지~"
    },
    10 : {
        type: "IH",
        title: "10. 음료는 역시,",
        A: "차가운 음료지!",
        B: "따뜻한 음료지~"
    }
}


var result = {
    "CLSI": {
            "drink": "아이스 바닐라 라떼",
            "summary": "한줄요약",
            "explain": "아이스 바닐라 라떼를 좋아하는 당신은<br> 아이스 바닐라 라떼를 좋아하는군요!",
            "dessert": "무화과 마들렌",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "CLSH": {
            "drink": "따뜻한 바닐라 라떼",
            "summary": "한줄요약",
            "explain": "따뜻한 바닐라 라떼를 좋아하는 당신은<br> 따뜻한 바닐라 라떼를 좋아하는군요!",
            "dessert": "치즈케이크",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "CLNI": {
            "drink": "아이스 필터 커피 - 에티오피아",
            "summary": "한줄요약",
            "explain": "아이스 필터 커피 - 에티오피아를 좋아하는 당신은<br> 아이스 필터 커피 - 에티오피아를 좋아하는군요!",
            "dessert": "초코 마들렌",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "ifilter.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "CLNH": {
            "drink": "에스프레소 마키아또",
            "summary": "한줄요약",
            "explain": "에스프레소 마키아또를 좋아하는 당신은<br> 에스프레소 마키아또를 좋아하는군요!",
            "dessert": "레몬 마들렌",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "CBSI": {
            "drink": "아포가토",
            "summary": "한줄요약",
            "explain": "아포가토를 좋아하는 당신은<br> 아포가토를 좋아하는군요!",
            "dessert": "치즈케이크",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "CBSH": {
            "drink": "카라멜 라떼",
            "summary": "한줄요약",
            "explain": "카라멜 라떼를 좋아하는 당신은<br> 카라멜 라떼를 좋아하는군요!",
            "dessert": "무화과 마들렌",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "CBNI": {
            "drink": "플랫 화이트",
            "summary": "한줄요약",
            "explain": "플랫 화이트를 좋아하는 당신은<br> 플랫 화이트를 좋아하는군요!",
            "dessert": "치즈케이크",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "CBNH": {
            "drink": "따뜻한 라떼",
            "summary": "한줄요약",
            "explain": "따뜻한 라떼를 좋아하는 당신은<br> 따뜻한 라떼를 좋아하는군요!",
            "dessert": "레몬 마들렌",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DLSI": {
            "drink": "오미자 에이드",
            "summary": "한줄요약",
            "explain": "오미자 에이드를 좋아하는 당신은<br> 오미자 에이드를 좋아하는군요!",
            "dessert": "치즈케이크",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DLSH": {
            "drink": "따뜻한 오미자차",
            "summary": "한줄요약",
            "explain": "따뜻한 오미자차를 좋아하는 당신은<br> 따뜻한 오미자차를 좋아하는군요!",
            "dessert": "치즈케이크",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DLNI": {
            "drink": "아이스 레몬 히비스커스 티",
            "summary": "한줄요약",
            "explain": "아이스 레몬 히비스커스 티를 좋아하는 당신은<br> 아이스 레몬 히비스커스 티를 좋아하는군요!",
            "dessert": "치즈케이크",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DLNH": {
            "drink": "따뜻한 레몬차",
            "summary": "한줄요약",
            "explain": "차가운 아메리카노를 좋아하는 당신은<br> 차가운 아메리카노를 좋아하는군요!",
            "dessert": "치즈케이크",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DBSI": {
            "drink": "딸기 바나나 스무디",
            "summary": "한줄요약",
            "explain": "딸기 바나나 스무디를 좋아하는 당신은<br> 딸기 바나나 스무디를 좋아하는군요!",
            "dessert": "치즈케이크",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DBSH": {
            "drink": "핫 초코",
            "summary": "한줄요약",
            "explain": "핫 초코를 좋아하는 당신은<br> 핫 초코를 좋아하는군요!",
            "dessert": "치즈케이크",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DBNI": {
            "drink": "블루베리 바나나 스무디",
            "summary": "한줄요약",
            "explain": "블루베리 바나나 스무디를 좋아하는 당신은<br> 블루베리 바나나 스무디를 좋아하는군요!",
            "dessert": "치즈케이크",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            }, 
    "DBNH": {
            "drink": "따뜻한 자몽 애플티",
            "summary": "한줄요약",
            "explain": "따뜻한 자몽 애플티를 좋아하는 당신은<br> 따뜻한 자몽 애플티를 좋아하는군요!",
            "dessert": "치즈케이크",
            "drink-bff": "따뜻한 아메리카노",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg",
            "img-drk-bff": "hcoffee.jpg"
            },
};
