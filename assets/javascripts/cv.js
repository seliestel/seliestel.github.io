"use strict";

$(document).ready(function() {

  var generateBio = function() {

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

    var pageTitle = 'Bio';
    var docTitle = 'Bio - Ignasi Ribo.pdf';
 
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
      styles: {
        bio: {
          fontSize: 15,
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
          margin: [0, 10, 0, 30]
        },
        section_heading: {
          fontSize: 10,
          font: 'Raleway',
          bold: true,
          alignment: 'center',
          margin: [0, 50, 0, 0]
        },
        contact: {
          fontSize: 10,
          font: 'Raleway',
          bold: false,
          alignment: 'center',
          margin: [0, 5, 0, 0]
        },
        full_text: {
          fontSize: 10,
          font: 'OpenSans',
          bold: false,
          alignment: 'justified',
          margin: [0, 10, 0, 0]
        },
        tight: {
          fontSize: 10,
          font: 'OpenSans',
          bold: false,
          alignment: 'justified',
          margin: [0, 5, 0, 0]
        },
        italice: {
          fontSize: 10,
          font: 'OpenSans',
          bold: false,
          italics: true,
          alignment: 'justified',
          margin: [0, 5, 0, 0]
        }
      }
    };

    var content = docDefinition['content'];

    var sectionHeading = function(text, options) {
      return { text: text, style: 'section_heading', headlineLevel: 1 } 
    };

    content.push({ text: 'Bio', style: 'bio'});
    content.push({ text: resumeContent['bio']['name'], style: 'name'});
    content.push({ text: resumeContent['bio']['academic_short'], style: 'full_text'});

    content.push({ text: 'Contact by email', style: 'section_heading'});
    content.push({ text: [ resumeContent['bio']['work_email'],' (work)'], style: 'contact'});
    content.push({ text: [ resumeContent['bio']['personal_email'],' (private)'], style: 'contact'});
    return pdfMake.createPdf(docDefinition).download(docTitle);

  }

  var generateTENKResume = function(toPrint) {

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
    if (toPrint == 'cv' || toPrint == 'no-publist') {
      pageTitle = 'Curriculum Vitae';
      docTitle = 'CV - Ignasi Ribo.pdf';
    } else if (toPrint == 'publist') {
      pageTitle = 'List of Publications';
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
        tight: {
          fontSize: 10,
          font: 'OpenSans',
          bold: false,
          alignment: 'justified',
          margin: [0, 5, 0, 0]
        },
        italice: {
          fontSize: 10,
          font: 'OpenSans',
          bold: false,
          italics: true,
          alignment: 'justified',
          margin: [0, 5, 0, 0]
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

     /// TO PRINT = PUBLICATION LIST
     // Header
       content.push({ text: 'Curriculum Vitae', style: 'curriculum'});
       //content.push({ text: resumeContent['bio']['name'], style: 'name'});

    // Personal details
      content.push(sectionHeading('Personal Details'));
      content.push({
        stack: 
          [
            { columns: 
              [
                { width: '20%', text: 'Name' },
                { width: '80%', text: resumeContent['bio']['name'] }
              ]
            },
            { columns: 
              [
                { width: '20%', text: 'Place of birth' },
                { width: '80%', text: resumeContent['bio']['birth_place'] }
              ]
            },
            { columns:             
              [
                { width: '20%', text: 'Date of birth' },
                { width: '80%', text: resumeContent['bio']['birth_date'] }
              ]
            },
            { columns: 
               [
                { width: '20%', text: 'Email (personal)' },
                { width: '80%', text: resumeContent['bio']['personal_email'] }
              ]
            },
            { columns: 
               [
                { width: '20%', text: 'Email (work)' },
                { width: '80%', text: resumeContent['bio']['work_email'] }
              ]
            },
            { columns: 
               [
                { width: '20%', text: 'Address' },
                { width: '80%', text: resumeContent['bio']['current_address'] }
              ]
            },
            { columns: 
               [
                { width: '20%', text: 'Phone number' },
                { width: '80%', text: resumeContent['bio']['phone'] }
              ]
            },
            { columns: 
               [
                { width: '20%', text: 'ORCID' },
                { width: '80%', text: resumeContent['bio']['orcid'] }
              ]
            }
          ], columnGap: 5, style: 'full_text'
      }); 

      // Degrees
      content.push(sectionHeading('Degrees'));
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
                  item['university'], ', ', item['place'], '. ', item['link'], '\n',
                  item['details']
                ]
              },
            ], columnGap: 5, style: 'full_text' }
          ], unbreakable: true })
      });  
 

     // Other education and expertise
      content.push(sectionHeading('Other Education and Expertise'));
      $.each(resumeContent['other_education'], function(i, item) {
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
                  item['institution'], ', ', item['place'], '. ', item['link'], '\n',
                  item['details']
                ]
              },
            ], columnGap: 5, style: 'full_text' }
          ], unbreakable: true })
      });  

      $.each(resumeContent['expertise'], function(i, item) {
        content.push({
          stack: [
            { columns: [
              {
                width: '20%',
                text: 'Expertise'
              },
              {
                width: '80%',
                text: item['item']
              },
            ], columnGap: 5, style: 'full_text' }
          ], unbreakable: true })
      });  
 
      // Languages
      content.push(sectionHeading('Languages'));
      $.each(resumeContent['languages'], function(i, item) {
        var diploma = '';
        if (item['diploma'] != undefined && item['diploma'].length > 0) diploma = diploma + ' ('+ item['diploma'] + ') ';
        content.push({ columns: [
          {
            width: '20%',
            text: item['name']
          },
          {
            width: '80%',
            text: [ item['level'], diploma ]
          },
        ], columnGap: 5, style: 'tight' })
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

      // Other Employment
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
                    { text: item['position'], bold: true }, ', ', item['organization'], ' (',item['place'], '). ','\n',
                    , item['details']
                  ]
                },
                ], columnGap: 5, style: 'full_text' }
              ], unbreakable: true 
            })
      }); 

      // Research Funding and Grants
      content.push(sectionHeading('Research Funding and Grants'));
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
              { text: item['project'], bold: true }, '. ', number, funder, amount, link
            ]
          },
        ], columnGap: 5, style: 'full_text' })
      });

      // Research output
      content.push(sectionHeading('Research Output'));
      content.push({ text: 'Full list of publications available as an addendum.', style: 'italice' });      
      var Q1 = 0;
      var Q2 = 0;
      var Q3 = 0;
      var Q4 = 0;
      var nonscopus = 0;
      var chapters = 0;
      var nonacademic = 0;
      var acbooks = 0;
      var nonacbooks = 0;
      var papers = 0;
      var lectures = 0;
      var seminars = 0;

      $.each(resumeContent['academic_articles'], function(i, item) {
        if (item['scopus'] != undefined && item['scopus'].length > 0) {
              if (item['scopus'] == 'Q1') Q1 = Q1+1;
              if (item['scopus'] == 'Q2') Q2 = Q2+1;
              if (item['scopus'] == 'Q3') Q3 = Q3+1;
              if (item['scopus'] == 'Q4') Q4 = Q4+1;
            } else {
              nonscopus = nonscopus + 1;
            }
      });

      $.each(resumeContent['chapters'], function(i, item) {
        chapters = chapters + 1;
      });

      $.each(resumeContent['other_articles'], function(i, item) {
        nonacademic = nonacademic + 1;
      });

      $.each(resumeContent['books'], function(i, item) {
        if (item['type'] == 'Textbook' || item['type'] == 'Essay') {
          acbooks = acbooks + 1;
        } else {
          nonacbooks = nonacbooks + 1;
        } 
      });

      $.each(resumeContent['conferences'], function(i, item) {
        if (item['type'] == 'Paper') papers = papers + 1;
        if (item['type'] == 'Seminar') seminars = seminars + 1;
        if (item['type'] == 'Invited lecture') lectures = lectures + 1;
      });

      content.push({
        stack: 
          [
            { columns:             
              [
                { width: '50%', text: 'Academic articles on Scopus Q1-Q4' },
                { width: '50%', text: (Q1+Q2+Q3+Q4) }
              ]
            },
            { columns: 
               [
                { width: '50%', text: 'Other academic articles' },
                { width: '50%', text: nonscopus }
              ]
            },
            { columns: 
              [
                { width: '50%', text: 'Academic books' },
                { width: '50%', text: acbooks }
              ]
            },
            { columns: 
               [
                { width: '50%', text: 'Chapters in academic books' },
                { width: '50%', text: chapters }
              ]
            },
            { columns: 
              [
                { width: '50%', text: 'Non-academic books' },
                { width: '50%', text: nonacbooks }
              ]
            },
            { columns: 
               [
                { width: '50%', text: 'Non-academic articles' },
                { width: '50%', text: nonacademic }
              ]
            },
            { columns: 
               [
                { width: '50%', text: 'Papers presented at conferences' },
                { width: '50%', text: papers }
              ]
            },
           { columns: 
               [
                { width: '50%', text: 'Invited lectures' },
                { width: '50%', text: lectures }
              ]
            }
          ], columnGap: 5, style: 'full_text'
      }); 


      content.push({
        stack: 
          [
            { text: [ 'Impact metrics (as of ', resumeContent['updated'], '):' ], 
              style: 'full_text' 
            },
            { columns: 
               [
                { width: '50%', text: 'Google Scholar citations' },
                { width: '50%', text: resumeContent['impact']['citations'] }
              ]
            },
            { columns: 
               [
                { width: '50%', text: 'Google Scholar h-index' },
                { width: '50%', text: resumeContent['impact']['h-index'] }
              ]
            },
            { columns: 
               [
                { width: '50%', text: 'Google Scholar i10-index' },
                { width: '50%', text: resumeContent['impact']['i10-index'] }
              ]
            }           
          ], columnGap: 5, style: 'full_text'
      }); 


