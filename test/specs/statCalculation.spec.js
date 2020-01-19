const assert = require('assert')

let totalPoints
let totalGames
let calculatedAverage




describe('As a user make sure that the points per game is correct', () => {


    it('given going to lbj stat site', () => {
        browser.url('https://www.basketball-reference.com/players/j/jamesle01.html')

        $('//img[contains(@alt, "LeBron ")]').waitForDisplayed()
    });

    it('when I calculate the total points and game played for his rookie year', () => {

        totalPoints = Number($('//caption[contains(text(), "Totals Table") and not(contains(text(), "Playoffs"))]/following-sibling::tbody//td[text()="19"]/following-sibling::td[text()="1654"]').getText())


        totalGames = Number($('//caption[contains(text(), "Totals Table") and not(contains(text(), "Playoffs"))]/following-sibling::tbody//td[text()="19"]/following-sibling::td[text()="79"]').getText())


        calculatedAverage = totalPoints / totalGames


        console.log(totalPoints)
        console.log(totalGames)
        console.log(calculatedAverage)
    });

    it('then validate that the calculation equals the average points per game', () => {

        assert.equal($('//caption[contains(text(), "Per Game Table") and not(contains(text(), "Playoffs"))]/following-sibling::tbody//td[text()="19"]/following-sibling::td[text()="20.9"]').getText(), calculatedAverage)


    });


});







// type in the website https://www.basketball-reference.com/players/j/jamesle01.html

//  wait for the lebron james picture to pop up

//  get texts of total ppg and total games for the year and per game points

//  convert string to a number and do calculations

//  Assert that the calculation equals per game points