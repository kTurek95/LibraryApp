import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
//import {
//    createBrowserRouter,
//    RouterProvider,
//} from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ForHome } from './pages/home/news/forHomePage';
import { Gadgets } from './pages/home/news/gadgetsPage';
import { MediaLibrary } from './pages/home/news/mediaLibraryPage';
import { NewArrivals } from './pages/home/news/newArrivalsPage';
import { ReadingCorner } from './pages/home/news/readingCornerPage';
import { ItSupport } from './pages/home/news/helpPage';
import { Book } from './pages/book/BookPage';
import { Books } from './pages/book/BooksPage';
import { Layout } from './pages/layout/layout';
import { Branches } from './pages/left-nav/branchPage';
import { HowToUse } from './pages/left-nav/howToUse';
import { Catalog } from './pages/left-nav/catalogPage';
import { Contact } from './pages/left-nav/contactPage';
import { AboutUs } from './pages/left-nav/aboutUsPage';
import { Projects } from './pages/left-nav/projecsPage';
import { Events } from './pages/left-nav/eventsPage';
import { ReportAPurchase } from './pages/left-nav/reportAPurchasePage';
import { ECollections } from './pages/collections/eCollectionPage';
import { MBPCollections } from './pages/collections/mbpCollections';
import { Work } from './pages/home/carousel/workPage';
import { Challenges } from './pages/home/carousel/challengesPage';
import { Meetings } from './pages/home/carousel/meetingsPage';
import { Reports } from './pages/book/reports';
import { Recomended } from './pages/collections/recomendedPage';
import { NewArrivalsCollections } from './pages/collections/newArrivalsPage';
import { AvailableBooks } from './pages/list-of-books/availableBooks';
import { RecomendedBooks } from './pages/list-of-books/recomendedBooks';
import { NeededBooks } from './pages/list-of-books/neededBooks';
import { Horror } from './pages/books-categories/horror';
import { Romance } from './pages/books-categories/romance';
import { Drama } from './pages/books-categories/drama';
import { Fantasy } from './pages/books-categories/fantasy';
import { Thriller } from './pages/books-categories/thriller';
import { Academica } from './pages/e-collections/academica';
import { EmpikGo } from './pages/e-collections/empikGo';
import { IbukLibra } from './pages/e-collections/IbukLibra';
import { NewComics } from './pages/new-collections/newComics';
import { NewMusic } from './pages/new-collections/newMusic';
import { NewBooks } from './pages/new-collections/newBooks';
import { NewMovies } from './pages/new-collections/newMovies';
import { NewBoardGames } from './pages/new-collections/newBoardGames';
import { NewAudiobooks } from './pages/new-collections/newAudiobooks';
import { Cooperation } from './pages/about-us/cooperation';
import { Volunteering } from './pages/about-us/volunteering';
import { MoreAboutUs } from './pages/about-us/more-about-us';
import { CheckBooks } from './pages/left-nav/report-a-purchase/checkBooks'
import { CheckBooksStatus } from './pages/left-nav/report-a-purchase/checkBookStatus'


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        {/*<RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/> }>
                    <Route index element={<App />} />
                </Route>
                <Route path='/ksiazka' element={<Layout />}>
                    <Route index element={<Book />} />
                </Route>
                <Route path='/ksiazki' element={<Layout />}>
                    <Route index element={<Books />} />
                </Route>
                <Route path='/ezbiory' element={<Layout />}>
                    <Route index element={<ECollections />} />
                </Route>
                <Route path='/zbiorymbp' element={<Layout />}>
                    <Route index element={<MBPCollections />} />
                </Route>
                <Route path='/filie' element={<Layout />}>
                    <Route index element={<Branches />} />
                </Route>
                <Route path='/jakkorzystac' element={<Layout />}>
                    <Route index element={<HowToUse />} />
                </Route>
                <Route path='/katalog' element={<Layout />}>
                    <Route index element={<Catalog />} />
                </Route>
                <Route path='/kontakt' element={<Layout />}>
                    <Route index element={<Contact />} />
                </Route>
                <Route path='/onas' element={<Layout />}>
                    <Route index element={<AboutUs />} />
                </Route>
                <Route path='/projekty' element={<Layout />}>
                    <Route index element={<Projects />} />
                </Route>
                <Route path='/wydarzenia' element={<Layout />}>
                    <Route index element={<Events />} />
                </Route>
                <Route path='/zgloszakup' element={<Layout />}>
                    <Route index element={<ReportAPurchase />} />
                </Route>
                <Route path='/dodomu' element={<Layout />}>
                    <Route index element={<ForHome />} />
                </Route>
                <Route path='/nowosci' element={<Layout />}>
                    <Route index element={<NewArrivals />} />
                </Route>
                <Route path='/poczytajki' element={<Layout />}>
                    <Route index element={<ReadingCorner />} />
                </Route>
                <Route path='/pomocit' element={<Layout />}>
                    <Route index element={<ItSupport />} />
                </Route>
                <Route path='/gadzety' element={<Layout />}>
                    <Route index element={<Gadgets />} />
                </Route>
                <Route path='/mediateka' element={<Layout />}>
                    <Route index element={<MediaLibrary />} />
                </Route>
                <Route path='/spotkania' element={<Layout />}>
                    <Route index element={<Meetings />} />
                </Route>
                <Route path='/wyzwania' element={<Layout />}>
                    <Route index element={<Challenges />} />
                </Route>
                <Route path='/praca' element={<Layout />}>
                    <Route index element={<Work />} />
                </Route>
                <Route path='/raporty' element={<Layout />}>
                    <Route index element={<Reports />} />
                </Route>
                <Route path='/polecane' element={<Layout />}>
                    <Route index element={<Recomended />} />
                </Route>
                <Route path='/zbioryNowosci' element={<Layout />}>
                    <Route index element={<NewArrivalsCollections />} />
                </Route>
                <Route path='/dostepneKsiazki' element={<Layout />}>
                    <Route index element={<AvailableBooks />} />
                </Route>
                <Route path='rekomendowaneKsiazki' element={<Layout />}>
                    <Route index element={<RecomendedBooks />} />
                </Route>
                <Route path='potrzebneKsiazki' element={<Layout />}>
                    <Route index element={<NeededBooks />} />
                </Route>
                <Route path='horror' element={<Layout />}>
                    <Route index element={<Horror />}/>
                </Route>
                <Route path='romance' element={<Layout />}>
                    <Route index element={<Romance />}/>
                </Route>
                <Route path='drama' element={<Layout />}>
                    <Route index element={<Drama />}/>
                </Route>
                <Route path='fantasy' element={<Layout />}>
                    <Route index element={<Fantasy />}/>
                </Route>
                <Route path='thriller' element={<Layout />}>
                    <Route index element={<Thriller />}/>
                </Route>
                <Route path='academica' element={<Layout />}>
                    <Route index element={<Academica />}/>
                </Route>
                <Route path='empicGo' element={<Layout />}>
                    <Route index element={<EmpikGo />} />
                </Route>
                <Route path='ibukLibra' element={<Layout />}>
                    <Route index element={<IbukLibra />} />
                </Route>
                <Route path='nowosciKomiksowe' element={<Layout />}>
                    <Route index element={<NewComics />} />
                </Route>
                <Route path='nowosciMuzyczne' element={<Layout />}>
                    <Route index element={<NewMusic />} />
                </Route>
                <Route path='nowosciKsiazkowe' element={<Layout />}>
                    <Route index element={<NewBooks />} />
                </Route>
                <Route path='nowosciFilmowe' element={<Layout />}>
                    <Route index element={<NewMovies />} />
                </Route>
                <Route path='noweGryPlanszowe' element={<Layout />}>
                    <Route index element={<NewBoardGames />} />
                </Route>
                <Route path='noweAudiobooki' element={<Layout />}>
                    <Route index element={<NewAudiobooks />} />
                </Route>
                <Route path='wpolpraca' element={<Layout />}>
                    <Route index element={<Cooperation />} />
                </Route>
                <Route path='wolontariat' element={<Layout />}>
                    <Route index element={<Volunteering />} />
                </Route>
                <Route path='wiecejONas' element={<Layout />}>
                    <Route index element={<MoreAboutUs />} />
                </Route>
                <Route path='sprawdzStatus' element={<Layout />}>
                    <Route index element={<CheckBooksStatus />} />
                </Route>
                <Route path='sprawdzKsiazki' element={<Layout />}>
                    <Route index element={<CheckBooks />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);