
---

Пора от общих языков начинать двигаться к математике. Важно понимать, что язык математики не такой уж и уникальный. Во многих различных научных областях пользуются знаковыми системами, которые похожи на язык математики.

Например, музыкальная нотация, язык формальной логики, язык химии и другие.

Все подобные языки, включая и сам язык математики, будем называть математическими языками.

{ #math-lang }
@definition
    title: Математический язык
    showTitle: false
    content: |
        <ab-strong>Математический язык</ab-strong> — искусственный язык, возникший из естественного под влиянием математики путем устранения громоздкости и двусмысленности, а также увеличения гибкости.

## Устранение громоздкости

В математическиях языках один **знак** (число, буква, знак операции/отношения) обозначает конкретное понятие. В естественном языке для обозначения понятий используют **слова** (последовательность знаков).

Запишем простейший пример на языке математики:

$$ 4 + 8 = 12 $$

Тот же самый пример на русском языке:

"Четыре плюс восемь равно двенадцать"

Итог: **6** знаков на языке математики против **31** знака на русском языке.

Но почему естественные языки так все усложняют? Можно же просто использовать отдельные знаки для отдельных понятий. Проблема в том, что таких знаков станет невероятно много. Запомнить даже малую их часть будет очень сложно.

Подобные естественные языки существуют. Например, китайский язык, считающийся самым сложным в мире. В нем порядка 87 тысяч иероглифов. Некоторые из них могут обозначать слова или даже предложения.

Математическим языкам в этом плане проще. В них не так много понятий (в сравнении с реальной жизнью), поэтому для каждого можно придумать свой знак.

## Устранение двусмысленности

В естественных языках сущестуют омонимы, то есть одинаковые слова, имеющие разный смысл.

Например, "лист" может использоваться для обозначения бумажного листа и листа дерева.

Помимо двусмысленности, можно встретить самую настоящую многозначность. Сколько разных значений имеет слово "ключ"?

* Ключ — информация, служащая для разгадки
* Ключ — инструмент для открытия замков
* Ключ — выход подземных вод на поверхность
* Ключ — знак линейной нотации в музыке (например, скрипичный ключ)

Смысл слов можно понять из контекста, но никто не застрахован от возможных недоразумений.

В математических языках смысл знаков и терминов строго определяется. Никакая двусмысленность не допускается.

Омонимы встречаются только на уровне разных разделов. Например, можно говорить о "диагонали" квадрата или круга, но вы никогда не спутаете ее с "диагональю" матрицы, так как в первом случае речь идет о геометрии, а во втором о линейной алгебре.

Но не только омонимы создают проблемы.

Посмотрите на два предложения ниже:

"Человек — разумное существо"

"Человек — первый космонавт"

Предложения имеют одинаковую форму написания, но разную логику и смысл.

Первое предложение относится к любому человеку, то есть является общим высказыванием. Второе предложение относится к одному конкретному человеку (Ю. А. Гагарину), то есть является частным высказыванием.

В чем проблема? В том, что из этих двух предложений можно получить два вывода: один истиный, а другой ложный.

* "Человек — разумное существо", "Катя — человек". Вывод: "Катя — разумное существо". Все нормально.
* "Человек — первый космонавт", "Катя — человек". Вывод: "Катя — первый космонавт". Некорректный вывод!

В математике мы постоянно оперируем предложениями, преобразуем их и делаем выводы. Именно поэтому несоостветствие формы написания ее смыслу не допускается.

В частности, в математике всегда явно указывается, какие высказывания общие, а какие — частные. Это делается с помощью специальных знаков. На русском языке тоже множно вести ясность:

"**Всякий** человек — разумное существо"

"**Существовал** человек, который был первым космонавтом"

## Гибкость

Математические языки очень гибки благодаря переменным. С их помощью можно в простом виде записывать выражения, имеющие отношение не к одному конкретному предмету, а к целому ряду предметов одной природы.

Простейший пример:

$$ x + y = y + x $$

где $x$ и $y$ — переменные для чисел. Эта запись с переменными выражает общий закон: "от перемены мест слагаемых сумма не меняется". Она справедлива для любых двух чисел.

Можно легко получить какой-нибудь частный случай. Достаточно вместо $x$ и $y$ подставить числа и получить конкретное выражение, например:

$$ 3 + 2 = 2 + 3 $$

В естественных языках тоже есть что-то похожее на переменные. Например, слово "стол" в предложении "Стол имеет крышку" обозначает любой стол, также как $x$ в примере выше означает любое число.

Однако само слово "стол" связано только со столами. Мы не можем использовать его для обозначения кресел или кроватей. Точнее можем, но это будет ощущаться как-то странно, неестественно. А переменную $x$ можно связывать с чем угодно (числами, функциями, квадратами и так далее).