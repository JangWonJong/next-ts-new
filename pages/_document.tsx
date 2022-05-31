import { Nav } from "@/components";
import Document,{ Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }
    
    render(){
        return(
            <Html>
                <Head>
                <title>mibot</title>
                <meta charSet="utf-8"></meta>
                </Head>
                <body>
                    <Nav/>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument