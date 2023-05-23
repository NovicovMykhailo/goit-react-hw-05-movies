<!-- ### Ключ 
API (v3 auth) 
[dd71824c2c3ff3aef118fcf2a1f86a0c]

### Пример API-запроса
[https://api.themoviedb.org/3/movie/550?api_key=dd71824c2c3ff3aef118fcf2a1f86a0c]

### Ключ доступа к API (v4 auth)
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDcxODI0YzJjM2ZmM2FlZjExOGZjZjJhMWY4NmEwYyIsInN1YiI6IjY0NmM4MTEyMmJjZjY3MDBmZTYyMTZhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7t2sbFYyvcaDAtE0fXnZqWJkrF8c6YiesSuOdcaSKsk -->

### docs

[https://developer.themoviedb.org/docs/getting-started]


### API themoviedb.org


[/trending/get-trending] список самых популярных фильмов на сегодня для создания коллекции на главной странице.
[/search/search-movies] поиск кинофильма по ключевому слову на странице фильмов.
[/movies/get-movie-details] запрос полной информации о фильме для страницы кинофильма.
[/movies/get-movie-credits] запрос информации о актёрском составе для страницы кинофильма.
[/movies/get-movie-reviews] запрос обзоров для страницы кинофильма.



### Маршруты
В приложении должны быть следующие маршруты. 
Если пользователь зашел по несуществующему маршруту, его необходимо перенаправлять на домашнюю страницу.

[/] -                        компонент Home, домашняя страница со списком популярных кинофильмов.
[/movies] -                  компонент Movies, страница поиска фильмов по ключевому слову.
[/movies/:movieId]-          компонент MovieDetails, страница с детальной информацией о кинофильме.
[/movies/:movieId/cast]-     компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
[/movies/:movieId/reviews] - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.


### Code Splitting (разделение кода)
Добавь асинхронную загрузку JS-кода для маршрутов приложения используя

```jsx
 React.lazy() 
  <Suspense>.
 ```