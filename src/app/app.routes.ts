import { Routes } from '@angular/router';
import { WelcomLoginComponent } from './User/welcom-login/welcom-login.component';
import { HomeComponent } from './User/home/home.component';
import { CategoriesComponent } from './User/categories/categories.component';
import { CategoryDetailsComponent } from './User/category-details/category-details.component';
import { BooksComponent } from './User/books/books.component';
import { BooksDetailsComponent } from './User/books-details/books-details.component';
import { AuthorsComponent } from './User/authors/authors.component';
import { AuthorsDetailsComponent } from './User/authors-details/authors-details.component';
import { PageNotFoundComponent } from './User/page-not-found/page-not-found.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';

export const routes: Routes = [
    
        {
            path: '',
            component: WelcomLoginComponent
        },
        {
            path: '',
            component: HomeComponent
        },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent},
        {
            path: 'categories',
            component: CategoriesComponent
        },
        {
            path: 'categories/:categoryId',
            component: CategoryDetailsComponent
        },
        {
            path: 'books',
            component: BooksComponent
        },
        {
            path: 'books/:bookId',
            component: BooksDetailsComponent
        }
        ,
        {
            path: 'authors',
            component: AuthorsComponent
        }
        ,
        {
            path: 'authors/:authorId',
            component: AuthorsDetailsComponent
        }
        ,
        {
            path: '**',
            component: PageNotFoundComponent
        }
    
    
];
