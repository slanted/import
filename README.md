### Import test for async imports with Polymer 3

Trying to see if we can do dynamic imports using async await.

Split out every source files into a separate .js file

Maybe have a very small 'core' js file that gets loaded first.
Then write a 'component detector' that sees what components we have on a page and then load the component using the async await.

Once you clone this repo, do this:

`>npm install`

`>npm run build`

`>npm run serve`

It should be running on localhost:8080 now. Please use Chrome, I didn't make it work on other Browsers yet.

Looks pretty crappy, but there are a couple of interesting things happening:

1. Open up your Chrome browser's Network tab and checkout the network traffic: Notice that each chunk loads separately, including Polymer, and each Web component
2. Now comment out both 'my-element' and 'my-other-element' in the index.html and reload.
3. Notice that the polymer chunk and element chunks go away. 
4. Now comment out just 'my-other-element'. 'my-element' loads 'my-other-element'. Reload the browser, and notice that it still loads the myotherelement chunk.

So its a little like what we used to have with html imports.

I wonder if this could be improved upon with something like a babel transform.
