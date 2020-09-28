import json
import scrapy
import time
import sys
pgno=2
class ScHubInfyLoad(scrapy.Spider):
    name = "ScHubInfyScl"
    start_urls = ['https://scrapingclub.com/exercise/list_infinite_scroll/']

    def parse(self, response):
        global pgno

        for name in response.css("h4.card-title > a::text"):
            print(name.get())

        if pgno is 8:
            sys.exit(0)

        nextPage="?page="
        link="https://scrapingclub.com/exercise/list_infinite_scroll/"+nextPage+str(pgno)
        pgno=pgno+1
        print(pgno)
        yield scrapy.Request(url=link, callback=self.parse)  #this seems to work!
