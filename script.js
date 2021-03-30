var req = new XMLHttpRequest( );                                // 객체 생성
    req.open("GET","./images.json");                            //이미지파일을 얻어 오도록 설정
    req.onreadystatechange = function( ) {                      //콜백 함수
        if (this.readyState == 4) {                             //모든 데이터가 정상으로 수신되었을 때
        console.log(this.response);                             //
        var data = JSON.parse(this.response);                   //parse 사진을들 분리해서 자른다.
            for (var i = 0; i < data.length; i++) {             //11장의 사진들을 각각 읽어서 추가
                var div = document.createElement("div");        //div 태그로 나누어 이미지 넣기
                div.setAttribute("class", "image");             //이미지를 클래스로 덮기
                div.onclick = function( ) {
                this.classList.toggle("image-selected") // if 조건문을 classList 명령으로 수정
                    };
                    div.onmouseover = function( ) {
                        var element = this;
                        setTimeout(function( ) {
                            element.classList.add("image-magnified");
                        }, 1000);
                    };
                    div.onmouseout = function( ) {
                        this.classList.remove("image-magnified");
                    };
                var img = document.createElement("img");        //이미지 태그로 문서 띄우기
                img.src = data[i];                              //각각의 사진들을 한장씩 뿌리기
                div.appendChild(img);                           //div 아래 사친추가
                document.body.appendChild(div);                 //문서의 body 에 넣기
        }
    }
}

function selectAll(btn) {
    var images = document.getElementsByClassName("images");
    for (var i = 0; i < images.length; i++) {
        if (btn.value == "Unselect All") {
            images[i].classList.remove("image-selected");
        } else {
            images[i].classList.add("image-selected");
        }
    }

    if (btn.value == "Unselect All") {
        btn.value = "select All";
    } else {
        btn.value = "Unselect All"
    }
}

var intervalId = setInterval(function( ) {
    images[index].classList.remove("image-magnified");
    index++;
    if (index < images.length) {           
        images[index].classList.add("image-magnified");
    }
    else {                                 
        clearInterval(intervalId);
    }
}, 1000);

function slideshow(btn) {
    var images = document.getElementsByClassName("image");
    var index = 0; 
    var intervalId = setInterval(function( ) {
        images[index].classList.remove("image-magnified");
        index++;
        if (index < images.length) {           
            images[index].classList.add("image-magnified");
        }
        else {                                 
            clearInterval(intervalId);
        }
    }, 1000);
}
req.send();
