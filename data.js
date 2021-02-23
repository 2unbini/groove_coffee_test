var q = {
    1 : {
        type: "CD",
        title: "1. 커피와 그 외 음료 중 어떤 것을 추천받고 싶으신가요?",
        A: "커피요!",
        B: "커피 아닌 거요!"
    },
    2 : {
        type: "IH",
        title: "2. 음료는 역시,",
        A: "차가운 음료지!",
        B: "따뜻한 음료지~"
    },
    3 : {
        type: "LW",
        title: "3. 맛의 여운이 오래 남는 것을 좋아하시나요?",
        A: "아니다, 깔끔한 게 좋다.",
        B: "그렇다, 풍미가 좋다."
    },
    4 : {
        type: "LW",
        title: "4. 산뜻함과 묵직함 중 어떤 걸 선호하시나요?",
        A: "산뜻한게 좋다.",
        B: "묵직한게 좋다."
    },
    5 : {
        type: "LW",
        title: "5. 지금 배가 부른가요?",
        A: "네",
        B: "아니요"
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
        type: "SN",
        title: "8. 숙제입니다 여러분",
        A: "단게 조아",
        B: "단거 시러"
    }
}


var result = {
    "CLSI": {
            "drink": "아이스 바닐라 라떼",
            "explain": "아이스 바닐라 라떼를 좋아하는 당신은<br> 아이스 바닐라 라떼를 좋아하는군요!",
            "dessert": "무화과 마들렌",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            }, 
    "CLSH": {
            "drink": "따뜻한 바닐라 라떼",
            "explain": "따뜻한 바닐라 라떼를 좋아하는 당신은<br> 따뜻한 바닐라 라떼를 좋아하는군요!",
            "dessert": "치즈케이크",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            }, 
    "CLNI": {
            "drink": "아이스 필터 커피 - 에티오피아",
            "explain": "아이스 필터 커피 - 에티오피아를 좋아하는 당신은<br> 아이스 필터 커피 - 에티오피아를 좋아하는군요!",
            "dessert": "초코 마들렌",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            }, 
    "CLNH": {
            "drink": "에스프레소 마키아또",
            "explain": "에스프레소 마키아또를 좋아하는 당신은<br> 에스프레소 마키아또를 좋아하는군요!",
            "dessert": "레몬 마들렌",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            }, 
    "CWSI": {
            "drink": "아포가토",
            "explain": "아포가토를 좋아하는 당신은<br> 아포가토를 좋아하는군요!",
            "dessert": "치즈케이크",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            }, 
    "CWSH": {
            "drink": "카라멜 라떼",
            "explain": "카라멜 라떼를 좋아하는 당신은<br> 카라멜 라떼를 좋아하는군요!",
            "dessert": "무화과 마들렌",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            }, 
    "CWNI": {
            "drink": "플랫 화이트",
            "explain": "플랫 화이트를 좋아하는 당신은<br> 플랫 화이트를 좋아하는군요!",
            "dessert": "치즈케이크",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            }, 
    "CWNH": {
            "drink": "따뜻한 라떼",
            "explain": "따뜻한 라떼를 좋아하는 당신은<br> 따뜻한 라떼를 좋아하는군요!",
            "dessert": "레몬 마들렌",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            }, 
    "DLSI": {
            "drink": "오미자 에이드",
            "explain": "오미자 에이드를 좋아하는 당신은<br> 오미자 에이드를 좋아하는군요!",
            "dessert": "치즈케이크",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            }, 
    "DLSH": {
            "drink": "따뜻한 오미자차",
            "explain": "따뜻한 오미자차를 좋아하는 당신은<br> 따뜻한 오미자차를 좋아하는군요!",
            "dessert": "치즈케이크",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            }, 
    "DLNI": {
            "drink": "아이스 레몬 히비스커스 티",
            "explain": "아이스 레몬 히비스커스 티를 좋아하는 당신은<br> 아이스 레몬 히비스커스 티를 좋아하는군요!",
            "dessert": "치즈케이크",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            }, 
    "DLNH": {
            "drink": "따뜻한 레몬차",
            "explain": "차가운 아메리카노를 좋아하는 당신은<br> 차가운 아메리카노를 좋아하는군요!",
            "dessert": "치즈케이크",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            }, 
    "DWSI": {
            "drink": "딸기 바나나 스무디",
            "explain": "딸기 바나나 스무디를 좋아하는 당신은<br> 딸기 바나나 스무디를 좋아하는군요!",
            "dessert": "치즈케이크",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            }, 
    "DWSH": {
            "drink": "핫 초코",
            "explain": "핫 초코를 좋아하는 당신은<br> 핫 초코를 좋아하는군요!",
            "dessert": "치즈케이크",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            }, 
    "DWNI": {
            "drink": "블루베리 바나나 스무디",
            "explain": "블루베리 바나나 스무디를 좋아하는 당신은<br> 블루베리 바나나 스무디를 좋아하는군요!",
            "dessert": "치즈케이크",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            }, 
    "DWNH": {
            "drink": "따뜻한 자몽 애플티",
            "explain": "따뜻한 자몽 애플티를 좋아하는 당신은<br> 따뜻한 자몽 애플티를 좋아하는군요!",
            "dessert": "치즈케이크",
            "img-drk": "iamericano.jpg",
            "img-dess": "cheesecake.jpg"
            },
};