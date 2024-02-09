**В РАЗРАБОТКЕ!**

Согласно легенде, $8$-летний Карл Гаусс плохо себя вел на уроке.
Чтобы чем-то надолго занять непослушного мальчишку, учитель дал ему сложную задачу -- найти сумму первых $100$ натуральных чисел:

$$ 1 + 2 + 3 + 4 + \ldots + 100 = \ ? $$

@image
    src: assets/sum-drawing.jpg
    width: 600px
    caption:
        main: Устный счёт. В народной школе С. А. Рачинского
        secondary: Картина Н.П. Богданова-Бельского

К сожалению для несчастного учителя, маленький гений решил эту задачу меньше чем за минуту и озвучил правильный ответ -- $5050$. ЗДЕСЬ ЧЕРЕЗ СПОЙЛЕР РАСПИСАТЬ, КАК ОН ЭТО СДЕЛАЛ!

Обобщим эту задачу и попытаемся понять, как найти сумму степеней чисел.
Введем обозначение $S_k^n$, обозначающее сумму $n$-ых степеней первых $k$ натуральных чисел:

$$ S^n_k = 1^n + 2^n + 3^n + \ldots + k^n $$

Задача о суммах степеней является типичным примером "мостика" между суммами и их общими формулами.
Посмотрим, сможет ли нам в этом вопросе помочь сертифицированный эксперт по "мостикам" -- бином Ньютона.

Рассмотрим разложение следующей степени бинома:

$$ (k+1)^{n+1} = C_{n+1}^0 k^0 + C_{n+1}^1k^1 + C_{n+1}^2k^2 + \ldots + C_{n+1}^{n+1}k^{n+1} $$

Обратите внимание, что в разложении справа встречаются все степени числа $k$ от нулевой, до $n+1$-ой.
Выпишем все возможные разложения для всех чисел от $0$ до $k$:

@math
    (0+1)^{n+1} = 1
    \\
    (1 + 1)^{n+1} = C_{n+1}^0 1^0 + C_{n+1}^11^1 + \ldots + C_{n+1}^{n+1}1^{n+1}
    \\
    (2 + 1)^{n+1} = C_{n+1}^0 2^0 + C_{n+1}^12^1 + \ldots + C_{n+1}^{n+1}2^{n+1}
    \\
    \cdots
    \\
    (k+1)^{n+1} = C_{n+1}^0 k^0 + C_{n+1}^1k^1 + \ldots + C_{n+1}^{n+1}k^{n+1}

Сложим все эти равенства друг с другом (отдельно левые и отдельно правые части).
В правой части выносим за скобки одинаковые биномиальные коэффициенты:

@math
    1^{n+1} + \ldots + (k+1)^{k+1} = \\ =
    C_{n+1}^0(1^0 + \ldots + k^0) + C_{n+1}^1(1^1 + \ldots + k^1) + \ldots + C_{n+1}^{n+1}(1^{n+1} + \ldots + k^{n+1})

Теперь заменим сумму в левой части равенства и суммы в скобках в правой части на введенное обозначение сумм степеней чисел:

$$ S^{n+1}_{k+1} = C_{n+1}^0 S^0_k + C_{n+1}^1 S^1_k + \ldots + C_{n+1}^{n+1} S^{n+1}_k + 1 $$

**Невероятно!**
Всего парой простых действий с биномами Ньютона мы получили единую формулу, в которую "впечатаны" все суммы всех степеней (от $0$ до $n+1$) чисел!

Но нам все же нужна степень $n$ и $k$ чисел, а не $n+1$ и $k+1$.
Поэтому, немного преобразуем равенство, пользуясь тем, что $C_{n+1}^0 = C_{n+1}^{n+1} = 1$, а так же $S^0_k = k$, в чем вы можете самостоятельно убедиться:

$$ \cancel{S^{n+1}_k} + (k+1)^{n+1} = (k+1) + C_{n+1}^1 S^1_k + \ldots + C_{n+1}^n S^n_k + \cancel{S^{n+1}_k} $$

$$ (k+1)^{n+1} - (k+1) = C_{n+1}^1 S^1_k + \ldots + C^n_{n+1} S^n_k $$

$$ (k+1)^{n+1} - (k+1) = \sum\limits_{i=1}^{n} C_{n+1}^i S^i_k $$

Правда, это всего лишь один из трех способов.
Если копнуть еще глубже, можно получить полноценную общую формулу, позволяющую напрямую получить ответ, без необходимости высчитывать предыдущие формулы.

Кстати, подобный "финт" с суммой степеней можно провернуть не только с натуральными числами, но и с **любыми другими числами или даже математическими объектами!**

@todo
    title: Задача -- Найти сумму степеней биномиальных коэффициентов
    content: |
        $$ (C_n^0)^k + (C_n^1)^k + \ldots + (C_n^n)^k = \ ? $$

@todo
    title: Написать отдельную статью про сумму степеней чисел!
    content: |
        https://scask.ru/o_book_ela.php?id=29

        https://www.youtube.com/watch?v=2bcNgXHgcqM

        https://dev.mccme.ru/~merzon/pscache/bernoulli-howto-pre.pdf

        Взять упражнения отсюда:

        https://kvant.mccme.ru/1973/05/summy_odinakovyh_stepenej_natu.htm