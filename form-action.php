<?php
    $resultMBTI = $_GET['resultMBTI'];
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>당신의 음료는?</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
</head>
<body class="container">

    <main class="result" action="">
        <img id="img-drk" class="text-center mt-5" src="images/drink.png">
        <h2 id="drink" class="text-center">음료 이름</h2>
        <h3 id="summary" class="text-center">음료 한줄</h3>
        <p id="explain" class="text-center">음료 설명</p>
        <div class="result__more">
            <div class="result__dessert">
                <h3 class="text-center dess">나와 어울리는 디저트</h3>
                <img id="img-dess" class="mt-3" src="images/dessert.png">
                <h3 id="dessert" class="text-center mt-3">디저트 이름</h3>
            </div>
            <div class="result__bff">
                <h3 class="text-center dess">나와 잘 맞는 음료</h3>
                <img id="img-drk-bff" class="mt-3" src="images/drink.png">
                <h3 id="drink-bff" class="text-center mt-3">잘맞는 음료 이름</h3>
            </div>
        </div>
        
        <div id="more">
            <h5 class="more__des">미국인 크리스가 한국에서 창업한 사연은?</h5>
            <button class="btn btn-dark more__wz-btn" onclick="window.open('http://www.humanectlab.com/')">SEE WEBZINE</button>
            
            <div class="more__infos">
                <img class="more__img" src="images/groove.jpg">
                <ul class="more__list">
                    <h5 class="more__name">그루브 커피 로스터스</h5>
                    <li><i class="fas fa-map-marker-alt"></i>서울 노원구 동일로186길 64<button class="btn-cpy" data-clipboard-text="서울 노원구 동일로186길 64"><i class="far fa-copy"></i></button></li>
                    
                    <li><i class="fas fa-phone"></i>010-2613-5782</li>
                    <li><i class="far fa-clock"></i>10:00 ~ 22:00</li>
                    <a href="https://www.instagram.com/groovecoffeeroasters/" style="text-decoration: none; color: inherit;"><li><i class="fab fa-instagram"></i>groove coffee roasters</li></a>
                </ul>
            </div>
            <div class="more__sns">
                <h6 class="more__title text-center">결과 공유하기</h6>
                <ul>
                    <li><a href="#" onclick="javascript:window.open('https://www.facebook.com/sharer/sharer.php?u=' +encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" target="_blank" alt="Share on Facebook" ><img src="SNS_images/sns_face.png" width="40" alt="페이스북 공유하기"></a></li>
                    <li><a href="#" onclick="javascript:window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +encodeURIComponent(document.URL)+'%20-%20'+encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" target="_blank" alt="Share on Twitter" ><img src="SNS_images/sns_tw.png" width="40" alt="트위터 공유하기"></a></li>
                    <li><a id="create-kakao-link" href="javascript:;"><img src="SNS_images/sns_ka.png" width="40" alt="카카오톡 공유하기"></a></li>
                </ul>
            </div>
            <button type="button" class="btn btn-outline-dark more__btn" onclick="location.href='index.html'">테스트 다시하기</button>

            <footer class="mt-5" style="opacity: 0.3;">
                ©2021 All Rights Reserved
            </footer>
        </div>
    </main>
    
    <input type="hidden" id="CD" value="0">
    <input type="hidden" id="LB" value="0">
    <input type="hidden" id="SN" value="0">
    <input type="hidden" id="IH" value="0">
    <span style="display: none;">mbti : <?php echo $resultMBTI ?></span>

    <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script src="data.js"></script>
    <script>

        var num=1;
        //new ClipboardJS('.btn-cpy');
        
        /*
        var mbti="";
        $("#CD").val() < 1 ? mbti += "D" : mbti += "C";
        $("#LB").val() < 2 ? mbti += "B" : mbti += "L";
        $("#SN").val() < 2 ? mbti += "N" : mbti += "S";
        $("#IH").val() < 2 ? mbti += "H" : mbti += "I";
        */
                //alert(mbti);

        var mbti = localStorage.getItem("mbti");
        if(mbti===null || mbti===undefined){
            mbti = document.querySelector("#MBTI").val;
        } else {
            document.querySelector("#MBTI").setAttribute('value', mbti)
        }

        $("#img-drk").attr('src', "images/" + result[mbti]["img-drk"]);
        $("#img-dess").attr('src', "images/" + result[mbti]["img-dess"]);
        $("#img-drk-bff").attr('src', "images/" + result[mbti]["img-drk-bff"]);
        $("#drink").html(result[mbti]["drink"]);
        $("#dessert").html(result[mbti]["dessert"]);
        $("#drink-bff").html(result[mbti]["drink-bff"]);
        $("#explain").html(result[mbti]["explain"]);
        $("#summary").html(result[mbti]["summary"]);


        $('.btn-cpy').tooltip({
            trigger: 'click',
            placement: 'bottom'
        });

        function setToolTip(message){
            $('.btn-cpy').tooltip('hide').attr('data-original-title', message).tooltip('show');
        }

        function hideToolTip(){
            setTimeout(function(){
                $('.btn-cpy').tooltip('hide');
            }, 1000);
        }

        var clipboard = new ClipboardJS('.btn-cpy');

        clipboard.on('success', function(e){
            setToolTip('복사 되었습니다!');
            hideToolTip();
        });

        clipboard.on('error', function(e){
            setToolTip('복사에 실패했습니다');
            hideToolTip();
        });

        // SDK 초기화. 권은빈의 JS KEY
        Kakao.init(MYKEY);
        console.log(Kakao.isInitialized());

        Kakao.Link.createDefaultButton({
        container: '#create-kakao-link',
        objectType: 'feed',
        content: {
            title: document.querySelector("#drink").innerText,
            description: '#내가_음료라면? #성격테스트 #mbti #그루브커피 #휴먼커넥터',
            imageUrl: document.querySelector("#img-drk").src,
            link:{
                mobileWebUrl: 'https://groove-coffee-test.netlify.app/result.html',
                webUrl: 'https://groove-coffee-test.netlify.app/result.html'
            },
        },
            buttons: [
                {
                    title: '웹에서 보기',
                    link: {
                        mobileWebUrl: 'https://groove-coffee-test.netlify.app/result.html',
                        webUrl: 'https://groove-coffee-test.netlify.app/result.html'
                    },
                },
            ]  
        });
        

    </script>

</body>
</html>
