

const newline = "\r\n";
let operationChoice  = Number(prompt("Merhaba, yapmak istediğiniz işlemi seçiniz:" + newline +
"1- BAKİYE GÖRÜNTÜLEME" + newline +
"2- PARA ÇEKME" + newline +
"3- PARA YATIRMA" + newline +
"4- EXIT"));

var balance = 1000;
if (operationChoice  === 1 || operationChoice  === 2 || operationChoice  === 3 || operationChoice  === 4) {
    switch (operationChoice ) {
        case 1:
            console.log("balanceniz: " + balance + " TL");
            break;
        case 2:
            let withdrawalAmount = Number(prompt("Çekmek istediğiniz tutarı giriniz"));
            if (withdrawalAmount > balance) {
                alert("Üzgünüm, balanceniz yetersiz.");
            } else {
                console.log("Çekilen tutar: " + withdrawalAmount + " TL, kalan balance: " + (balance - withdrawalAmount) + " TL");
            }
            break;
        case 3:
            let depositAmount = Number(prompt("Yatırmak istediğiniz tutarı giriniz."));
            if (depositAmount < 0) {
                alert("Hatalı balance girişi.");
            } else {
                console.log("Toplam balanceniz: " + (depositAmount + balance) + " TL");
            }
            break;
        case 4:
            alert("Hesaptan çıkış yapılıyor...");
            break;
        default:
            break;
    }
} else {
    alert("Hatalı seçim yaptınız!!!");
}
