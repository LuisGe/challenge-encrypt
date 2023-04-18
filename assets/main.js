const InputText = document.getElementById('input-text')
const OutputText = document.getElementById('output-text')
const BtnEncrypt = document.getElementById('btn-encrypt')
const BtnDecrypt = document.getElementById('btn-decrypt')
const BtnCopyText = document.getElementById('btn-copy')
const SectionDefoult = document.getElementById('section-default')
const SectionResult = document.getElementById('section-result')
function encryptText(){
    const text = InputText.value
    const words = text.split('')
    let new_text = ''
    words.forEach(word => {
        switch (word) {
            case 'a':
                new_text += 'ai'
                break;
            case 'e':
                new_text += 'enter'
                break;
            case 'i':
                new_text += 'imes'
                break;
            case 'o':
                new_text += 'ober'
                break;
            case 'u':
                new_text += 'ufat'
                break;        
            default:
                new_text += word
                break;
        }
    });
    setResult(new_text)
}
function decryptText(){
    const text = InputText.value
    const words = text.split('')
    let new_text = ''
    let i = 0
    const key_word = 
        {
            a : "ai",
            e : "enter",
            i : "imes",
            o : "ober",
            u : "ufat"
        }
    while(i < words.length){
        new_text += words[i]
        i += Object.keys(key_word).includes(words[i]) ? key_word[words[i]].length : 1
    }
    setResult(new_text)    
}
function valToLoweCase($this){
	$this.value=$this.value != '' ? $this.value.toLowerCase() : ''
}
function withoutAccent(text){
    let from = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç'
    let to = 'AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc'
    let expresion = new RegExp('['+from+']' , 'ug');
    return text.replace(expresion, match => to.charAt(from.indexOf(match)))
}
function clearResult(){
    SectionDefoult.classList.remove('hidden')
    SectionResult.classList.add('hidden')
    InputText.value = ''
    OutputText.value = ''
}
function setResult(value){
    SectionDefoult.classList.add('hidden')
    SectionResult.classList.remove('hidden')
    OutputText.value = value
    InputText.value = ''
}
function copyText(){
    OutputText.focus()
    OutputText.select();
    document.execCommand("copy");
}

BtnEncrypt.addEventListener('click',encryptText)
BtnDecrypt.addEventListener('click',decryptText)
BtnCopyText.addEventListener('click',copyText)
InputText.addEventListener('input',function(){
    this.value = withoutAccent(this.value)
    valToLoweCase(this)
})
window.addEventListener('load',clearResult)