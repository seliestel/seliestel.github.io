"use strict";

$(document).ready(function() {
  var generateResume = function(toPrint) {

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

    var pageTitle = '';
    var docTitle = '';
    if (toPrint == 'cv') {
    	pageTitle = 'Curriculum Vitae';
    	docTitle = 'CV - Ignasi Ribo.pdf';
    } else if (toPrint == 'publist') {
      pageTitle = 'List of publications';
    	docTitle = 'Publications - Ignasi Ribo.pdf';
    };

    var docDefinition = {
      content: [],
      header: {       
       canvas: [{
          type: 'line',
          x1: 40, y1: 30, x2: 595-40, y2: 30,
          lineWidth: 3
        }]
      },
      footer: function(currentPage, pageCount) { return [
        {
          canvas: [{
            type: 'line',
            x1: 40, y1: 0, x2: 595-40, y2: 0,
            lineWidth: 0.1
          }]
        },
        {
          columns: [
           { text: [ pageTitle, ' - Ignasi Ribó'], alignment: 'left', fontSize: 9, font: 'OpenSans', margin: [40, 0, 0, 0] },
           { text: [ 'Page ' + currentPage.toString() + ' of ' + pageCount.toString() ], alignment: 'center', fontSize: 9, font: 'OpenSans', margin: [0, 0, 0, 0] },
           { text: [ 'Last updated: ', resumeContent['updated']], alignment: 'right', fontSize: 9, font: 'OpenSans', margin: [0, 0, 40, 0] }
          ]
        }
        ]
      },
      pageBreakBefore: function(currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) {
        return (currentNode.headlineLevel === 1 || currentNode.headlineLevel === 2) && currentNode.startPosition.top >= 700;
      },
      defaultStyle: {
        font: 'OpenSans'
      },
      styles: {
        curriculum: {
          fontSize: 15,
          font: 'OpenSans',
          bold: false,
          alignment: 'center',
          margin: [0, 10, 0, 0]
        },        
        bio: {
          fontSize: 9,
          font: 'OpenSans',
          bold: false,
          alignment: 'center',
          margin: [0, 10, 0, 0]
        },        
        name: {
          fontSize: 26,
          font: 'Raleway',
          bold: true,
          alignment: 'center',
          margin: [0, 10, 0, 0]
        },
        section_heading: {
          fontSize: 13,
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
          fontSize: 10,
          font: 'OpenSans',
          bold: false,
          alignment: 'justified',
          margin: [0, 10, 0, 0]
        },
       bibliography: {
          fontSize: 10,
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

    if (toPrint == 'cv') {
		 // Header
    	 content.push({ text: 'Curriculum Vitae', style: 'curriculum'});
       content.push({ text: resumeContent['bio']['name'], style: 'name'});

       // Bio
       dashedHeaderLine();
       content.push({
        stack: [
           { text: ['Born ', resumeContent['bio']['birth_date'], ' in ', resumeContent['bio']['birth_place'], '.'], style: 'bio'}, 
           { 
            columns: [
            {
              width: '50%',
              text: [
                'Contact: \n', resumeContent['bio']['current_address'], '\n',
                resumeContent['bio']['phone']
              ]
            },
            {
              width: '50%',
              text: [
                 'Email:\n',
                 resumeContent['bio']['work_email'], ' (work)\n',
                 resumeContent['bio']['personal_email'], ' (private)\n',
                 '\nWebsite:\n', resumeContent['bio']['website'], '\n',
              ]
            },
          ], columnGap: 5, style: 'bio' }
        ], unbreakable: true }
      );

      dashedHeaderLine();

      // Academic interests
      content.push(sectionHeading('Academic interests'));
      content.push({ text: resumeContent['interests'], style: 'full_text'});

      // Education
      content.push(sectionHeading('Education'));
      $.each(resumeContent['education'], function(i, item) {
        content.push({
          stack: [
            { columns: [
              {
                width: '20%',
                text: item['time']
              },
              {
                width: '80%',
                text: [
                  { text: item['degree'], bold: true }, ', ', { text: item['subject'], italics: true }, '.\n',
                  item['university'], ', ', item['place'], '.\n',
                  item['details']
                ]
              },
            ], columnGap: 5, style: 'full_text' }
          ], unbreakable: true })
      });  
 
      // Academic employment
      content.push(sectionHeading('Academic Employment'));
      $.each(resumeContent['academic_employment'], function(i, item) {
        content.push({
            stack: [
              {
              columns: [
              {
                width: '20%',
                text: item['time']
              },
              {
                width: '80%',
                text: [
                  { text: item['position'], bold: true }, ', ', item['department'], '.\n',
                  item['university'], ' (', item['place'], ').\n',
                  item['details']
                ]
              },
              ], columnGap: 5, style: 'full_text'
              }
            ], unbreakable: true
          }  
        )
      });

      // Other employment
      content.push(sectionHeading('Other Employment'));
      $.each(resumeContent['other_employment'], function(i, item) {
        content.push({
            stack: [
              { columns: [
                {
                  width: '20%',
                  text: item['time']
                },
                {
                  width: '80%',
                  text: [
                    { text: item['position'], bold: true }, ', ', item['organization'], ' (',item['place'], ').\n',
                    item['details']
                  ]
                },
                ], columnGap: 5, style: 'full_text' }
              ], unbreakable: true 
            })
      }); 
      content.push(sectionHeading('Publications'));

    } else if (toPrint == 'publist') {
		 // Header
    	 content.push({ text: 'List of publications', style: 'curriculum', alignment: 'left'});
       content.push({ text: resumeContent['bio']['name'], style: 'name', alignment: 'left', margin: [0, 0, 0, 20]});
    }

    // Publications
    content.push(sectionSubheading('Peer-reviewed journal articles and book chapters'));
    $.each(resumeContent['academic_articles'], function(i, item) {
      var basic_ref = item['authors'] + '. ' + item['year'] + '. ' + item['title'] + '. ';
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
      }
    });

    content.push(sectionSubheading('Other articles'));
    $.each(resumeContent['other_articles'], function(i, item) {
      var basic_ref = item['authors'] + '. ' + item['date'] + '. ' + item['title'] + '. ' + item['publisher'];
      var link = '';
      if (item['link'] != undefined && item['link'].length > 0) link = link + ' Available at ' + item['link'] + '.';
      content.push({
        stack: [
           { text:
             [ 
               basic_ref, 
               link
             ],
             style: 'bibliography' }
           ], unbreakable: true
      });
    });

    // Books
    content.push(sectionSubheading('Books'));
    $.each(resumeContent['books'], function(i, item) {
      var isbn = '';
      if (item['isbn'] != undefined && item['isbn'].length > 0) isbn = isbn + 'ISBN: ' + item['isbn'] + '. ';
      var link = '';
      if (item['link'] != undefined && item['link'].length > 0) link = link + ' Available at ' + item['link'] + '. ';
      content.push({
        stack: [
           { text:
             [ 
               item['authors'], '. ', item['year'], '. ', { text: item['title'], italics: true }, '. ', 
               item['place'], ': ', item['publisher'], '. ', isbn, link, item['type'], '.'
             ],
             style: 'bibliography' }
           ], unbreakable: true            
         });
    });

    // Conferences
    content.push(sectionSubheading('Conferences'));
    $.each(resumeContent['conferences'], function(i, item) {
    	var topic = '. ';
    	if (item['topic'] != undefined && item['topic'].length > 0) topic = ", " + item['topic'] + '. ';
      var present = '';
      if (item['status'] != undefined && item['status'].length > 0) present = present + item['status'] + ' at ' + item['venue'] + ', ' + item['place'] + '. ';
      var link = '';
      if (item['link'] != undefined && item['link'].length > 0) link = link + ' Available at ' + item['link'] + '. ';
      content.push({
        stack: [
           { text:
             [ 
               item['authors'], '. ', item['month'], ' ', item['year'], '. ', item['title'], '. ',
               item['event'], { text: topic, italics: true }, item['type'], '. ', present, link, '.'
             ],
             style: 'bibliography' }
           ], unbreakable: true    
         });
    });

    if (toPrint == 'cv') {


      // Affiliations
      content.push(sectionHeading('Professional Affiliations and Services'));
      $.each(resumeContent['affiliations'], function(i, item) {
        content.push({ columns: [
          {
            width: '20%',
            text: item['time']
          },
          {
            width: '80%',
            text: [
              { text: item['position'], bold: true }, ', ', item['organization'], '.\n',
              item['details']
            ]
          },
        ], columnGap: 5, style: 'full_text' })
      });

      // Grants and Awards
      content.push(sectionHeading('Grants and Awards'));
      //content.push(sectionSubheading('Grants'));
      $.each(resumeContent['grants'], function(i, item) {
        var number = '';
        if (item['number'] != undefined && item['number'].length > 0) number = number + 'Grant number: '+ item['number'] + '. ';
        var funder = '';
        if (item['funder'] != undefined && item['funder'].length > 0) funder = funder + 'Granted by '+ item['funder'] + '. ';
        var amount = '';
        if (item['amount'] != undefined && item['amount'].length > 0) amount = amount + 'Amount: '+ item['amount'] + '. ';
        var link = '';
        if (item['link'] != undefined && item['link'].length > 0) link = link + ' Available at ' + item['link'] + '. ';
        content.push({ columns: [
          {
            width: '20%',
            text: item['dates']
          },
          {
            width: '80%',
            text: [
              item['project'], '. ', number, funder, amount, link
            ]
          },
        ], columnGap: 5, style: 'full_text' })
      });

//      content.push(sectionSubheading('Awards'));
      $.each(resumeContent['awards'], function(i, item) {
        var reason = '';
        if (item['reason'] != undefined && item['reason'].length > 0) reason = reason + 'Award for '+ item['number'] + '. ';
        var funder = '';
        if (item['funder'] != undefined && item['funder'].length > 0) funder = funder + 'Awarded by '+ item['funder'] + '. ';
        var amount = '';
        if (item['amount'] != undefined && item['amount'].length > 0) amount = amount + 'Amount: '+ item['amount'] + '. ';
        var link = '';
        if (item['link'] != undefined && item['link'].length > 0) link = link + ' Available at ' + item['link'] + '. ';
        content.push({ columns: [
          {
            width: '20%',
            text: item['date']
          },
          {
            width: '80%',
            text: [ item['award'], '. ', reason, funder, amount, link ]
          },
        ], columnGap: 5, style: 'full_text' })
      });

      // Languages
      content.push(sectionHeading('Languages'));
/*
      var list = function(items) {
        return { ul: items, margin: [20, 0, 20, 0] }
      };
      var langList = new Array;
      $.each(resumeContent['languages'], function(i, item) {
        var diploma = '';
        if (item['diploma'] != undefined && item['diploma'].length > 0) diploma = diploma + ' ('+ item['diploma'] + '). ';
        var langList.push() item['name'] + ',' + item['level'] + diploma;
      });
    content.push(list(langList));
*/

      $.each(resumeContent['languages'], function(i, item) {
        var diploma = '';
        if (item['diploma'] != undefined && item['diploma'].length > 0) diploma = diploma + ' ('+ item['diploma'] + '). ';
        content.push({ columns: [
          {
            width: '20%',
            text: item['name']
          },
          {
            width: '80%',
            text: [ item['level'], diploma ]
          },
        ], columnGap: 5, style: 'full_text' })
      });

      // Other skills
      content.push(sectionHeading('Other Skills and Diplomas'));
      $.each(resumeContent['various'], function(i, item) {
        content.push({ stack: [ { text: item['item'], style: 'full_text'} ], unbreakable: true });
      });
    }

    return pdfMake.createPdf(docDefinition).download(docTitle);
  };

  $('#download-pdf').on('click', function(e) {
    e.preventDefault();
    console.log("Printing CV");
    generateResume('cv');
  });
  $('#download-publist').on('click', function(e) {
    e.preventDefault();
    console.log("Printing publications");
    generateResume('publist');
  });

});