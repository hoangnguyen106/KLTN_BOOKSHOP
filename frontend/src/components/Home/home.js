import React from 'react'
import Footer from '../Footer/footer'
// import Content from '../Content/Content'
import HeaderBottom from '../Header/header.bottom'
import HeaderMiddle from '../Header/header.middle'
import ContentHome from './content.home'

const Home = ({ islogin, logout, category,
    publisher, book, totalpage, backPage,
    nextPage, setPage, page, sortType, setSortType,
    setRangeType, title, setTitle, setBranch, branch, 
    setSearchText, author, setIDBranch, branchClick, history,
    searchTextSubmit, addToCart}) => (
        <div>
            <header id="header">
     
                <HeaderMiddle
                    islogin={islogin}
                    logout={() => logout()}
                    history={history}
                />
                <HeaderBottom
                    sortType={sortType}
                    setSortType={(value) => setSortType(value)}
                    setSearchText={(value) => setSearchText(value)}
                    searchTextSubmit={() =>searchTextSubmit()}
                />
            </header>
            <ContentHome
                category={category}
                publisher={publisher}
                book={book}
                totalpage={totalpage}
                backPage={() => backPage()}
                nextPage={() => nextPage()}
                setPage={(page) => setPage(page)}
                page={page}
                setRangeType={(range) => setRangeType(range)}
                title={title}
                setTitle={(title) => setTitle(title)}
                setBranch={(branch) => setBranch(branch)}
                branch={branch}
                author={author}
                setIDBranch={(id) => setIDBranch(id)}
                branchClick={(branch, id) => branchClick(branch, id)}
                addToCart={(product) => addToCart(product)}
            />
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    )

export default Home