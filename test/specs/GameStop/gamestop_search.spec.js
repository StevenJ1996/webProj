let search = 'NBA 2K20'



describe('As a user test the game stop search bar', () => {

    it('Given the website', () => {
        browser.url('https://www.gamestop.com/')

        $('//img[contains(@alt, "GameStop Homepage" )]').waitForDisplayed()

       
        
    });

    it('When I type NBA 2K20 in search bar', () => {
        $('//input[contains(@type, "search" )]').setValue(search)

        $('//button[contains(text(), "Search" )]').click()

        $('//a[contains(@class,"reset")]').waitForDisplayed()
        
    });

    it('Then NBA 2k20 Results should appear', () => {
        $('//span[@class="search-keywords"]').getText().should.equal(search)
        
    });
    
});