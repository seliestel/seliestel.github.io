"use strict";
function compare(a,b) {
  if ( parseInt(a['year'],10) > parseInt(b['year'],10) ){
    return -1;
  }
  if ( parseInt(a['year'],10) < parseInt(b['year'],10) ){
    return 1;
  }
  return 0;
}

function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}

$(document).ready(function() {
  var generateList = function() {

    var resumeContent = $.parseJSON($('#cvJson').text());
    pdfMake.fonts = {
     OpenSans: {
       normal: 'OpenSans-Regular.ttf',
       bold: 'OpenSans-Bold.ttf',
       italics: 'OpenSans-Italic.ttf',
       bolditalics: 'OpenSans-BoldItalic.ttf'
     },
     Raleway: {
       normal: 'Raleway-Regular.ttf',
       bold: 'Raleway-Bold.ttf',
       italics: 'Raleway-Italic.ttf',
       bolditalics: 'Raleway-BoldItalic.ttf'
     }     
    }

    var headerLine = function() {
      content.push({
        canvas: [{
          type: 'line',
          x1: 0, y1: 6, x2: 595-2*40, y2: 6,
          lineWidth: 3
        }]
      });
    };

    var docDefinition = {
      content: [],
      header: {       
       canvas: [{
          type: 'line',
          x1: 30, y1: 30, x2: 595-30, y2: 30,
          lineWidth: 3
        }]
      },
      footer: function(currentPage, pageCount) { return {
       columns: [
         { text: 'Publication list - Ignasi Ribó', alignment: 'left', fontSize: 9, font: 'OpenSans', margin: [40, 0, 0, 0] },
         { text: [ 'Page ' + currentPage.toString() + ' of ' + pageCount.toString() ], alignment: 'center', fontSize: 9, font: 'OpenSans', margin: [0, 0, 0, 0] },
         { text: [ 'Last updated: ', resumeContent['updated']], alignment: 'right', fontSize: 9, font: 'OpenSans', margin: [0, 0, 40, 0] }
       ] }
      },
      pageBreakBefore: function(currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) {
        return (currentNode.headlineLevel === 1 || currentNode.headlineLevel === 2) && currentNode.startPosition.top >= 750;
      },
      defaultStyle: {
        font: 'OpenSans'
      },
      styles: {
        curriculum: {
          fontSize: 16,
          font: 'OpenSans',
          bold: false,
          alignment: 'center',
          margin: [0, 10, 0, 0]
        },        
        bio: {
          fontSize: 10,
          font: 'OpenSans',
          bold: false,
          alignment: 'center',
          margin: [0, 10, 0, 0]
        },        
        name: {
          fontSize: 30,
          font: 'Raleway',
          bold: true,
          alignment: 'center',
          margin: [0, 10, 0, 0]
        },
        section_heading: {
          fontSize: 14,
          font: 'Raleway',
          bold: true,
          alignment: 'left',
          margin: [0, 20, 0, 0]
        },
        section_subheading: {
          fontSize: 12,
          font: 'Raleway',
          bold: true,
          italics: true,
          alignment: 'left',
          margin: [0, 10, 0, 0]
        },
        full_text: {
          fontSize: 11,
          font: 'OpenSans',
          bold: false,
          alignment: 'justified',
          margin: [0, 10, 0, 0]
        },
       bibliography: {
          fontSize: 11,
          font: 'OpenSans',
          bold: false,
          alignment: 'left',
          margin: [0, 10, 0, 0]
        },
      }
    };


    var content = docDefinition['content'];

    var sectionHeading = function(text, options) {
      return { text: text, style: 'section_heading', headlineLevel: 1 } 
    };

    var sectionSubheading = function(text, options) {
      return { text: text, style: 'section_subheading', headlineLevel: 2 } 
    };


    var dashedHeaderLine = function() {
      content.push({
        canvas: [{
          type: 'line',
          x1: 100, y1: 20, x2: 495-2*40, y2: 20,
          dash: { length: 1 },
          lineWidth: 1
        }]
      });
    };

    // Build up array of lists
    var publications = [];
    var manuscripts = [];
    $.each(resumeContent['academic_articles'], function(i, item) {
      if (isNormalInteger(item['year'])) {
        publications.push(item);
      } else {
        manuscripts.push(item);
      }
    });
    $.each(resumeContent['books'], function(i, item) {
      if (item['isbn'] != undefined && item['isbn'].length > 0) {
        if (item['type'] == "Essay" || item['type'] == "Textbook") {
          publications.push(item);
        }
      } else if (item['type'] == "Essay" || item['type'] == "Textbook") {
        manuscripts.push(item);     
      }
    });
    publications.sort(compare);
    manuscripts.sort(function(a, b){
      return a['year'] == b['year'] ? 0 : +(a['year'] > b['year']) || -1;
    });
    var count = publications.length;

    // Header
    content.push({ text: 'List of publications', style: 'curriculum'});
    content.push({ text: resumeContent['bio']['name'], style: 'name'});
    content.push({ text: ' ', style: 'section_subheading' });
    content.push(sectionSubheading('Academic articles, books and book chapters'));
    $.each(publications, function(i, item) {
      var basic_ref = count + '. ' + item['authors'] + '. ' + item['year'] + '. ' + item['title'] + '. ';
      if (item['journal'] != undefined && item['journal'].length > 0) {
        var volume = '';
        if (item['volume'] != undefined && item['volume'].length > 0) volume = volume + item['volume'];
        if (item['number'] != undefined && item['number'].length > 0) volume = volume + '(' + item['number'] + ')';
        if (item['pages'] != undefined && item['pages'].length > 0) volume = volume + ': ' + item['pages'];
        if (volume != undefined && volume.length > 0) {
          volume = ' ' + volume + '.';
        } else {
          volume = volume + '.';
        }
        var link = '';
        if (item['doi'] != undefined && item['doi'].length > 0) link = link + ' doi: ' + item['doi'] + '.';
        if ((item['doi'] == undefined || item['doi'].length == 0) && (item['link'] != undefined && item['link'].length > 0)) {
          link = link + ' Available at ' + item['link'] + '.';
        }
        var additional = '';
        if (item['submitted'] != undefined && item['submitted'].length > 0) additional = ' Submitted: ' + item['submitted'] + '.';
        if (item['accepted'] != undefined && item['accepted'].length > 0) additional = ' Accepted: ' + item['accepted'] + '.';
        if (item['online'] != undefined && item['online'].length > 0) additional = ' Online: ' + item['online'] + '.';
        content.push({
          stack: [
             { text:
               [ 
                 basic_ref, { text: item['journal'], italics: true }, 
                 volume,
                 link,
                 additional
               ],
               style: 'bibliography' 
             }
           ], unbreakable: true
         });
      } else if (item['collection'] != undefined && item['collection'].length > 0) {
        var editors = '';
        if (item['editors'] != undefined && item['editors'].length > 0) editors = editors + ' In ' + item['editors'] + ', ';
        var pages = '';
        if (item['pages'] != undefined && item['pages'].length > 0) pages = pages + ' (pp. ' + item['pages'] + ').';
        var publisher = ' ';
        if (item['place'] != undefined && item['place'].length > 0) publisher = publisher + item['place'] + ': ';
        if (item['publisher'] != undefined && item['publisher'].length > 0) publisher = publisher + item['publisher'] + '.';        
        var link = '';
        if (item['link'] != undefined && item['link'].length > 0) link = link + ' Available at ' + item['link'] + '.';
        var additional = '';
        if (item['submitted'] != undefined && item['submitted'].length > 0) additional = ' Submitted: ' + item['submitted'] + '.';
        if (item['accepted'] != undefined && item['accepted'].length > 0) additional = ' Accepted: ' + item['accepted'] + '.';
        if (item['online'] != undefined && item['online'].length > 0) additional = ' Online: ' + item['online'] + '.';
        content.push({
          stack: [
             { text:
               [ 
                 basic_ref, editors, { text: item['collection'], italics: true }, 
                 pages,
                 publisher,
                 link
               ],
               style: 'bibliography' } 
           ], unbreakable: true
        });
      } else if (item['isbn'] != undefined && item['isbn'].length > 0) {
        var isbn = '';
        if (item['isbn'] != undefined && item['isbn'].length > 0) isbn = isbn + 'ISBN: ' + item['isbn'] + '. ';
        var link = '';
        if (item['link'] != undefined && item['link'].length > 0) link = link + ' Available at ' + item['link'] + '. ';
        content.push({
          stack: [
            { text:
               [ 
                 count, '. ', item['authors'], '. ', item['year'], '. ', { text: item['title'], italics: true }, '. ', 
                 item['place'], ': ', item['publisher'], '. ', isbn, link, item['type'], '.'
              ],
               style: 'bibliography' }
             ], unbreakable: true            
           });
      }
      count = count - 1;
    });

    // Book reviews
    content.push(sectionSubheading('Book Reviews'));
    $.each(resumeContent['academic_reviews'], function(i, item) {
      var volume = '';
      if (item['volume'] != undefined && item['volume'].length > 0) volume = volume + item['volume'];
      if (item['number'] != undefined && item['number'].length > 0) volume = volume + '(' + item['number'] + ')';
      if (item['pages'] != undefined && item['pages'].length > 0) volume = volume + ': ' + item['pages'];
      if (volume != undefined && volume.length > 0) {
        volume = ' ' + volume + '.';
      } else {
        volume = volume + '.';
      }
      var link = '';
      if (item['doi'] != undefined && item['doi'].length > 0) link = link + ' doi: ' + item['doi'] + '.';
      if ((item['doi'] == undefined || item['doi'].length == 0) && (item['link'] != undefined && item['link'].length > 0)) {
        link = link + ' Available at ' + item['link'] + '.';
      }
      var additional = '';
      if (item['submitted'] != undefined && item['submitted'].length > 0) additional = ' Submitted: ' + item['submitted'] + '.';
      if (item['accepted'] != undefined && item['accepted'].length > 0) additional = ' Accepted: ' + item['accepted'] + '.';
      if (item['online'] != undefined && item['online'].length > 0) additional = ' Online: ' + item['online'] + '.';
      content.push({
          stack: [
             { text:
               [ 
                 basic_ref, { text: item['journal'], italics: true }, 
                 volume,
                 link,
                 additional
               ],
               style: 'bibliography' 
             }
           ], unbreakable: true
      });
    });

    // Manuscripts
    content.push({ text: ' ', style: 'section_subheading' });
    content.push(sectionSubheading('Manuscripts accepted, under review or in preparation'));
    $.each(manuscripts, function(i, item) {
      var basic_ref = item['authors'] + '. ' + item['title'] + '. ';
      if (item['journal'] != undefined && item['journal'].length > 0 && item['journal'] != "In preparation") {
        var additional = '';
        if (item['submitted'] != undefined && item['submitted'].length > 0) additional = ' Submitted: ' + item['submitted'] + '. ';
        if (item['accepted'] != undefined && item['accepted'].length > 0) additional = ' Accepted: ' + item['accepted'] + '. ';
        content.push({
          stack: [
             { text:
               [ 
                 basic_ref, { text: item['journal'], italics: true }, '.',
                 additional, item['year'], '.'
               ],
               style: 'bibliography' 
             }
           ], unbreakable: true
         });
      } else if (item['collection'] != undefined && item['collection'].length > 0) {
        var editors = '';
        if (item['editors'] != undefined && item['editors'].length > 0) editors = editors + ' In ' + item['editors'] + ', ';
        var pages = '';
        if (item['pages'] != undefined && item['pages'].length > 0) pages = pages + ' (pp. ' + item['pages'] + ').';
        var publisher = ' ';
        if (item['place'] != undefined && item['place'].length > 0) publisher = publisher + item['place'] + ': ';
        if (item['publisher'] != undefined && item['publisher'].length > 0) publisher = publisher + item['publisher'] + '.';        
        var link = '';
        if (item['link'] != undefined && item['link'].length > 0) link = link + ' Available at ' + item['link'] + '.';
        var additional = '';
        if (item['submitted'] != undefined && item['submitted'].length > 0) additional = ' Submitted: ' + item['submitted'] + '.';
        if (item['accepted'] != undefined && item['accepted'].length > 0) additional = ' Accepted: ' + item['accepted'] + '.';
        if (item['online'] != undefined && item['online'].length > 0) additional = ' Online: ' + item['online'] + '.';
        content.push({
          stack: [
             { text:
               [ 
                 basic_ref, editors, { text: item['collection'], italics: true }, 
                 pages,
                 publisher,
                 link
               ],
               style: 'bibliography' } 
           ], unbreakable: true
        });
      } else {
        var type = '';
        if (item['type'] != undefined && item['type'].length > 0) type = type + item['type'] + '. ';
        var publisher = '';
        if (item['publisher'] != undefined && item['publisher'].length > 0) publisher = publisher + item['publisher'] + '. ';        
        content.push({
          stack: [
            { text:
               [ 
                 item['authors'], '. ', { text: item['title'], italics: true }, '. ', publisher, type, item['year'], '.'
              ],
               style: 'bibliography' }
             ], unbreakable: true            
           });
      }
    });
    return pdfMake.createPdf(docDefinition).open();
  };

  $('#print_numbered_list').on('click', function(e) {
    e.preventDefault();
    generateList();
  });
});