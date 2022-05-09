import CoursesIcon from './icons/courses.svg'
import ServicesIcon from './icons/services.svg'
import ProductsIcon from './icons/products.svg'
import BooksIcon from './icons/books.svg'
import { TopLevelCategory } from '../interfaces/page.interface'
import { FirstLevelMenuItem } from '../interfaces/menu.interface'


export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
]