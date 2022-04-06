import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

const Default = ({ children }) => {
        
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <title>PokeNext</title>
            </Head>
            <Header/>
            <div>
                { children }
            </div>
            <Footer />
        </>
    )
}

export default Default