/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    describe('RSS Feeds', function() {
        /*  tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url defined', function(){
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined', function(){
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    describe('The menu', function(){

        /* a test that ensures the menu element is
        * hidden by default.
        */
       it('is hidden by default', function(){
          let menu = document.querySelector('body');
          expect(menu.classList.contains('menu-hidden')).toBe(true);
       });
       
       /* a test that ensures the menu changes
       * visibility when the menu icon is clicked. 
       */
      it('is showing/hiding', function(){
        let menu = document.querySelector('body');
        let icon = document.querySelector('.menu-icon-link');
        
        // Check the menu is displayed when clicked
        icon.click();
        expect(menu.classList.contains('menu-hidden')).toBe(false);

        // Check the menu is hidden when clicked
        icon.click();
        expect(menu.classList.contains('menu-hidden')).toBe(true);
        
      });
      
    });

    describe('Initial Entries', function(){

        beforeEach(function(done){
            loadFeed(0,done);
        })
        
        /* a test that ensures when the loadFeed
        * function is called and completes its work,
        */
       it('loadFeed is working', function(){
            let feed = document.querySelector('.feed .entry'); 
            expect(feed).toBeDefined();
            expect(feed.length).not.toBe(0);
       });
    });
       
    describe('New Feed Selection', function(){
        let feed;
        let firstFeed;
        let secondFeed;

        beforeEach((done)=> {
            loadFeed(0, function() {
                feed = document.querySelector('.feed'); 
                firstFeed = feed.children[0].innerText;
                loadFeed(1, function() {
                    secondFeed = feed.children[0].innerText;
                    done();
                });
            });
        });

        /* a test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */
       it('Changes content', function(){
        expect(secondFeed).not.toBe(firstFeed);
       });

    });

}());
