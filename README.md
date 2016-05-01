# Client-side

In this exercise we're going to be looking at what we can do client-side.
That looks like :
 - client-side requests
 - client-side rendering

We'll be using some familiar tools like github-pages, along with some shmancy tooling to help us bundle and push there.
For rendering, we'll be using Handlebars (again!), but we'll be using Browserify to teach the browser how to use it easily.

The tools in this setup:

- [browserify](https://www.npmjs.com/package/browserify) - make our sweet node browser-ready
- [handlebars](http://handlebarsjs.com/) - template rendering!
- [hbsfy](https://www.npmjs.com/package/hbsfy) - a browserify transform for hbs
- [xhr](https://www.npmjs.com/package/xhr) - a request-module that works browser-side
- [gh-pages](https://www.npmjs.com/package/gh-pages) - crazy easy gh-pages deployment

---

## Release 0

- **FORK** the repo to your personal account. **The purpose is to set up a gh-pages site**, so the hihi-based repo won't work
- Read the `package.json`, in particular the scripts. See if you can figure out what each line does (even roughly) and guess how they are related.
- Check your git remotes, then try running the scripts to check your guesses about what they do. You should be able to use the npm scripts to auto-set up a github page for you.

**NOTE** - gh-pages will act on the remote you have set up at `origin` ... so be careful.

These commands might be useful in terminal:
```bash
git remote -v
git remote --help
git remote add --help
git remote remove --help
```
## Release 1


Find an API you you or that is easy to use (don't use one that needs authentication/ keys for this one - no twitter)
You might like to check out - the [International Space Station API](http://wheretheiss.at/w/developer)

![NZ from the ISS](nz_from_iss.png)

- replace the existing api get request to get something back from your API and `console.log` it
- Not things returned from the API rendering on your page using handlebars

## Release 2

- Spin up an API you've written (e.g. `json-cats`)
- Hit the that API and render the results using a new client-side template (go write a new one).

## Release 3

- Add a listener to a button on the page, which kicks off a request, then renders the results using a template.

## Release 4

This setup is something I just pulled together because I like handlebars.  Go and look for some other tools and potential setups.

Go inquire about different tools:
- client-side templating - Jade and Hyperscript are two I hear mentioned
- AJAX / client-side requesting - Jquery AJAX is another common one you might see, there might be other options
- bundling tools - there's another one called webpack that gets some attention...

Which aspects here need testing. Go inquire about how people test client-side rendering or API requests.

Once you've had a look at that stuff, maybe have a look at some productivity boosts :
- could you use something to watch your files and re-bundle? Maybe checkout our budo, watchify, ...

