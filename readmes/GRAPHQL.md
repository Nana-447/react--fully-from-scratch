# GRAPHQL

- What it is? It's a server language, or a query language for API's;

- <b>Without GraphQL:</b>To see the posts of a person, you have to find the "userId" on the "users" table, than get all the posts of this user on the "post" table, then get the "commentId" on the "comments" table;
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/beforeGraphQL.jpg" width=1200 />

- <b>Using GraphQL:</b>You mount your request filtering each field you want to see, from each table or entity you want, relating it automatically;
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/afterGraphQL.png" width=1200 />

- Basically it converts multiple endpoints into only one or how much you want, filtering information, deleting info that you do not want to see, etc;

## GRAPHQL PLAYGROUND
- Schema and Mouting Queries:
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/graphQLPlayground.png" width=1200 />

- Docs: Tells us more about the collections, even with lot of details about each field and relations;
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/secondExampleOfQuery.png" width=1200 />

## APOLLO
- What it is: Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI;

- Apollo for React [Docs](https://www.apollographql.com/docs/react/);

- Adding libraries to our React Project with GraphQL:
``yarn add apollo-boost react-apollo graphql``

# IMPORTANTE NOTE: (GRAPHQL WITH APOLLO VS. REDUX)
- You can use both, but it would be two things that do the same stuff;
- Some people says it's bad to use both;
- Some people says that it's okay to use it;
- Each one can replace the other one, to be honest (APOLLO OR REDUX);
- Apollo does not have yet a big community, so you might get stuck on some problem;

- <b>Redux Flow</b>:
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/reduxFlowVsGraphQL.png" width=1200 />

- <b>Apollo Flow</b>:
<img src="https://raw.githubusercontent.com/jvlessa/React--Zero-To-Mastery/master/readmes/media/GraphQLVsReduxFlow.png" width=1200 />