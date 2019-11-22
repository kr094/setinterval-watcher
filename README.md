# setInterval Watcher
Really simple hook into setInterval to figure out which caller is leaving timers around. Prints the (best guess) `Function.name` property and an `Error.stack`. 

You could probably write these yourself, I know I did because setInterval sniffer chrome extension stopped being maintained. This doesn't have an interface but covers the use case in browser and node with 0 dependencies.

## Usage
Require index.js in your favorite way. It will override setInterval and clearInterval so bring it in early.
Inspect global `__SETINTERVAL_WATCHER__` object after running some code. It will contain:
```
{
  <timer id>: // Opaque timer id. In a browser this is an int. In node it's an object that can't be tracked.
  {
    name: "", // Function.name property of the callback passed to setInterval.
    stack: [], // Newline split stack trace originating in this helper.
  }
}
```
