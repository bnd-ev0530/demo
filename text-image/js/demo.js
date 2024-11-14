var  codeTemplate = 'var message = %MESSAGE%;\
var style = %STYLE%;\
var textImage = TextImage(style);\
var img = textImage.toImage(message);\
',
    textImage,
    form,
    textarea,
    gridLine,
    imageDisplay, imageDownload,
    codeExample;

function init() {
    textImage = TextImage();
    form = document.querySelector('form');
    textarea = form.querySelector('textarea[name="image-text"]');
    gridLine = form.querySelector('input[name="grid-line"]');
    imageDisplay = form.querySelector('.image-display');
    imageDownload = form.querySelector('.image-download');
    codeExample = document.querySelector('.code-example');

    // 실시간 변경
    form.addEventListener('change', updateImage, false);
    textarea.addEventListener('keyup', updateImage, false);
    updateImage();

    // 버튼 클릭 이벤트 리스너 추가
    //const generateButton = document.querySelector('.generate-button');
    //generateButton.addEventListener('click', updateImage, false);
}

function updateImage() {
    var style = {
            font: form.querySelector('select[name="font-family"]').value,
            align: form.querySelector('select[name="font-align"]').value,
            color: form.querySelector('input[name="font-color"]:checked').value,
            size: parseInt(form.querySelector('input[name="font-size"]').value),

            background: form.querySelector('input[name="background-color"]:checked').value,
            stroke: parseInt(form.querySelector('input[name="stroke"]').value),
            strokeColor: form.querySelector('input[name="stroke-color"]:checked').value,
            lineHeight: form.querySelector('input[name="line-height"]').value +
                form.querySelector('select[name="line-height-unit"]').value,
            bold: form.querySelector('input[name="bold"]').checked,
            italic: form.querySelector('input[name="italic"]').checked
        },
        message = textarea.value;
    if (!message) {
        codeExample.innerHTML = imageDisplay.innerHTML = '';
        codeExample.style.display = 'none';
        return;
    }
    textImage.setStyle(style);
    textarea.setAttribute('style',
        'font: ' + textImage.style.size + 'pt ' + textImage.style.font + ';' +
        'text-align: ' + textImage.style.align + ';' +
        'line-height: ' + textImage.style.lineHeight + ';' +
        'color: ' + textImage.style.color + ';');
    textImage.toImage(message, function () {
        this.style.width = "228px"; // Set the desired width
        this.style.height = "228px"; // Set the desired height
        // this.style.backgroundColor = style.background;
        // if (gridLine.checked) {
        //     this.style.background = textarea.style.backgroundImage = 'url(../demo/img/grid-line.png)';
        // } else {
        //     this.style.backgroundImage = textarea.style.backgroundImage = 'none';
        // }
         // Set background color and dimensions on text image itself
         this.style.backgroundColor = style.background;
        imageDisplay.innerHTML = this.outerHTML;

        const imgElement = document.createElement('img');
        
        imgElement.style.width = "228px"; 
        imgElement.style.height = "228px";   
        imgElement.src = this.src; // this.src를 사용하여 이미지 URL을 가져옵니다.

    imageDisplay.innerHTML = ''; // 이전 내용을 지우고
    imageDisplay.appendChild(imgElement); // 새로운 이미지를 추가합니다.
    
    // imageDownload.href = imgElement.src; // 다운로드 링크 설정
    //     imageDisplay.appendChild(imageDownload);


// Create a 400x400 canvas to draw the image
const canvas = document.createElement('canvas');
canvas.width = 228;
canvas.height = 228;
const ctx = canvas.getContext('2d');

// Draw background on the main canvas
ctx.fillStyle = style.background;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Wait for the image to load and draw it centered on the 400x400 canvas
imgElement.onload = function() {
    const x = (canvas.width) ;
    const y = (canvas.height);
    ctx.drawImage(imgElement, 0, 0, x, y);
    
    // Display the final canvas
    imageDisplay.innerHTML = '';
    imageDisplay.appendChild(canvas);

    // Set up download link
    imageDownload.href = canvas.toDataURL();
    imageDownload.download = 'text-image.png';
    imageDisplay.appendChild(imageDownload);
};

    });
    var template = codeTemplate.replace('%MESSAGE%', JSON.stringify(textarea.value, null, 4));
    codeExample.innerHTML = template.replace('%STYLE%', JSON.stringify(textImage.style, null, 4));
    codeExample.style.display = 'block';
}

window.addEventListener('load', init, false);