/*
      // Teaching merits
      content.push(sectionHeading('Teaching Merits'));
      var undergrad = 0;
      var postgrad = 0;

      $.each(resumeContent['teaching'], function(i, item) {
        if (item['type'] == 'undergraduate') undergrad = undergrad + 1;
        if (item['type'] == 'postgraduate') postgrad = postgrad + 1;          
      });

      content.push({
        stack: 
          [
            { columns:             
              [
                { width: '50%', text: 'Taught semesters (undergraduate)' },
                { width: '50%', text: undergrad }
              ]
            },
            { columns: 
               [
                { width: '50%', text: 'Taught semesters (postgraduate)' },
                { width: '50%', text: postgrad }
              ]
            },
            { columns: 
              [
                { width: '50%', text: 'Seminars' },
                { width: '50%', text: seminars }
              ]
            },
            { columns: 
               [
                { width: '50%', text: 'Invited lectures' },
                { width: '50%', text: lectures }
              ]
            }           
          ], columnGap: 5, style: 'full_text'
      }); 

      $.each(resumeContent['teaching_merits'], function(i, item) {
        content.push({ columns: [
          {
            width: '20%',
            text: item['dates']
          },
          {
            width: '80%',
            text: [ item['merit'], ' ', item['link'] ]
          },
        ], columnGap: 5, style: 'full_text' })
      });
*/
      // Research Supervision
      content.push(sectionHeading('Research Supervision'));
      $.each(resumeContent['supervision'], function(i, item) {
        content.push({ columns: [
          {
            width: '20%',
            text: item['dates']
          },
          {
            width: '80%',
            text: [ { text: item['activity'], bold: true}, '. ', item['role'], ' ', item['students'], ' ', 
                    item['type'], ' students in the ', item['degree'], ', ', item['institution'],
                    '. ', item['link'], '.'
            ]
          },
        ], columnGap: 5, style: 'full_text' })
      });

      // Research Supervision
      content.push(sectionHeading('Academic Services'));   
      $.each(resumeContent['leadership'], function(i, item) {
        content.push({ columns: [
          {
            width: '20%',
            text: item['dates']
          },
          {
            width: '80%',
            text: [ { text: item['role'], bold: true}, ', ', item['activity'], item['link'], '.'
            ]
          },
        ], columnGap: 5, style: 'full_text' })
      });


      // Awards and Honours
      content.push(sectionHeading('Awards and Honours'));
      $.each(resumeContent['awards'], function(i, item) {
        var reason = '';
        if (item['reason'] != undefined && item['reason'].length > 0) reason = reason + 'Award for '+ item['reason'] + '. ';
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
            text: [ { text: item['award'], bold: true}, '. ', reason, funder, amount, link ]
          },
        ], columnGap: 5, style: 'full_text' })
      });

      // Awards and Honors
      content.push(sectionHeading('Other Academic Merits'));
      $.each(resumeContent['various'], function(i, item) {
        content.push({ stack: [ { text: item['item'], style: 'full_text'} ], unbreakable: true });
      });



    } else {

      /// TO PRINT = PUBLICATION LIST
      content.push({ text: 'List of Publications', style: 'curriculum'});

      // Publications
      content.push(sectionHeading('Academic (peer-reviewed journal) articles'));
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
         if (item['doi'] != undefined && item['doi'].length > 0) link = link + ' doi: ' + 'https://doi.org/' + item['doi'] + '.';
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

      content.push(sectionHeading('Other articles'));
      $.each(resumeContent['other_articles'], function(i, item) {
        var basic_ref = item['authors'] + '. ' + item['date'] + '. ' + item['title'] + '. ' + item['publisher'] + '.';
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

      // Book reviews
      content.push(sectionSubheading('Book reviews'));
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
       if (item['doi'] != undefined && item['doi'].length > 0) link = link + ' doi: ' + 'https://doi.org/' + item['doi'] + '.';
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

      content.push(sectionHeading('Book chapters'));
      $.each(resumeContent['chapters'], function(i, item) {
        var basic_ref = item['authors'] + '. ' + item['year'] + '. ' + item['title'] + '.';
        if (item['collection'] != undefined && item['collection'].length > 0) {
          var editors = '';
          if (item['editors'] != undefined && item['editors'].length > 0) editors = editors + ' In ' + item['editors'] + ', ';
          var pages = '';
          if (item['pages'] != undefined && item['pages'].length > 0) pages = pages + ' (pp. ' + item['pages'] + ')';
          var publisher = '. ';
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


      // Books
      content.push(sectionHeading('Books'));
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
      content.push(sectionHeading('Conferences'));
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
                 item['event'], { text: topic, italics: true }, item['type'], '. ', present, link
               ],
               style: 'bibliography' }
            ], unbreakable: true    
          });
      });


    }
    return pdfMake.createPdf(docDefinition).download(docTitle);
  };

  $('#download-pdf').on('click', function(e) {
    e.preventDefault();
    console.log("Printing CV TENK");
    generateTENKResume('cv');
    generateTENKResume('publist');
  });

