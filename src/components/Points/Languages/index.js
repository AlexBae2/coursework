import React from "react";
const Languages = () => {
    return (
        <div>
            <h2>Анализ современных web технологий</h2>
            <div>
                <p>Веб-сайты разрабатываются, используя 2 типа технологий: серверных и клиентских. К серверным технологиям относятся такие языки, как PHP, Perl и ASP, Node js, C# . Эти технологии выполняются на сервере и после обработки возвращают клиенту HTML-код с помощью клиентских технологий. Клиентские технологии включают:</p>
                <ul>
                    <li>HTML/XML</li>
                    <li>CSS</li>
                    <li>JavaScript/AJAX</li>
                    <li>Java/JavaFX</li>
                    <li>Flex/Flash</li>
                    <li>Silverlight</li>
                    <li>ActiveX</li>
                    <li>VBScript</li>
                    <li>DHTML</li>
                    <li>Razor</li>
                    <li>и другие</li>
                </ul>
            </div>
            <div>
                <p>Программы, написанные на клиентских языках, выполняются на стороне пользователя при помощи веб-браузера. Из-за разнообразия браузеров, работающих на различных платформах, возникают различия в выполнении программы. Основной проблемой браузеров является то, что один и тот же скрипт может отображаться по-разному в разных браузерах, даже в разных версиях одного и того же браузера. Клиентские программы выполняются на стороне клиента, что снижает нагрузку на сервер, поскольку не всегда требуется его обращение.</p>
            </div>
            <div>
                <p>Однако у клиентских технологий есть недостаток: они не позволяют напрямую обращаться к базам данных или создавать новый HTML-код. Они полезны для создания удобного и привлекательного внешнего вида сайта.</p>
            </div>
            <div>
                <p>С помощью серверных технологий можно создавать веб-страницы и отображать их пользователю. Однако работа серверных технологий не видна пользователю.</p>
            </div>
            <p>Серверные технологии выполняются на стороне сервера. Они функционируют следующим образом: пользователь отправляет запрос (Ajax) на сервер через свой браузер при помощи JS. Сервер обрабатывает этот запрос с помощью контроллера (в случае с паттерном MVC). Запрос пользователя обрабатывается на сервере, и полученные данные отправляются обратно пользователю.</p>
            <p>HTML5 (HyperText Markup Language version 5) - это последняя версия языка разметки, используемого для создания веб-страниц. Он предоставляет новые возможности, такие как семантическая разметка, локальное хранилище, возможность проигрывания мультимедиа-контента без использования плагинов, улучшенную поддержку форм и многие другие. Благодаря этим новым возможностям, HTML5 позволяет создавать более доступные, гибкие и мощные веб-страницы.</p>
            <p>CSS (Cascading Style Sheets) - это язык таблиц стилей, используемый для оформления веб-страниц. Он позволяет определять внешний вид и стиль элементов на веб-странице, таких как цвет, шрифт, размер, отступы, рамки и т.д. CSS имеет множество возможностей, которые позволяют создавать адаптивные и красивые веб-страницы.</p>
            <p>JavaScript (JS) - это язык программирования, который используется для создания динамических веб-страниц. Он позволяет добавлять взаимодействие и анимацию на веб-страницы, такие как валидация форм, обработка событий, анимации, создание эффектов перехода и многие другие. JavaScript является одним из самых распространенных языков программирования и используется не только на веб-страницах, но и в различных других приложениях.</p>
            <p>Современные веб-технологии, такие как HTML5, CSS и JavaScript, предоставляют множество возможностей для создания современных и интерактивных веб-приложений. HTML5 позволяет создавать более доступные и гибкие веб-страницы, CSS - улучшает визуальный аспект и стиль страницы, а JavaScript - добавляет интерактивность и динамические функции на страницу.</p>
        </div>
    )
};

export default Languages;