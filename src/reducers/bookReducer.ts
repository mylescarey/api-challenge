import { IStore } from '.';

// IBook interface

export interface IBook {
	kind: string;
	id: string;
	etag: string;
	selfLink: string;
	volumeInfo: {
		title: string;
		subtitle: string;
		authors: string[];
		publisher: string;
		publishedDate: string;
		description: string;
		pageCount: number;
		categories: string[];
		imageLinks: {
			smallThumbnail: string;
			thumbnail: string;
		};
	};
	searchInfo: {
		textSnippet: string;
	};
}

// action types
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const SUCCESS_FETCH_BOOKS = 'SUCCESS_FETCH_BOOKS';
export const FAILURE_FETCH_BOOKS = 'FAILURE_FETCH_BOOKS';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';

// action creators
export const getBooks = (): IGetBooksAction => ({
	type: FETCH_BOOKS,
});
export const getBooksSuccess = (books: IBook[]): IGetBooksSuccessAction => ({
	type: SUCCESS_FETCH_BOOKS,
	books,
});
export const getBooksFailure = (error: Error): IGetBooksFailureAction => ({
	type: FAILURE_FETCH_BOOKS,
	error,
});

export const fetchBooks = (authorName: string) => (dispatch: any) => {
	if (authorName) {
		dispatch(getBooks());
		fetch(
			'https://www.googleapis.com/books/v1/volumes?q=inauthor:' +
				authorName +
				'&maxResults=20&key:AIzaSyDhHe5MvQYsUZscr1CGaVqSP_vX9oMmOCE'
		)
			.then(res => res.json())
			.then(data => dispatch(getBooksSuccess(data.items)))
			.catch(error => dispatch(getBooksFailure(error)));
	} else {
		dispatch(getBooksSuccess([]));
	}
};

export const setCategoryFilter = (category: string) => (dispatch: any, getState: any) => {
	const currentState: IStore = getState();
	let filteredBooks = currentState.books.books;
	if (category !== 'all') {
		filteredBooks = currentState.books.books.filter(book => {
			return book.volumeInfo.categories ? book.volumeInfo.categories.includes(category) : false;
		});
	}

	dispatch({ type: SET_CATEGORY_FILTER, category, filteredBooks });
};

// action interfaces

export interface IGetBooksAction {
	type: typeof FETCH_BOOKS;
}
export interface IGetBooksSuccessAction {
	type: typeof SUCCESS_FETCH_BOOKS;
	books: IBook[];
}
export interface IGetBooksFailureAction {
	type: typeof FAILURE_FETCH_BOOKS;
	error: Error;
}

export interface ISetCategoryFilter {
	type: typeof SET_CATEGORY_FILTER;
	category: string;
	filteredBooks: IBook[];
}

// combining action creators

type IBookActions = IGetBooksAction | IGetBooksSuccessAction | IGetBooksFailureAction | ISetCategoryFilter;

export interface IBookState {
	books: IBook[];
	categoryFilter: string;
	filteredBooks: IBook[];
	error: null | Error;
	loading: boolean;
}

// reducer with initial state
const initialState: IBookState = {
	books: [],
	filteredBooks: [],
	categoryFilter: '',
	error: null,
	loading: false,
};

const bookReducer = (state = initialState, action: IBookActions) => {
	switch (action.type) {
		case FETCH_BOOKS:
			return { ...state, loading: true, error: null };
		case SUCCESS_FETCH_BOOKS:
			return { ...state, loading: false, error: null, books: action.books, filteredBooks: action.books };
		case FAILURE_FETCH_BOOKS:
			return { ...state, loading: false, error: action.error };
		case SET_CATEGORY_FILTER:
			return { ...state, categoryFilter: action.category, filteredBooks: action.filteredBooks };
		default:
			return state;
	}
};

export default bookReducer;
