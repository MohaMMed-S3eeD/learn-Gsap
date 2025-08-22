## Timeline :  




## 🔹 الأول: الفكرة العامة

الـ **Timeline** = خط زمني بتحط فيه الـ animations بالترتيب اللي انت عايزه.
تقدر تقول كأنك بتعمل فيلم:

* الـ **Scenes** = Animations (to / from / fromTo).
* الـ **Timeline** = الفيلم كله مترتب.

---

## 🔹 إزاي بيتكون

```js
const tl = gsap.timeline({
  repeat: -1,   // يعيد نفسه عدد لا نهائي
  yoyo: true,   // لما يخلص يشتغل بالعكس
  defaults: { duration: 1, ease: "power1.inOut" } // إعدادات افتراضية
});
```

💡 أي animation جوه الـ timeline ده هياخد الـ defaults دي (لو ما حطيتش ليه قيم خاصة).

---

## 🔹 إضافة Animations

فيه ٣ طرق رئيسية:

1. **tl.to()**

   ```js
   tl.to(".box", { x: 200 });
   ```

   يحرك العنصر من حالته الحالية لغاية `x:200`.

2. **tl.from()**

   ```js
   tl.from(".title", { opacity: 0, y: -50 });
   ```

   يبدأ من الحالة دي (شفاف وفوق شوية) وبعدين يروح لحالته الطبيعية.

3. **tl.fromTo()**

   ```js
   tl.fromTo(".circle", { scale: 0 }, { scale: 1 });
   ```

   تحدد البداية والنهاية.

---

## 🔹 التحكم في التوقيت

### 1. بالترتيب العادي

```js
tl.to(".box1", { x: 200 });
tl.to(".box2", { y: 200 });
```

(التاني يبدأ بعد ما الأول يخلص).

---

### 2. تخليهم في نفس الوقت

```js
tl.to(".box1", { x: 200 });
tl.to(".box2", { y: 200 }, "<"); // "<" معناها يبدأ مع اللي قبله
```

---

### 3. تعمل تأخير داخلي

```js
tl.to(".box1", { x: 200 });
tl.to(".box2", { y: 200 }, "+=0.5"); // يبدأ بعد نص ثانية من الأول
```

---

## 🔹 التحكم في الـ Timeline نفسه

تقدر تتعامل مع الـ Timeline كأنه Animation وحدة:

```js
tl.play();   // يشغل
tl.pause();  // يوقف
tl.reverse(); // يشغل بالعكس
tl.seek(2);   // يروح لثانية 2
tl.restart(); // يعيد من الأول
```

---

## 🔹 مثال عملي (Landing Page Animation)

```js
const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

tl.from(".navbar", { y: -100, opacity: 0 })          // ينزل الناف بار من فوق
  .from(".hero-title", { x: -200, opacity: 0 })     // بعده العنوان ييجي من الشمال
  .from(".hero-subtitle", { x: 200, opacity: 0 }, "<") // مع العنوان بس من ناحية تانية
  .from(".cta-button", { scale: 0, opacity: 0 });   // الزرار يكبر من ولا حاجة
```

🔎 النتيجة:

* الـ Navbar ينزل الأول.
* بعدها العنوان الرئيسي يطلع من الشمال.
* في نفس الوقت الـ Subtitle يطلع من اليمين.
* وفي الآخر زرار CTA يبان.

---

## 📝 الخلاصة

* الـ **Timeline** بيسهّل إدارة Animations بدل ما تتحكم في delays يدوي.
* فيه مرونة كبيرة: ترتيب – تشغيل مع بعض – إضافة تأخيرات – تحكم كامل (play/pause/reverse).
* مناسب جدًا للمشاريع الكبيرة زي **Landing Pages** أو **Animations معقدة**.

---

