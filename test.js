// "express" modülünü içe aktarıyoruz:
const express = require("express");

// "path" modülünü içe aktarıyoruz:
const path = require("path");

const app = express();

// İstikameti belirlemek ve istemciye nasıl erişileceğini belirtmek için bir ara yazılım kullanıyoruz.
// Her dosyanın HTML dosyası olarak yüklenmemesi için express'e, her zaman index dosyasını yüklememesini söylememiz gerekiyor.
app.use("/static", express.static("public", { index: false }));
// Verileri "public" klasöründen alıyoruz ve istemciye "static" yoluyla sunuyoruz.

const port = 3000;

// app.get(); ile "GET" yöntemi için bir denetleyici oluşturuyoruz.
// Bir denetleyici, istekleri ve yanıtları işleyebilen, isteğe özel program kodunu yürüten bir yöntemdir.
// Bu, isteğe ait tüm program içeriğini .get(); geri aramasının içinde düzenli, anlaşılır ve bakımı kolay bir şekilde bulundurmanın daha iyi bir yolu olduğu anlamına gelir.

// Kök dizin "/"'de basit bir GET isteği. Test amaçlıdır. "localhost:3000" adresinde erişilebilir.
app.get("/", (req, res) => {
  // İstek nesnesini ve yanıt nesnesini çıktı olarak alabiliriz:
  // console.log(req);

  // İstek nesnesini çıktı olarak aldığımızda, isteğe özgü bilgileri görebiliriz, örneğin:
  console.log(req.url); // İstenen URL
  console.log(req.method); // Kullanılan yöntem

  // Yanıt nesnesini de çıktı olarak alabiliriz:
  console.log(res);

  // Bir yanıt gönderiyoruz, res.send(); ile ve önce durumu da ekliyoruz. Her zaman bir yanıt göndermeliyiz, aksi takdirde istemci donar.
  res.status(200).send("Merhaba Dünya!");
});

// Başka bir yol için GET isteği:
app.get("/merhaba", (req, res) => {
  // req.url ile mevcut yolu çıktı olarak alabiliriz:
  console.log("Mevcut Yol:", req.url);

  // .json(); ile yanıtı doğrudan JSON olarak da döndürebiliriz, bu özellikle API'ler geliştirirken çok uygundur.
  res.status(200).json({ merhaba: "dünya" });
});

// /kullanici/Max => sayfada Max'in bilgileri görüntülenir
// /kullanici/Dirk => sayfada Dirk'in bilgileri görüntülenir
// Bir istekte express ile parametre olarak yol içeriği de iletebiliriz, bunu react-router'da da görmüştük.
app.get("/kullanici/:id/", (req, res) => {
  // Parametreleri req.params nesnesinden alıyoruz, deconstructuring ile doğru verileri nesneden alabiliriz.
  const { id } = req.params;

  // Kullanıcı kimliğini URL'den çok kolay bir şekilde alabiliriz:
  console.log("KULLANICI:", id);

  // Örneğin localhost:3000/kullanici/yan adresine gittiğimizi düşünelim.
  const users = [
    {
      name: "Dirk",
      isAdmin: true,
    },
    {
      name: "Max",
      isAdmin: false,
    },
  ];

  const currentUser = users.filter((user) => user.name === id);

  // Verileri yanıta da yazıyoruz:
  res.status(200).json(currentUser[0]);
});

// Express, dosyaları doğrudan sunabilir:
app.get("/anasayfa", (req, res) => {
  // Örneğin, bir web sitesini görüntülemek için bir HTML dosyası yüklemek istediğimizde, .sendFile(); yanıt yöntemini kullanırız. Bu yöntem isteğe belirtilen statik dosyayı istemciye gönderir.

  // path.join(); ile mevcut yolu ve istenen dosyayı birleştirerek public klasörümüze erişebiliriz ve HTML dosyasını yükleyebiliriz:
  res.status(200).sendFile(path.join(__dirname, "../public/index.html")); // __dirname, JavaScript dosyasının çalıştırıldığı yolu veren bir ortam değişkenidir.

  // Gördüğümüz gibi, tek tek dosyaları görüntüleyebiliriz, ancak stil sayfamız yüklenmez. HTTP'ye karşı, middleware ile express'te tüm içeriklerimizi, hem HTML, CSS, hem de js dosyaları veya resimler için kullanılacak statik bir klasörde sunabiliriz.
});

// Sunucunun belirtilen adreste istekleri beklemesi için .listen(); yöntemini çağırıyoruz.
app.listen(port, () => {
  console.log(`Sunucu port ${port}'da çalışıyor`);
});
