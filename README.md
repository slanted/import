### Import test for async imports

Trying to see if we can do dynamic imports using async await.

Split out every source files into a separate .js file

Maybe have a very small 'core' js file that gets loaded first.
Then write a 'component detector' that sees what components we have on a page and then load the component using the async await.