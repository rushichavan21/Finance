const axios = require("axios");
const cheerio = require("cheerio");
async function scrapeNSEData() {
    try {
      const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Cache-Control': 'max-age=0'
      };
  
      const response = await axios.get('https://www.nseindia.com/', { headers });
      const $ = cheerio.load(response.data);
      const indices = [];
      $('.nav.nav-tabs[role="tablist"] a.nav-item').each((index, element) => {
        const tabBox = $(element).find('.tab_box');
        const name = tabBox.find('.tb_name').text().trim();
        const value = tabBox.find('.tb_val').text().trim().split(' ')[0];
        const changeText = tabBox.find('.tb_per').text().trim();
        const isUp = tabBox.hasClass('up');
        const isDown = tabBox.hasClass('down');
        const match = changeText.match(/(-?\d+\.\d+)\s*\((-?\d+\.\d+)%\)/);
        let change = '0';
        let percentage = '0';
        if (match && match.length >= 3) {
          change = match[1];
          percentage = match[2];
        }
        
        indices.push({
          name,
          value,
          change,
          percentage,
          trend: isUp ? 'up' : (isDown ? 'down' : 'neutral')
        });
      });
      return indices;
    } catch (error) {
      console.error('Error scraping NSE data:', error);
      throw error;
    }
  }
  
module.exports={scrapeNSEData};