/*  $('#download-pdf').on('click', function(e) {
    e.preventDefault();
    console.log("Printing CV");
    generateResume('cv');
  });
*/
  $('#download-publist').on('click', function(e) {
    e.preventDefault();
    console.log("Printing publications");
    generateTENKResume('publist');
  });
  $('#download-without-publist').on('click', function(e) {
    e.preventDefault();
    console.log("Printing without publications");
    generateTENKResume('cv');
  });
  $('#download-bio').on('click', function(e) {
    e.preventDefault();
    console.log("Printing bio");
    generateBio();
  });

});


/*
 OLD RESUME


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
    if (toPrint == 'cv' || toPrint == 'no-publist') {
      pageTitle = 'Curriculum Vitae';
      docTitle = 'CV - Ignasi Ribo.pdf';
    } else if (toPrint == 'publist') {
      pageTitle = 'List of Publications';
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

    if (toPrint == 'cv' || toPrint =='no-publist') {
     // Header
       content.push({ text: 'Curriculum Vitae', style: 'curriculum'});
       content.push({ text: resumeContent['bio']['name'], style: 'name'});

       // Bio
       dashedHeaderLine();
       content.push({
        stack: [
           { text: ['Born ', resumeContent['bio']['birth_date'], ' in ', resumeContent['bio']['birth_place'], '.\n', 
                    'Orcid ID: https://orcid.org/', resumeContent['bio']['orcid'], '.'], style: 'bio'}, 
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
                    { text: item['position'], bold: true }, ', ', item['organization'], ' (',item['place'], '). ', item['link'], '\n',
                    item['details']
                  ]
                },
                ], columnGap: 5, style: 'full_text' }
              ], unbreakable: true 
            })
      }); 
      if (toPrint != 'no-publist') {
        content.push(sectionHeading('Publications'));
      }

    } else if (toPrint == 'publist') {
     // Header
       content.push({ text: 'List of Publications', style: 'curriculum', alignment: 'left'});
       content.push({ text: resumeContent['bio']['name'], style: 'name', alignment: 'left', margin: [0, 0, 0, 20]});
    }

    if (toPrint != 'no-publist') {
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
         if (item['doi'] != undefined && item['doi'].length > 0) link = link + ' doi: ' + 'https://doi.org/' + item['doi'] + '.';
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
                 item['event'], { text: topic, italics: true }, item['type'], '. ', present, link
               ],
               style: 'bibliography' }
            ], unbreakable: true    
          });
      });
    }

    if (toPrint == 'cv' || toPrint == 'no-publist') {

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
/

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

      // Optional modules - References
/*     content.push(sectionHeading('References'));

      $.each(resumeContent['references'], function(i, item) {
        if (item['active'] == "Yes") {
          content.push({
          stack: [
            { text:
               [ 
                 item['title'], ' ', item['name'], '. ', item['position'], ', ', item['institution'], '. ',
                 item['relation'], '. ', 
                 'Contact: ', item['email'], '.'
              ],
               style: 'bibliography' }
             ], unbreakable: true            
           });
        }
      });
  /
    }

    return pdfMake.createPdf(docDefinition).download(docTitle);
  };
*/