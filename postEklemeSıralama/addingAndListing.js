// postların bulunduğu veri yığını

const posts = [
    {
        title: "Hobilerim",
        content: ` Kitap okumayı, bilhassa tarih, ilim kurgu ve fantastik kitapları severim
                   Coğrafya, tarih ve teknolojiye ilgiliyim. Doğa ve doğal yaşamı merak ederim.
                   Fırsat buldukça birşeyler ekip biçmeyi, tarımı ve bahçeciliği severim.
                   Sık sık gold panning yaparım. Ormanda yürür, orman sesine bayılırım`
    },
    {
        title: "Gold Panning Hakkında",
        content: `Altın doğal olarak her yerde bulunur. Şu an üzerinde bulunduğunuz toprakta 
                  diğer bir çok element gibi altın da bulunuyor. Fakat belli bir oranda. Bulunulan yerin
                  coğrafi ve jeolojik şartlarına göre altın miktarı değişir.`

    }

]

// veri yığınındaki bilgileri listeleyen fonksiyon
const listPosts = () => {
    posts.forEach((item) => {
        console.log(item.title);
    })
}

// yeni postumuz 

const yeniPost = {
    title: "Yeni İçerik Başlığı",
    content: "Yeni içeriğimizin detayları"
}

// post ekleyen fonksiyon

const addPost = (post) => {

    const promise1 = new Promise((resolve, reject) => {
        posts.push(post);
        resolve(posts);
        reject("birşeyler yanlış gitti");
    })

    return promise1;
}


async function showPosts() {

    try {
        listPosts();
        console.log("////////////// GÜNCEL LİSTE //////////////")
        await addPost(yeniPost)
        listPosts();
    } catch (err) {
        console.log(err);
    }
}

showPosts();



