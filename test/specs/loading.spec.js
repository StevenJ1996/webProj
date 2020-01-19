describe('As a User of the Internet site, test the Dynamic Loading, first Example', () => {
    it('Given I go to the Dynamic Loading page', () => {
        browser.url('https://the-internet.herokuapp.com/dynamic_loading');


        browser.waitUntil(() => {
            return $('h3').getText().should.include('Dynamically Loaded Page Elements');
        });
    });

    it('When I click on the first example', () => {
        $('a*=Example 1').click();
        $('button=Start').waitForDisplayed();
    });

    it('And I click start', () => {
        $('button=Start').click();
    });

    it('Then wait for "Hello World"', () => {
        browser.waitUntil(() => {
            return $('h4=Hello World!').should.exist;
        });
    });

});



describe('As a User of the Internet site, test the Dynamic Loading, second example', () => {
    it('Given I go to the Dynamic Loading page', () => {
        browser.url('https://the-internet.herokuapp.com/dynamic_loading');

        browser.waitUntil(() => {
            return $('h3').getText().should.include('Dynamically Loaded Page Elements');
        });
    });

    it('When I click on the first example', () => {
        $('a*=Example 2').click();
        $('button=Start').waitForDisplayed();
    });

    it('And I click start', () => {
        $('button=Start').click();
    });

    it('Then wait for "Hello World"', () => {
        browser.waitUntil(() => {
            return $('h4=Hello World!').should.exist;
        });
    });

});



