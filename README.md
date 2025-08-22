## GSAP: Ease — من رحلة التعلم

🔹 مش شرط الحركة في الأنيميشن تكون `linear` (سرعة ثابتة من الأول للآخر). ممكن تبدأ ببطء، تسرّع في النص، وبعدين تبطّأ في الآخر. ده بالظبط دور الـ ease.

أشهر أنواع الـ ease:

- **`linear`**: الحركة بثبات (من غير تباطؤ أو تسارع).
- **`power1.in`**: تبدأ ببطء وتسرّع.
- **`power1.out`**: تبدأ بسرعة وتبطّأ في الآخر.
- **`power1.inOut`**: بطيئة في الأول والآخر وسريعة في النص.
- **`elastic.out(1, 0.3)`**: الحركة كأنها مطاطية (بتنط).
- **`bounce.out`**: الحركة كأنها حاجة بتقع وترتد.

مثال بسيط:

```js
gsap.to(".box", {
  x: 200,
  duration: 2,
  ease: "bounce.out" // هيخلي البوكس يوصل للنقطة ويرتد
});
```

**الخلاصة**: `ease` = curve بيوصف إزاي السرعة هتتغير طول الأنيميشن. لو عايز حركة واقعية ومش ميكانيكية، الـ ease هو اللي بيظبط الطعم بتاعها.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
