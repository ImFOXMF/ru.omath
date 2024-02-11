^ combinations article|combinatorics/combination|t:combinations

## Умножение многочленов

Умножение многочленов можно рассматривать как составление всех комбинаций из одночленов этих самых многочленов.
Такой **комбинаторный** способ умножения многочленов не только проще и нагляднее, но и позволяет задействовать в этом процессе всю мощь комбинаторики:

<~ article|example:polynom-product

## Бином Ньютона

Вручную умножать друг на друга большое количество многочленов очень долго и утомительно.
Поэтому математики придумали формулу для работы со степенями двучленов:

<~ article|t:binom

Многочлены имеют и другое название -- полиномы.<br>
Соответственно двучлен -- бином.

<~ article|example:short-product

Длинную цепочку из слагаемых после применения формулы бинома Ньютона называют **разложением** степени бинома:

$$ \underbrace{(a+b)^2}_{\text{Степень бинома}} = \ \ \underbrace{a^2 + 2ab + b^2}_{\text{Разложение}} $$

<~ article|example:real

## Общий член разложения

Иногда бывает полезно точечно изучить конкретное слагаемое, полученное после применения формулы бинома Ньютона, без необходимости выписывать все разложение целиком.
Такие слагаемые обозначают $T_k$, где $k$ -- номер слагаемого в разложении:

<~ article|important:term

<~ article|example:find-and-write

## Биномиальный коэффициент

<~ article|d:binomial-coeff

$$ C_n^k \quad \text{или} \quad \binom{n}{k} $$

Левое обозначение это [количество сочетаний](^combinations) из $n$ по $k$ -- понятие из комбинаторики, которое нашло удобное применение в формуле бинома Ньютона.
Правый способ сложился исторически, без связи с комбинаторикой.
Его придумали специально для формулы бинома Ньютона.

<~ article|important:binomial-coeff-equality

$$ C_n^k = \binom{n}{k} = \frac{n!}{(n-k)! \ k!} $$

<~ article|t:binom-coeff-repeat

Биномиальные коэффициенты можно считать с помощью треугольника Паскаля -- через предыдущие биномиальные коэффициенты, выписанные в виде треугольника:

<~ article|example:triangle-calc

## Примение бинома Ньютона

@important
    main: |
        Бином Ньютона не связан с жизнью напрямую, но используйтеся для вывода большого количества формул и теорем, которые имеют множество применений в жизни.