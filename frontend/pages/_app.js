import App, { Container } from 'next/app';
import Page from '../components/Page';

import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

class MyApp extends App {

	// lifecycle from next, run before render which allows
	// our component to recieve the state props before init render
	static async getInitialProps( { Component, ctx }) {
		let pageProps = {};

		// crawl all pages and get props
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		// expose query to user
		pageProps.query = ctx.query;
		return { pageProps }; // return collected props
	}

  	render() {
    	const { Component, apollo, pageProps } = this.props;

		return (
			<Container>
				<ApolloProvider client={apollo}>
					<Page>
						<Component {...pageProps} />
					</Page>
				</ApolloProvider>
			</Container>
    	);
  	}
}

export default withData(MyApp);
