/*
    Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.


    employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
    Bu veriyi okuyalım. (READ)
    Bu veriyi güncelleyelim.
    Dosyayı silelim.


    Kolay gelsin.
*/


const dosyaSistemi = require('fs');

// oluştuma, yazma
dosyaSistemi.writeFile(
    'employees.json', 
    '{"name": "Employee 1 Name", "salary": 2000}', 
    'utf8', 
    (err) => {
        if(err){
            console.log(err);
        } 
        console.log("dosya oluşturuldu");
    }
)

// içeriği okuma
dosyaSistemi.readFile(
    'employees.json', 'utf8', 
    (err, data) => {
        console.log('Dosya Okunuyor..')
        if(err){
            console.log(`Hata: ${err}`);
        } else {
            console.log(`İşlem başarılı: ${data}`);
        }
    }
)

// Güncelleme
dosyaSistemi.appendFile(
    'employees.json',
    '\n{"name": "Çaylak", "salary": 4000}',
    'utf8',
    (err) => {
        if(err){
            console.log(err);
        }
    }
);

// Silme

dosyaSistemi.unlink('employees.json', (err) => {
    if(err){
        console.log(err);
    }
});
