var xhr = new XMLHttpRequest();

var url = './health_article.json';

// The open method configures an XHR request with:
// - 'GET': Specifies the HTTP method used for the request.
// - URL: Represents the URL from where you will fetch the data.
// - True: Indicates if the request is asynchronous (true) or synchronous (false).
xhr.open('GET', url, true);

// Inform the XMLHttpRequest object that the expected response from the server should be in JSON format.
xhr.responseType = 'json';

// Define what should happen when the data is successfully loaded using
xhr.onload = function() {
    // Retrieve the articles array from the JSON response.
    var articles = xhr.response.articles;
    // Retrieve the HTML element with the ID 'articles' where the fetched content will be displayed.
    var articlesDiv = document.getElementById('articles');


// Iterate health data to fetch on the front page using loops.

articles.forEach(function(article) {
    // Create HTML elements dynamically for each article's title, description,ways_to_achieve, and benefits
    var articleDiv = document.createElement('div');
    // Populate these HTML elements with corresponding content from the fetched JSON data
    articleDiv.classList.add('article');

    var title = document.createElement('h2'); 
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve:';

    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way) {
      var listItem = document.createElement('li');
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Benefits:';

    var benefitsList = document.createElement('ul');
    article.benefits.forEach(function(benefit) {
      var listItem = document.createElement('li');
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });

    // Attach these elements to the articlesDiv to display each article's details on the webpage
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);
  });
}

xhr.send();
