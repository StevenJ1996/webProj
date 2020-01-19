let dropDown // instantiate the global variable to be assigned an xpath once the page loads.

describe('As a User of the Internet site, test the dropdown', () => {


    it('When I go to the dropdown page', () => {
        browser.url('https://the-internet.herokuapp.com/dropdown');

        $('h3*=Dropdown').waitForDisplayed();

        dropDown = $('//select[@id="dropdown"]') // assign the xpath once the page is loaded and element should be on the page
    });

    it('Then validate the default setting is displayed', () => {
        browser.waitUntil(() => {
            return dropDown.$$('option')[0].getHTML().should.include('selected="selected"') // tells webdriverio to wait until the first dropdown option has the attribute of selected and value of selected, which in this case, should be immediate with the page load
        });

        dropDown.$$('option')[0].getText().should.include('Please select an option')

        // check that the other options, that do not have the text we want, also do not have the attribute and value of selected
        dropDown.$$('option').forEach(opt => {
            if (opt.getText() !== 'Please select an option') {
                opt.getHTML().should.not.include('selected="selected"')
            }
        });

    });


    it('When I select option 1', () => {
        dropDown.selectByVisibleText('Option 1');
    });

    it('Then validate that option 1 is visible', () => {
        browser.waitUntil(() => {
            return dropDown.$$('option')[1].getHTML().should.include('selected="selected"');
        });

        dropDown.$$('option').forEach(opt => {
            if (opt.getText() !== 'Option 1') {
                opt.getHTML().should.not.include('selected="selected"');
            }
        });

    });

    it('When I select option 2', () => {
        dropDown.selectByVisibleText('Option 2');

    });

    it('Then validate that option 2 is visible', () => {
        browser.waitUntil(() => {
            return dropDown.$$('option')[2].getHTML().should.include('selected="selected"');
        });

        dropDown.$$('option').forEach(opt => {
            if (opt.getText() !== 'Option 2') {
                opt.getHTML().should.not.include('selected="selected"');
            }
        });

    });

});


