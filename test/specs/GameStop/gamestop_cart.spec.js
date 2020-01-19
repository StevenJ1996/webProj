let search = 'NBA 2K20'




// 



describe('As a user test the game stop cart button', () => {

    it('Given the website', () => {
        browser.url('https://www.gamestop.com/')

        $('//img[contains(@alt, "GameStop Homepage" )]').waitForDisplayed()

       
        
    });

    it('When I click on cart', () => {
        $('//a[contains(@title,"View")]').click()

    });

    it('Then NBA 2k20 Results should appear', () => {
       $('//a[contains(@title,"Go to Career")]').waitForDisplayed()
        
    });
    
});


