# 📚 Ensclo

İngilis dilini **B1 · B2 · C1** səviyyələrində öyrənmək üçün interaktiv web app.
Hər topic bir **mövzu + bir qrammatika nöqtəsi** öyrədir: lüğət, oxu mətni,
flashcard-lar və quiz daxildir. İzahlar əsasən ingiliscə, çətin yerlərdə
azərbaycanca qısa qeydlərlə.

## Texnologiya

- **Vite + React + TypeScript**
- **Tailwind CSS**
- **React Router** (HashRouter — GitHub Pages uyğunluğu üçün)
- Proqres brauzerdə **localStorage**-da saxlanır (backend hələ yoxdur)

## İşə salmaq (development)

```bash
npm install
npm run dev      # http://localhost:5173
```

Digər əmrlər:

```bash
npm run build    # production build → dist/
npm run preview  # build-i lokal yoxla
```

## Yeni topic əlavə etmək

1. `src/content/topics/` içində yeni fayl yarat (məs. `b1-food.ts`).
2. `Topic` tipinə uyğun obyekt ixrac et (`src/content/types.ts`-ə bax).
3. `src/content/index.ts`-də idxal edib `topics` siyahısına əlavə et.

App qalan hər şeyi — siyahı, filter, flashcard və quiz — avtomatik yaradır.

### Topic strukturu

```
Topic
├── leadIn        (mövzuya giriş sualları)
├── vocabulary[]  (söz + EN tərif + nümunə + collocations + AZ qeyd)
├── grammar       (qayda + EN izah + AZ qeyd + nümunələr)
├── reading       (mətn + anlama sualları)
├── speaking[]    (danışıq tapşırıqları)
├── writing       (yazı tapşırığı)
└── quiz[]        (gap-fill / multiple-choice qarışıq)
```

## Grammar (Qrammatika) əlavə etmək

Qrammatika **topic-dən asılı olmayan** müstəqil bölmədir (Connectors kimi —
eager idxal, manifest/lazy-load yoxdur). Bir fayl = bir kateqoriya.

1. `src/content/grammar/` içində kateqoriya faylına yeni `GrammarRule` əlavə et
   (məs. `tenses.ts`). Tip üçün `src/content/types.ts` → `GrammarGroup`-a bax.
2. Tamamilə yeni kateqoriya üçün: yeni fayl yarat, `GrammarCategory` tipinə
   id əlavə et və `src/content/grammar.ts`-də `GRAMMAR_META` + `grammarGroups`-a
   qeydiyyatdan keçir (ikon + sıra).

Hər kateqoriyada qaydalar (`rules[]`) + `practice[]` quiz olur; səhifə, səviyyə
filtri, kart və quiz avtomatik yaranır.

## GitHub Pages-ə deploy

Layihə avtomatik deploy üçün hazırdır:

1. Repo-nu GitHub-a push et (`main` branch).
2. GitHub-da **Settings → Pages → Build and deployment → Source** = **GitHub Actions** seç.
3. Hər `main`-ə push-da `.github/workflows/deploy.yml` workflow-u build edib deploy edir.

Sayt belə açılacaq: `https://<github-istifadeci>.github.io/ensclo/`

> **Qeyd:** `vite.config.ts`-dəki `base: "/ensclo/"` GitHub repo adı ilə eyni
> olmalıdır. Yəni repo **`ensclo`** adlanmalıdır (repo adını dəyişsən, `base`-i də dəyiş).

## Səviyyələr

| Səviyyə | Rəng | Hədəf |
|---------|------|-------|
| **B1** | 🟢 yaşıl | gündəlik mövzular, əsas zamanlar |
| **B2** | 🔵 mavi | mücərrəd mövzular, mürəkkəb qrammatika |
| **C1** | 🟣 bənövşəyi | akademik/abstrakt mətnlər, incə strukturlar |
